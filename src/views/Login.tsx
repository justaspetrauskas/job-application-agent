import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../components/input';
import Button from '../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../stores/userSlice';
import { RootState, AppDispatch } from '../stores';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userStatus = useSelector((state: RootState) => state.user.status);
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  const validateEmail = (value: string): boolean | string => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) || 'Invalid email address';
  };

  const validatePassword = (value: string): boolean | string => {
    return value.length >= 6 || 'Password must be at least 6 characters long';
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate('/dashboard'); // Navigate to the dashboard or another page upon successful login
    } catch (error) {
      // Handle login errors
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-md w-full max-w-sm ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email" // Ensure 'email' is a key in FormData
            type="email"
            label="Email"
            register={register}
            validation={{ required: 'Email is required', validate: validateEmail }}
            error={errors.email}
          />
          <Input
            id="password" // Ensure 'password' is a key in FormData
            type="password"
            label="Password"
            register={register}
            validation={{ required: 'Password is required', validate: validatePassword }}
            error={errors.password}
          />
          <Button type="submit" disabled={userStatus === 'loading'}>
            {userStatus === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">Don't have an account?</p>
          <Button onClick={() => navigate('/signup')} className="text-indigo-600 hover:underline">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
