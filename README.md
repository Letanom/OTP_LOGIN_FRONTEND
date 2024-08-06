OTP Login Frontend
This project is the frontend part of an OTP-based login system built with React. It allows users to register, receive an OTP via email, and log in using the OTP.

Features
User registration
OTP generation and email delivery
OTP-based login
Tech Stack
Frontend: React, React Router, Axios
UI Components: React Bootstrap, react-toastify
Prerequisites
Node.js
Installation
Clone the repository:

bash
git clone https://github.com/Letanom/OTP_LOGIN_FRONTEND.git
cd OTP_LOGIN_FRONTEND
Install dependencies:

bash

npm install
Running the Application
Start the development server:

bash

npm start
Open your browser and navigate to http://localhost:3000.

Project Structure
OTP_LOGIN_FRONTEND/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── OTPForm.js
│   │   ├── RegisterForm.js
│   ├── Pages/
│   │   ├── LoginPage.js
│   │   ├── OTPPage.js
│   │   ├── RegisterPage.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── services/
│   │   ├── ApiCaller.js
│   │   ├── Apis.js
│   │   ├── Help.js
├── package.json
└── README.md
Environment Variables
To run this project, you will need to add the following environment variables to your .env file:

env
REACT_APP_API_BASE_URL=http://localhost:5000/api
Dependencies
axios: For making HTTP requests
react-bootstrap: For UI components
react-router-dom: For routing
react-toastify: For notifications
