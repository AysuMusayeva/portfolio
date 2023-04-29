import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/style.scss'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();