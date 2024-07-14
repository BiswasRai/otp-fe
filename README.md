# Frontend OTP Verification Project

This project is a frontend application built with React and Vite. It includes an OTP (One-Time Password) component that verifies user input. If the OTP verification is successful, the user is redirected to the `/success` route. If the OTP value `123456` is entered, the server will intentionally fail the verification, which is by design for testing purposes.

1. Clone the repository:
   ```sh
   git clone https://github.com/BiswasRai/otp-fe
   Implementation Details
   OTP Verification
   The OTP verification component checks the length and format of the input. If the OTP matches the correct criteria and is not 123456, it proceeds with verification. If 123456 is entered, the server simulation fails the verification.
   ```

Redirect on Success
If the OTP is successfully verified, the user is redirected to the /success route where a success message is displayed.

Simulated Server Failure
For testing purposes, if the OTP 123456 is entered, the server will intentionally fail the verification. This is useful for testing error handling and user feedback.

Local Storage Utilities
The project includes utility functions for storing and retrieving values from localStorage, which can be used to manage user authentication states or other persistent data.

Running Locally
To run the project locally, follow the Installation steps above. Then, start the development server with:

sh
Copy code
npm run dev
The application will be accessible at http://localhost:5173.
