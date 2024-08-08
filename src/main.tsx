import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for createRoot
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './stores';

const domNode = document.getElementById('root');
if (domNode) {
  const root = ReactDOM.createRoot(domNode); // Create the root using ReactDOM.createRoot
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}