import React from 'react';
import ReactDOM from 'react-dom/client';
import CompleteForm from './components/atoms/CompleteForm'; // Importa il componente del modulo

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CompleteForm />  {/* Qui renderizzi il modulo */}
  </React.StrictMode>
);
