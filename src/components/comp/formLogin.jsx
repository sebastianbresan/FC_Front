import { useState } from "react";
import Tabla from "../pages/Tabla";

const FormLogin = () => {
  let User = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(User);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [logged, setLogged] = useState(true);

  return (
    <>
    { logged ? 
    <>
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
          <button className="button" onClick={() => setLogged(false)}>
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
    </> : <Tabla/>}
    </>
  );
};

export default FormLogin;
