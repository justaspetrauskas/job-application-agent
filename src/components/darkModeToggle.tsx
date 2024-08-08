import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../stores';
import { toggleDarkMode } from '../stores/darkModeSlice';

const DarkModeToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button
      onClick={handleToggle}
      className={`py-2 px-4 border rounded-lg ${
        isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
