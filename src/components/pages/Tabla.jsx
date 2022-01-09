import React, { useState, useEffect } from "react";
import FormAdd from "../comp/formAdd";
import Formfiltro from "../comp/formFiltro";
import Headertabla from "../comp/headerTabla";
import Alumno from "./Alumno";

const Tabla = () => {
  let id = 5;

  let estadoNombre = false;
  let estadoCiudad = false;
  let estadoPais = false;
  let estadoTelefono = false;
  let estadoCorreo = false;
  let estadoEtiquetas = false;
  const arEtiquetas = [
    "HTML&CSS",
    "JAVA",
    "PYTHON",
    "ANGULAR",
    "REACT",
    "BIG DATA",
    "TYPESCRYPT",
    "JAVASCRYPT",
    "GO",
  ];

  class Candidato {
    constructor(id, nombre, ciudad, pais, telefono, correo) {
      this.id = id;
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.pais = pais;
      this.telefono = telefono;
      this.correo = correo;
      this.etiquetas = [];
    }
  }

  function flocal() {
    let nombreInput = document.getElementById(`tnombre`).value;
    let ciudadInput = document.getElementById(`tciudad`).value;
    let paisInput = document.getElementById(`tpais`).value;
    let telefonoInput = document.getElementById(`ttelefono`).value;
    let correoInput = document.getElementById(`tcorreo`).value;
    let etiquetasInput = document.getElementById(`tetiquetas`).value;

    if (nombreInput === "") {
      alert("Debe rellenar el nombre correctamente");
    } else if (ciudadInput === "") {
      alert("Debe rellenar la ciudad correctamente");
    } else if (paisInput === "") {
      alert("Debe rellenar el pais correctamente");
    } else if (telefonoInput === "") {
      alert("Debe rellenar el telefono correctamente");
    } else if (correoInput === "") {
      alert("Debe rellenar el email correctamente");
    } else {
      const candidato = new Candidato(
        id,
        nombreInput,
        ciudadInput,
        paisInput,
        telefonoInput,
        correoInput,
        etiquetasInput
      );
      alumnos.push(candidato);
      document.getElementById(`ttabla2`).innerHTML +=
        `<tr class="ttr" id="` +
        candidato.id +
        `">
    <td class="ttdNombre">` +
        nombreInput +
        `</td>
      <td class="ttdCiudad">` +
        ciudadInput +
        `</td>
      <td class="ttdPais">` +
        paisInput +
        `</td>
      <td class="ttdTelefono">` +
        telefonoInput +
        `</td>
      <td class="ttdCorreo">` +
        correoInput +
        `</td>
      <td class="ttdEtiquetas">` +
        `<p class="tetiqueta">` +
        etiquetasInput +
        `</p>` +
        `</td>
  </tr>`;
      document.getElementById(`tformulario`).reset();
      mostrarOcultar();
      onclick();
    }
  }

  function añadirAlumnos() {
    const candidato1 = new Candidato(
      1,
      "Esteban Gimenez",
      "Barcelona",
      "España",
      "+34 345 345 345",
      "sbarcelona@gmail.com"
    );
    id++;

    candidato1.etiquetas.push(arEtiquetas[0], arEtiquetas[1], arEtiquetas[2]);
    alumnos.push(candidato1);
    const candidato2 = new Candidato(
      2,
      "Juan Martin Gimenez",
      "Madrid",
      "España",
      "+34 432 345 345",
      "smadrid@gmail.com"
    );
    id++;
    candidato2.etiquetas.push(arEtiquetas[3], arEtiquetas[4], arEtiquetas[5]);
    alumnos.push(candidato2);
    const candidato3 = new Candidato(
      3,
      "Jose Rodruigo Diaz",
      "Oviedo",
      "España",
      "+34 444 345 345",
      "soviedo@gmail.com"
    );
    id++;
    candidato3.etiquetas.push(arEtiquetas[2], arEtiquetas[4], arEtiquetas[6]);
    alumnos.push(candidato3);
    const candidato4 = new Candidato(
      4,
      "Pedro Gabriel Machado",
      "Rosario",
      "Argentina",
      "+34 665 345 345",
      "srosario@gmail.com"
    );
    id++;
    candidato4.etiquetas.push(arEtiquetas[6], arEtiquetas[7], arEtiquetas[8]);
    alumnos.push(candidato4);
    ordenar();
  }

  function vaciar() {
    document.getElementById("ttabla2").innerHTML = "";
  }

  function ordenar() {
    let tabla = document.getElementById(`ttabla2`);
    alumnos.map(
      (user) =>
        (tabla.innerHTML +=
          `<tr class="ttr" id="` +
          user.id +
          `">
        <td class="ttdNombre">` +
          user.nombre +
          `</td>
        <td class="ttdCiudad">` +
          user.ciudad +
          `</td>
        <td class="ttdPais">` +
          user.pais +
          `</td>
        <td class="ttdTelefono">` +
          user.telefono +
          `</td>
        <td class="ttdCorreo">` +
          user.correo +
          `</td>
        <td class="ttdEtiquetas">` +
          `<p class="tetiqueta">` +
          user.etiquetas[0] +
          `</p>` +
          `<p class="tetiqueta">` +
          user.etiquetas[1] +
          `</p>` +
          `<p class="tetiqueta">` +
          user.etiquetas[2] +
          `</p>` +
          `</td>
    </tr>`)
    );
  }

  function ordenarNombre() {
    vaciar();
    if (!estadoNombre) {
      alumnos.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        else return 1;
      });
      estadoNombre = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.nombre < b.nombre) return 1;
        else return -1;
      });
      estadoNombre = false;
    }
    ordenar();
  }

  function ordenarCiudad() {
    vaciar();
    if (!estadoCiudad) {
      alumnos.sort((a, b) => {
        if (a.ciudad < b.ciudad) return -1;
        else return 1;
      });
      estadoCiudad = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.ciudad < b.ciudad) return 1;
        else return -1;
      });
      estadoCiudad = false;
    }
    ordenar();
  }

  function ordenarPais() {
    vaciar();
    if (!estadoPais) {
      alumnos.sort((a, b) => {
        if (a.pais < b.pais) return -1;
        else return 1;
      });
      estadoPais = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.pais < b.pais) return 1;
        else return -1;
      });
      estadoPais = false;
    }
    ordenar();
  }
  function ordenarTelefono() {
    vaciar();
    if (!estadoTelefono) {
      alumnos.sort((a, b) => {
        if (a.telefono < b.telefono) return -1;
        else return 1;
      });
      estadoTelefono = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.telefono < b.telefono) return 1;
        else return -1;
      });
      estadoTelefono = false;
    }
    ordenar();
  }

  function ordenarCorreo() {
    vaciar();
    if (!estadoCorreo) {
      alumnos.sort((a, b) => {
        if (a.correo < b.correo) return -1;
        else return 1;
      });
      estadoCorreo = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.correo < b.correo) return 1;
        else return -1;
      });
      estadoCorreo = false;
    }
    ordenar();
  }

  function ordenarEtiquetas() {
    vaciar();
    if (!estadoEtiquetas) {
      alumnos.sort((a, b) => {
        if (a.etiquetas < b.etiquetas) return -1;
        else return 1;
      });
      estadoEtiquetas = true;
    } else {
      alumnos.sort((a, b) => {
        if (a.etiquetas < b.etiquetas) return 1;
        else return -1;
      });
      estadoEtiquetas = false;
    }
    ordenar();
  }

  function buscar() {
    var tabla = document.getElementById("ttabla2");
    var busqueda = document.getElementById("tbusqueda").value.toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";
    for (var i = 0; i < tabla.rows.length; i++) {
      cellsOfRow = tabla.rows[i].getElementsByTagName("td");
      found = false;
      for (var j = 0; j < cellsOfRow.length && !found; j++) {
        compareWith = cellsOfRow[j].innerHTML.toLowerCase();
        if (busqueda.length === 0 || compareWith.indexOf(busqueda) > -1) {
          found = true;
        }
      }
      if (found) {
        tabla.rows[i].style.display = "";
      } else {
        tabla.rows[i].style.display = "none";
      }
    }
  }

  const [add, setAdd] = useState(false);
  function mostrarOcultar() {
    setAdd(!add);
  }

  const [alumnos, setAlumnos] = useState([]);

  const [person, setPerson] = useState({
    nombre: "",
    ciudad: "",
    pais: "",
    telefono: "",
    correo: "",
  });

  function onclick() {
    var tabla = document.getElementById("ttabla2");
    for (let i = 0; i < tabla.rows.length; i++) {
      let doc = document.getElementById(i + 1);
      doc.onclick = function () {
        setPerson(alumnos[i]);
        setDetalle(true);
      };
    }
  }

  const [detalle, setDetalle] = useState(false);

  useEffect(() => {
    function cargaInicial() {
      añadirAlumnos();
      onclick();
    }
    cargaInicial();
  }, [setAlumnos]);

  return detalle ? (
    <Alumno
      nombre={person.nombre}
      ciudad={person.ciudad}
      pais={person.pais}
      telefono={person.telefono}
      correo={person.correo}
    />
  ) : (
    <div>
      <header>
        <Headertabla />
      </header>
      <div className="tframe1998">
        <div className="tframe2000">
          <div className="tframe1673">
            <div className="tframe1964">
              <div className="tframe2002">
                <p className="talumnos">Alumnos</p>
                <input
                  type="text"
                  className="tinput"
                  id="tbusqueda"
                  placeholder="Buscar por Nombre, Email, o Palabra Clave"
                  onKeyUp={() => buscar()}
                />
              </div>
              <button className="tbutton" onClick={() => setAdd(!add)}>
                + Añadir alumno
              </button>
            </div>
            <div className="tframe1076" id="divFormulario">
              {add ? <FormAdd /> : <></>}
              {add ? (
                <button name="enviar" id="btn" onClick={() => flocal()}>
                  {" "}
                  Agregar{" "}
                </button>
              ) : (
                <></>
              )}
              <table className="tframe1723" id="ttabla">
                <tbody>
                  <tr className="tframe758">
                    <td className="tthNombre" onClick={() => ordenarNombre()}>
                      NOMBRE ↑↓
                    </td>
                    <td className="tthCiudad" onClick={() => ordenarCiudad()}>
                      CIUDAD ↑↓
                    </td>
                    <td className="tthPais" onClick={() => ordenarPais()}>
                      PAIS ↑↓
                    </td>
                    <td
                      className="tthTelefono"
                      onClick={() => ordenarTelefono()}
                    >
                      TELEFONO
                    </td>
                    <td className="tthCorreo" onClick={() => ordenarCorreo()}>
                      CORREO ELECTRONICO ↑↓
                    </td>
                    <td
                      className="tthEtiquetas"
                      onClick={() => ordenarEtiquetas()}
                    >
                      ETIQUETAS ↑↓
                    </td>
                  </tr>
                </tbody>
              </table>
              <table id="ttabla2"></table>
            </div>
          </div>
          <Formfiltro />
        </div>
      </div>
    </div>
  );
};

export default Tabla;
