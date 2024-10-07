<p align="center">
  <img src = "https://imgur.com/0Zrgwj0.png" width=700>
</p>
<h1 align="center"> JS Demons Payments Portal </h1>

JS Demons Payments Portal is a sleek and modern international payment system designed for banks. Customers can securely log in, register, and make international payments using the SWIFT method. This system ensures data security and integrity with robust encryption and validation.


## Features
- **User Registration & Login:** Secure authentication system with username and password.
- **International Payment Options:** SWIFT-based international payments with support for various currencies.
- **Responsive Design:** Sleek and professional UI built using React and Material UI.
- **Real-Time Payment Process:** Integrated real-time payment system that stores payment data securely.
- **Disabled Payment Methods:** Other payment methods (Mastercard, PayPal, EFT) are visually disabled, leaving SWIFT as the primary method.
  

## Screenshots

### Home Page

<p align="center">
  <img src = "https://imgur.com/r5SPBCg.png" width=700>
</p>

### Payment Information/Method Page

<p align="center">
  <img src = "https://imgur.com/aum2Nuy.png" width=700>
</p>

### Payment Details

<p align="center">
  <img src = "https://imgur.com/Z397Nlg.png" width=700>
</p>


## Tech Stack

- **Frontend**: React.js, Material UI
- **Backend**: Node.js, Express
- **Database**: In-memory storage (for testing)
- **Validation**: Regex-based form validation
- **Security**: bcrypt for password hashing, JWT for authentication


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)


## Installation

Follow these steps to get the app up and running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/js-demons-portal.git
cd js-demons-portal
```

### 2. Frontend Setup (React)

Navigate to the client folder and install the dependencies:

```bash
cd client
npm install
```

### 3. Backend Setup (Node.js/Express)

Navigate to the server folder and install the dependencies:

```bash
cd ../server
npm install
```

### 5. Running the App

#### Start the Frontend (React)
In the client directory, start the frontend:

```bash
cd client
npm start
```

The React app will now run at http://localhost:3000/.

#### Start the Backend (Node.js/Express)
In the server directory, start the backend:

```bash
cd ../server
npm start
```

The backend API will run at http://localhost:5000/.

## Usage
Once the app is up and running:
1. Open your browser and navigate to http://localhost:3000/.
2. Register a new account using your full name, username, ID number, and account number.
3. Login using your credentials.
4. Proceed to Payment and fill in the required fields, choose your currency, and select the SWIFT payment method.
5. Review the transaction on the Payment Details page and confirm the payment.

## Project Structure
```bash
├── client                # React frontend
│   ├── public            # Public assets like index.html
│   └── src               # React components and assets
├── server                # Node.js backend
│   ├── models            # Data models (for storing users, payments)
│   └── routes            # API routes (login, register, payment)
└── README.md             # Project documentation
```

<!-- [![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/X7Vf0Ahx) -->
