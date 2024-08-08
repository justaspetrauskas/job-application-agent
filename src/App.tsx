import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './views/Login';
import SignUp from './views/SignUp';
import DarkModeToggle from './components/darkModeToggle';

const App: React.FC = () => {
  return (
    <div>
      <DarkModeToggle />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Add other routes here */}
          </Routes>
        </Router>    
      </div>
  );
};

export default App;