import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [userData, setUserData] = useState<{key:string,value:string|number}[]>([]);

  // Handle user login success
  const handleLoginSuccess = (data: {key:string,value:string|number}[]) => {
    setUserData(data);
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!isAuthenticated ? (
        <div>
          {showLogin ? (
            <Login
              onLoginSuccess={handleLoginSuccess}
              onNavigateToRegister={() => setShowLogin(false)}
            />
          ) : (
            <Register
              onRegisterSuccess={() => setShowLogin(true)}
              onNavigateToLogin={() => setShowLogin(true)}
            />
          )}
        </div>
      ) : (
        <Dashboard userData={userData} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;