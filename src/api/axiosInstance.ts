import axios from 'axios';

// Configure your API base URL and other settings here
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;