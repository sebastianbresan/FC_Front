import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/pages/Login';
import Tabla from './components/pages/Tabla';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
 
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
     <Route path="/tabla" element={<Tabla/>} />
     <Route path="/login" element={<Login/>} />
     </Routes>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
