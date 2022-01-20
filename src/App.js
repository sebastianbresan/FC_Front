import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Tabla from './components/pages/Tabla';
import "./components/styles/login.css";
import "./components/styles/tabla.css";
import "./components/styles/alumno.css";

function App() {

  return (
    <div className="App"> 
    <Routes>
     <Route path="/tabla" element={<Tabla/>}/>
     <Route path="/login" element= {<Navigate to="/"/>}/>
     <Route path="/" element={ <Login/>} /> 
     </Routes> 
    </div>
  );
}

export default App; 
