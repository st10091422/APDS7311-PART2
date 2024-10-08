const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const { check, validationResult } = require('express-validator');


const bruteForce = require('../middleware/bruteForceMiddleWare')
const loginAttemptLogger = require('../middleware/loginAttempMiddleWare')

// REGISTER Route
router.post('/register',
    [
        // Input validation rules using express-validator
        check('username')
            .isLength({ min: 3, max: 15 })
            .matches(/^[a-zA-Z0-9_-]+$/)
            .withMessage('Invalid username. It must be 3-15 characters long and can include letters, numbers, underscores, or hyphens.'),
        check('accountNumber')
            .isNumeric()
            .withMessage('Account number must be numeric.'),
        check('idNumber')
            .isLength({ min: 13, max: 13 })
            .isNumeric()
            .withMessage('ID number must be exactly 13 digits.'),
        check('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long.')
    ],
    async (req, res) => {
    // This router wa adapted from bezkoder
    // https://www.bezkoder.com/node-js-express-login-mongodb/#:~:text=In%20this%20tutorial,%20we%E2%80%99re%20gonna%20build%20a%20Node.js%20Express%20Login
    // bezkoder
    // https://www.bezkoder.com/author/bezkoder/
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { username, fullName, idNumber, accountNumber, password } = req.body;

            // Check if username, idNumber, or accountNumber already exists
            const existingUser = await User.findOne({
                $or: [
                    { idNumber: idNumber },
                    { username: username },
                    { accountNumber: accountNumber }
                ]
            });

            if (existingUser) {
                return res.status(400).send('Username, account number, or ID number already exists.');
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user object and save it to the database
            const newUser = new User({
                username,
                fullName,
                idNumber,
                accountNumber,
                password: hashedPassword
            });

            await newUser.save();
            res.status(201).send('User registered successfully.');

        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
);

// Login Route
router.post('/login', bruteForce.prevent, loginAttemptLogger, async (req, res) => {
    try {
        const { username, accountNumber, password } = req.body;
        
                // Find the user by both username and account number
        const user = await User.findOne({ 
            $and: [
                { username: username }, 
                { accountNumber: accountNumber }
            ]
        });
        
        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        // If user is found and password matches, generate a JWT token
        if (user && isMatch) {
            const token = jwt.sign({ username }, process.env.JWT_SEC, { expiresIn: '1h' });
            res.status(201).json({ token, userId: user._id });
        } else {
                        // If credentials are invalid, return a 400 response
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        // Catch and log server errors, then return a 500 response
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = router 