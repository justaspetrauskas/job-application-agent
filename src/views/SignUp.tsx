import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../components/input';
import Button from '../components/button';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define validation rules
const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) || 'Invalid email address';
};

const validatePassword = (password: string) => {
  return (password.length >= 6) || 'Password must be at least 6 characters long';
};

const validateConfirmPassword = (confirmPassword: string, password: string) => {
  return (confirmPassword === password) || 'Passwords must match';
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit: SubmitHandler<FormData> = data => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="name"
            label="Name"
            register={register}
            validation={{ required: 'Name is required' }}
            error={errors.name}
          />
          <Input
            id="email"
            type="email"
            label="Email"
            register={register}
            validation={{ required: 'Email is required', validate: validateEmail }}
            error={errors.email}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            register={register}
            validation={{ required: 'Password is required', validate: validatePassword }}
            error={errors.password}
          />
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            register={register}
            validation={{ required: 'Please confirm your password', validate: value => validateConfirmPassword(value, password || '') }}
            error={errors.confirmPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Button onClick={() => navigate('/')} className="text-white-600 hover:underline">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
