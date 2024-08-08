import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;