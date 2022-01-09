import React from "react";
import ubicacion from "../images/ubicacion.png";
import cloud from "../images/cloud.png";
import borrar from "../images/borrar.png";
import cruz from "../images/cruz.png";
import PropTypes from "prop-types";

const Alumno = (props) => {

  return (
  <div className="fondoAlumno">
    <div className="aframe2045">
      <div className="aframe2005">
        <div className="aframe1994">
          <div className="aframe123">
            <div className="acover"></div>
          </div>
          <div className="aframe1986">
            <p className="anombreAlumno">Nombre Almuno</p>
            <div className="aframe1927">
              <img src={ubicacion} alt="ubicacion" className="aicon" />
              <div className="aframe19272">
                <p className="avalencia">{props.ciudad}</p>
              </div>
              <div className="aframe1928">
                <p className="abarra">|</p>
              </div>
              <div className="aframe1926">
                <p className="aespaña">España</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aframe2041">
          <div className="aframe1433">
            <p className="anombreYApellidos">Nombre y Apellidos</p>
            <input className="aframe1328" defaultValue={props.nombre} />
          </div>
          <div className="aframe2038">
            <div className="aframe14332">
              <p className="atelefono">Nº Teléfono</p>
              <input
                type="text"
                className="aframe13282"
                defaultValue={props.telefono}
              />
            </div>
            <div className="aframe2023">
              <p className="aemail">Email</p>
              <input
                type="text"
                className="aframe13283"
                defaultValue={props.correo}
              />
            </div>
          </div>
          <div className="aframe2039">
            <div className="aframe2024">
              <p className="apais">Pais</p>
              <input
                name="pais"
                id="pais"
                className="aframe13284"
                defaultValue={props.pais}
              />
            </div>
            <div className="aframe2027">
              <p className="aciudad">Ciudad</p>
              <input
                name="ciudad"
                id="ciudad"
                className="aframe13285"
                defaultValue={props.ciudad}
              />
            </div>
          </div>
          <div className="aframe2040">
            <div className="aframe2028">
              <p className="atraslado">Traslado</p>
              <input
                name="traslado"
                id="traslado"
                className="aframe13286"
                defaultValue="Si"
              />
            </div>
            <div className="aframe2025">
              <p className="apresencialidad">Presencialidad</p>
              <input
                name="presencialidad"
                id="presencialidad"
                className="aframe13287"
                defaultValue="Presencial"
              />
            </div>
          </div>
          <div className="aframe2026">
            <p className="adocumentocv">Documento CV</p>
            <div className="aframe20272">
              <button className="asubir">
                <p className="apSubir">Subir de nuevo</p>
                <img src={cloud} alt="cloud" className="aimgSubir" />
              </button>
              <button className="aborrar">
                <p className="apBorrar">Borrar</p>
                <img src={borrar} alt="borrar" className="aimgBorrar" />
              </button>
            </div>
          </div>
          <div className="aframe1380">
            <div className="aframe14333">
              <p className="aetiquetas">Etiquetas</p>
              <select className="aframe13288">
                <option defaultValue="escribe">Escribe para buscar</option>
              </select>
            </div>
            <div className="aframe1430">
              <div className="aframe1401">
                <div className="atagHtml">
                  <p className="ahtml">HTML&CSS</p>
                  <img src={cruz} alt="cruz" className="aiconHtml" />
                </div>
                <div className="atagReact">
                  <p className="areact">REACT</p>
                  <img src={cruz} alt="cruz" className="aiconReact" />
                </div>
              </div>
              <div className="aframe1403">
                <div className="atagAngular">
                  <p className="aangular">ANGULAR</p>
                  <img src={cruz} alt="cruz" className="aiconAngular" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

Alumno.propTypes = {
  nombre: PropTypes.string,
  ciudad: PropTypes.string,
  pais: PropTypes.string,
  telefono: PropTypes.string,
  correo: PropTypes.string,
};

export default Alumno;
