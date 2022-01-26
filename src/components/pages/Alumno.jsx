import React, { useState } from "react";
import ubicacion from "../images/ubicacion.png";
import cloud from "../images/cloud.png";
import borrar from "../images/borrar.png";
import check from "../images/check.png";
import PropTypes from "prop-types";
import Tabla from "./Tabla";
import swal from "sweetalert";
import AlumnoService from "../../service/AlumnoService";
import Iframe from 'react-iframe'
import { subirArchivo } from "../../pdf";

const Alumno = (props) => {
  const [back, setBack] = useState(false);

  const deleteAlumno = () => {
    swal({
      title: "¿Está seguro de eliminar el usuario?",
      text: "Se eliminará el usuario " + props.email,
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        AlumnoService.delete(props.id);
        swal("El usuario " + props.email + " ha sido eliminado exitosamente", {
          icon: "success",
          timer: 2000,
        });
      } else {
        swal("No se han realizado cambios", {
          icon: "success",
          timer: 2000,
        });
      }
    });
  };
  const asignarAlumno = () => {
    swal({
      title: "¿Está seguro de asignar el alumno?",
      text:
        "Se asignará al usuario " +
        sessionStorage.getItem("email") +
        " el alumno " +
        props.email,
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((add) => {
      if (add) {
        AlumnoService.updateByEmail(sessionStorage.getItem("email"), props.id)
          .then((respuesta) => {
            swal(
              "El alumno " + props.email + " ha sido asignado exitosamente",
              {
                icon: "success",
                timer: 2000,
              }
            );
          })
          .catch((e) => {
            swal({
              title: "Error en la peticion",
              text: "No se han realizado cambios",
              icon: "error",
              timer: 2000,
            });
          });
      } else {
        swal("No se han realizado cambios", {
          icon: "success",
          timer: 2000,
        });
      }
    });
  };
  const salvarAlumno = () => {
    swal({
      title: "¿Está seguro de guardar los cambios?",
      text:
        "Confirme la informacion antes de aceptar \n"+
        "Nombre= " + alumno.nombre + "\n"+ 
        "Ciudad= " + alumno.ciudad + "\n"+ 
        "Pais= " + alumno.pais + "\n"+ 
        "Telefono= " + alumno.telefono + "\n"+ 
        "Email= " + alumno.email + "\n"+ 
        "Presencialidad= " + alumno.presencialidad + "\n"+ 
        "Traslado= " + alumno.traslado,
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((add) => {
      if (add) {
        AlumnoService.update(alumno)
          .then((respuesta) => {
            swal(
              "El alumno " + props.email + " ha sido modificado exitosamente",
              {
                icon: "success",
                timer: 2000,
              }
            );
          })
          .catch((e) => {
            swal({
              title: "Error en la peticion",
              text: "No se han realizado cambios en el alumno",
              icon: "error",
              timer: 2000,
            });
          });
      } else {
        swal("No se han realizado cambios", {
          icon: "success",
          timer: 2000,
        });
      }
    });
  };

  const [alumno, setAlumno] = useState(props);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlumno({ ...alumno, [name]: value });
  };

  return !back ? (
    <div className="fondoAlumno">
      <div className="aframe2045">
        <div className="aframe2005">
          <div className="aframe1994">
            <div className="aframe123">
              <div className="acover"></div>
            </div>
            <div className="aframe1986">
              <button className="tbuttonvolver" onClick={() => setBack(true)}>
                Volver
              </button>
              <p className="anombreAlumno">{alumno.nombre}</p>
              <div className="aframe1927">
                <img src={ubicacion} alt="ubicacion" className="aicon" />
                <div className="aframe19272">
                  <p className="avalencia">{alumno.ciudad}</p>
                </div>
                <div className="aframe1928">
                  <p className="abarra">|</p>
                </div>
                <div className="aframe1926">
                  <p className="aespaña">{alumno.pais}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aframe2041">
            <div className="aframe1433">
              <p className="anombreYApellidos">Nombre y Apellidos</p>
              <input
                className="aframe1328"
                defaultValue={alumno.nombre}
                disabled
              />
            </div>
            <div className="aframe2038">
              <div className="aframe14332">
                <p className="atelefono">Nº Teléfono</p>
                <input
                  type="text"
                  className="aframe13282"
                  defaultValue={alumno.telefono}
                  disabled
                />
              </div>
              <div className="aframe2023">
                <p className="aemail">Email</p>
                <input
                  type="text"
                  className="aframe13283"
                  defaultValue={alumno.email}
                  disabled
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
                  defaultValue={alumno.pais}
                  onChange={handleInputChange}
                />
              </div>
              <div className="aframe2027">
                <p className="aciudad">Ciudad</p>
                <input
                  name="ciudad"
                  id="ciudad"
                  className="aframe13285"
                  defaultValue={alumno.ciudad}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="aframe2040">
              <div className="aframe2028">
                <p className="atraslado">Traslado</p>
                <select
                  name="traslado"
                  id="traslado"
                  className="aframe13286"
                  onChange={handleInputChange}
                  defaultValue={alumno.traslado}
                >
                  <option value="true">SI</option>
                  <option value="false">NO</option>
                </select>
              </div>
              <div className="aframe2025">
                <p className="apresencialidad">Presencialidad</p>
                <select
                  name="presencialidad"
                  id="presencialidad"
                  className="aframe13287"
                  defaultValue={alumno.presencialidad}
                  onChange={handleInputChange}
                >
                  <option value="PRESENCIAL">PRESENCIAL</option>
                  <option value="REMOTO">REMOTO</option>
                  <option value="MIXTO">MIXTO</option>
                </select>
              </div>
            </div>
            <div className="aframe2026">
              <p className="adocumentocv">Documento CV</p>
              <div className="aframe20272">
                <button className="asubir" onClick={subirArchivo}>
                  <p className="apSubir">Subir de nuevo</p>
                  <img src={cloud} alt="cloud" className="aimgSubir" />
                </button>
              </div>
            </div>
            <div className="aframe1380">
              <div className="aframe14333">
                <p className="aetiquetas">Etiquetas</p>
              </div>
              <div className="aframe1430">
                <div className="aframe1401">
                  {props.etiquetas.map((user) => (
                    <div key={user.lenguaje} className="atagHtml">
                      <p className="aangular">{user.lenguaje}</p>
                    </div>
                  ))}
                </div>
                <div className="acciones">
                <button className="aborrar" onClick={deleteAlumno}>
                  <p className="apBorrar">Borrar</p>
                  <img src={borrar} alt="borrar" className="aimgBorrar" />
                </button>
                <button className="aborrar" onClick={asignarAlumno}>
                  <p className="apBorrar">Asignar</p>
                  <img src={check} alt="check" className="aimgBorrar" />
                </button>
                <button className="aborrar" onClick={salvarAlumno}>
                  <p className="apBorrar">Guardar</p>
                  <img src={check} alt="modificar" className="aimgBorrar" />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="file" id="imgPreview" hidden accept="application/pdf"/>
        <div className="visor">
        <Iframe src="http://docs.google.com/gview?url=https://www.cbs.dk/files/cbs.dk/cv_template_sheet_en.pdf&embedded=true" 
        width="900px"
        height="750px"
        display="block"
        position="absolute"
        className="visor"   
        frameBorder="0"
        id="iframe"
        styles={{margin_left: "300px"}}
        />
    </div>
      </div>
    </div>
  ) : (
    <Tabla />
  );
};

Alumno.propTypes = {
  id: PropTypes.number,
  nombre: PropTypes.string,
  ciudad: PropTypes.string,
  pais: PropTypes.string,
  telefono: PropTypes.string,
  email: PropTypes.string,
  presencialidad: PropTypes.string,
  traslado: PropTypes.bool,
  etiquetas: PropTypes.array,
  usuario: PropTypes.object
};

export default Alumno;
