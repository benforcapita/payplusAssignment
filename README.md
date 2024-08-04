
# PayPlus Customer Management System

This project is a Customer Management System designed for PayPlus as part of a developer test. The system allows users to log in, manage customers, and perform various actions such as creating new customers and viewing customer details.

## Project Overview

The Customer Management System is divided into two main steps:

1. **Mandatory Project Requirements**: These requirements are essential and must be implemented.
2. **Additional Requirements**: These are optional but can demonstrate additional skills.

## Mandatory Project Requirements

### User Login Screen

- **Login Functionality**: 
  - Create a login screen where users can enter their identification number (Israeli IDs only) and password.
  - Validate the identification and password for authentication.

### User Registration Screen

- **Registration Functionality**: 
  - Implement a screen for new user registration.
  - Collect the following details:
    - Identification Number
    - Full Name
    - Email
    - Password
    - Confirm Password

### Customers Management Screen

- **Customer List**: 
  - After logging in, users should be directed to a screen displaying a list of all their customers.
  - By clicking a customer row, the customer's details should be displayed on the left side of the screen.

- **Add Customer**:
  - Provide an "Add Customer" button on the left side.
  - Clicking the button should open a modal with a form to create a customer.
  - The form should collect:
    - Full Name
    - Phone Number
    - Email
    - Birthdate

- **User Information**:
  - Display the logged-in user's name at the top left side of the screen.
  - Provide a button for disconnecting from the system.

## Technical Specifications

- **Backend**: 
  - Use Node.js.
  - Optionally use the NestJS framework (not mandatory).

- **Frontend**: 
  - Use React.

## Additional Requirements (Optional)

- Implement additional features or enhancements to demonstrate skills beyond the mandatory requirements.
- Suggestions include:
  - Enhanced user interface with improved styling.
  - Additional validation and error handling.
  - Implementing unit and integration tests.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd payplus-customer-management
   ```

2. **Backend Setup**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```
3. **Frontend Setup**:

   - You after the first setus you can activate both front end and backend at the same time by : 
     ```bash
     npm start
     ```


## Usage

- Access the application in your browser at `http://localhost:<port>` (replace `<port>` with the actual port number if needed).
- Use the login screen to log in with valid credentials.
- Manage customers through the provided interface.

## Conclusion

This README file outlines the requirements and setup instructions for the PayPlus Customer Management System. Follow the instructions to implement the mandatory requirements and consider adding optional features to showcase additional skills.
