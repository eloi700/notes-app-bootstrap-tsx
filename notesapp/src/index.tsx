import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
