import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Tabla from './components/pages/Tabla';
import "./components/styles/login.css";
import "./components/styles/tabla.css";
import "./components/styles/alumno.css";

function App() {

  return (
    <div className="App"> 
    <Routes>
     <Route path="/tabla" element={ !sessionStorage.getItem('email') ? <Tabla/> : <Login />} />
     <Route exact path="/login" element={<Login/>} />
     <Route exact path="/" element={ !sessionStorage.getItem('email') ?  null: <Login />} /> 
     </Routes> 
       <Login />
    </div>
  );
}

export default App; 
