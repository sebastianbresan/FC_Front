import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
sessionStorage.clear();
ReactDOM.render(
  
  <React.StrictMode>
   <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
