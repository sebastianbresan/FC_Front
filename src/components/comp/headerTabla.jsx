import React from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Headertabla = () => {

  let navigate = useNavigate();

  const logout = () => {
    swal({
      title: "¿Está seguro que desea salir?",
      text: "Se cerrará sesion de usuario "+ sessionStorage.getItem('email') ,
      icon: "info",
      buttons: ["No", "Si"],
      dangerMode: true,
    })
    .then((salir) => {
      if (salir) {
        swal("Sesion cerrada exitosamente", {
          icon: "success", timer:2000
        })
        sessionStorage.clear();
        navigate("../login");
      } else {
        swal("Regresando ....", {
          icon: "info", timer:1500
        })
      }
    });
  }
  
    return (
      <div>
        <div className="tframe22">
        <div className="tframe1217">
          <div className="tframe1182">
            <h2>
              OpenBootcamp
              <strong>
                <span
                  className="ttextoAlumnos"
                >
                  {" "}
                  | Alumnos
                </span>
              </strong>
            </h2>
          </div>
        </div>
        <div className="tframe1216">
          <div className="tframe1893">
          <button className="tbutton" id='logout' onClick={logout}>
                Logout
              </button>
            <div className="tframe1200">
              <div className="tframe1283">
        
                <p className="tna">NA</p>
              </div>
              <p className="tusername">Admin</p>
             
            </div>
            <select name="" id="" className="ticon"></select>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Headertabla;
