import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KeyBoardOneProvider } from './context/keyboard-1-context/keyboard1-context.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <KeyBoardOneProvider>
        <App />
      </KeyBoardOneProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
