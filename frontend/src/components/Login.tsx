import React, { useState } from 'react';
import { LoginProps } from './interfaces';

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onNavigateToRegister }) => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identificationNumber, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        const parsedData = JSON.parse(data);
        const {id, identificationNumber, full_name} = parsedData.user;
        onLoginSuccess([{key:"id",value:id},{key:"identificationNumber",value:identificationNumber},{key:"full name",value:full_name}]); // Call the success handler with user's name
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">ID Card</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md shadow"
          >
            Login
          </button>
        </form>
        <button
          className="w-full mt-4 text-green-600 p-2"
          onClick={onNavigateToRegister}  // Use the callback to navigate
        >
          Create New User
        </button>
      </div>
    </div>
  );
};

export default Login;