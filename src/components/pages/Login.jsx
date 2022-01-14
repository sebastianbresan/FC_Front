import React from "react";
import { useState } from "react";
import UsuarioService from "../../service/UsuarioService";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let User = {
    email: "",
    password: "",
  };

  let Usuario = {
    email: "",
  };

  const [user, setUser] = useState(User);

  const [usuario, setUsuario] = useState(Usuario);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  let navigate = useNavigate();

  const saveUsuario = () => {
    var data = { email: user.email, password: user.password };
    UsuarioService.login(data)
      .then((response) => {
        setUsuario({ email: response.data });
        localStorage.setItem("usuario", response.data);
        setLogged(true);
        navigate("../tabla")
      })
      .catch((e) => {
        alert("Credenciales Incorrectas");
      });
  };

  const [logged, setLogged] = useState(false);

  return !logged ? (
    <div className="login">
      <div className="text">
      <div className="frame1223">
        <p className="alumnos">
          OpenBootcamp
          <strong>
            <span className="textoAlumnos"> | Alumnos</span>
          </strong>
        </p>
        <div className="frame1254">
          <div className="frame943">
            <div className="frame1433">
              <p className="email">Email</p>
              <input
                className="frame1328"
                placeholder="Introduce tu correo"
                name="email"
                type="text"
                value={user.email}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="frame1439">
              <p className="contraseña">Contraseña</p>
              <input
                className="frame1328"
                placeholder="Introduce tu contraseña"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="frame1217">
            <div className="frame1414">
              <input
                type="checkbox"
                className="icon"
                value="recuerdame"
              ></input>
              <p className="recuerdame">Recuérdame</p>
            </div>
            <p className="title">He olvidado mi contraseña</p>
          </div>
          <button className="button" onClick={saveUsuario}>
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div className="frame1255">
        <p className="copyright">
          Copyright © 2021 Open Bootcamp SL, Imagina Group
        </p>
        <p className="derechos">Todos los derechos reservados</p>
        <p className="politica">Política de privacidad</p>
      </div>
      </div>
      <div className="java">
      </div>
    </div>) : ( null )
}

export default Login;
