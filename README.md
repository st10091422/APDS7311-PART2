<p align="center">
  <img src = "https://imgur.com/0Zrgwj0.png" width=700>
</p>
<h1 align="center"> JS Demons Payments Portal </h1>

JS Demons Payments Portal is a sleek and modern international payment system designed for banks. Customers can securely log in, register, and make international payments using the SWIFT method. This system ensures data security and integrity with robust encryption and validation.

## REPO USED TO RUN CIRCLECI AND SONQUBE TESTS 
https://github.com/st10091422/APDS7311-PART2.git


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
Follow these steps below to get the app up and running or watch the video here:

https://drive.google.com/drive/folders/1jDQK7Gx0coSoVBcpDMRGbLRVPnSbSX6U?usp=sharing

#### Start the Frontend (React)
In the client directory, start the frontend:

```bash
cd src
npm start
```

The React app will now run at http://localhost:3000/.

#### Start the Backend (Node.js/Express)
In the server directory, start the backend:

```bash
cd ../server
node server.js
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


## Circle Ci test screenshots

![image](https://github.com/user-attachments/assets/bba9c488-7880-4a22-95e0-c13b45aa3736)

![image](https://github.com/user-attachments/assets/2501b697-848e-423c-bf24-6d35604bf242)

![image](https://github.com/user-attachments/assets/b4d38678-b52b-41df-b8ea-3e08442d759b)

![image](https://github.com/user-attachments/assets/c262b453-9306-4456-b664-fc8b7cfb8963)



## Sonarqube (sonarcloud) test screenshots

![image](https://github.com/user-attachments/assets/ef2165a0-76e5-478b-b3bb-ec2317c839c9)

![image](https://github.com/user-attachments/assets/6dde9cbd-107e-4cc2-8a07-5d8214490788)

![image](https://github.com/user-attachments/assets/be7cf33d-015a-43d0-a0cd-e4a5814b4881)


