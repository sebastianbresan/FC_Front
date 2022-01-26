import React, { useState, useEffect } from "react";
import Reload from "../images/reload.png";
import FormAdd from "../comp/formAdd";
import borrar from "../images/borrar.png";
import Headertabla from "../comp/headerTabla";
import Alumno from "./Alumno";
import UsuarioService from "../../service/UsuarioService.js";
import Delete from "../images/delete.png";
import swal from "sweetalert";
import AlumnoService from "../../service/AlumnoService";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Tabla = () => {
  let estadoNombre = false;
  let estadoCiudad = false;
  let estadoPais = false;
  let estadoTelefono = false;
  let estadoEmail = false;
  let estadoEtiquetas = false;
  let estadoTrasladoSi = false;
  let estadoTrasladoNo = false;
  let estadoPresencialidadSi = false;
  let estadoPresencialidadNo = false;

  const [add, setAdd] = useState(false);
  const [detalle, setDetalle] = useState(false);
  const [alumnosAPI, setAlumnosAPI] = useState([]);
  const [usuarioAPI, setUsuarioAPI] = useState([]);
  const [alumnosFiltro, setAlumnosFiltro] = useState([]);
  const [eSelect, setESelect] = useState([]);
  const [pSelect, setPSelect] = useState([]);
  const [cSelect, setCSelect] = useState([]);
  const [person, setPerson] = useState([]);

  const etiquetas = new Set();
  const ciudades = new Set();
  const paises = new Set();

  const userLogged = sessionStorage.getItem("email");
  const animatedComponents = makeAnimated();
  const navigate = useNavigate();

  function vaciar() {
    document.getElementById("ttabla2").innerHTML = "";
  }
  function ordenarApi() {
    UsuarioService.findByEmail(userLogged).then((respuesta) => {
      setUsuarioAPI({id: null, email: respuesta.data.email});
      setAlumnosAPI(respuesta.data.alumnos);
      vaciar();
      let tabla = document.getElementById(`ttabla2`);
      if (respuesta.data.alumnos < 1) {
        swal(
          "El usuario " +
            sessionStorage.getItem("email") +
            " no tiene alumnos asociados",
          {
            icon: "info",
            timer: 2000,
          }
        );
      } else if (sessionStorage.getItem("email").length > 1) {
        swal(
          "Alumnos del usuario " +
            sessionStorage.getItem("email") +
            " actualizados",
          {
            icon: "success",
            timer: 1500,
          }
        );
        respuesta.data.alumnos.map(
          (user, i) =>
            (tabla.innerHTML +=
              `<tr class="ttr" id="` +
              i +
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
              user.email +
              `</td>
        <td class="ttdEtiquetas" id=` +
              (user.id + 100) +
              `></td></tr>`)
        );
        cSelect.length = 0;
        pSelect.length = 0;
        eSelect.length = 0;
        for (let i = 0; i < respuesta.data.alumnos.length; i++) {
          ciudades.add(respuesta.data.alumnos[i].ciudad);
          paises.add(respuesta.data.alumnos[i].pais);

          for (let j = 0; j < respuesta.data.alumnos[i].etiquetas.length; j++) {
            etiquetas.add(respuesta.data.alumnos[i].etiquetas[j].lenguaje);
            document.getElementById(
              respuesta.data.alumnos[i].id + 100
            ).innerHTML +=
              `<p class="tetiqueta">` +
              respuesta.data.alumnos[i].etiquetas[j].lenguaje +
              `</p>`;
          }
        }
      }

      for (let i = 0; i < tabla.rows.length; i++) {
        const doc = document.getElementById(i);
        doc.onclick = function () {
          setPerson(respuesta.data.alumnos[i]);
          setDetalle(true);
        };
      }
      addSelects();
    });
  }
  function ordenar() {
    vaciar();
    let tabla = document.getElementById(`ttabla2`);
    alumnosAPI.map(
      (user, i) =>
        (tabla.innerHTML +=
          `<tr class="ttr" id="` +
          i +
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
          user.email +
          `</td>
          <td class="ttdEtiquetas" id=` +
          (user.id + 100) +
          `></td></tr>`)
    );
    for (let i = 0; i < alumnosAPI.length; i++) {
      for (let j = 0; j < alumnosAPI[i].etiquetas.length; j++) {
        document.getElementById(alumnosAPI[i].id + 100).innerHTML +=
          `<p class="tetiqueta">` +
          alumnosAPI[i].etiquetas[j].lenguaje +
          `</p>`;
      }
    }
    onclick();
  }
  function ordenarNombre() {
    vaciar();
    if (!estadoNombre) {
      alumnosAPI.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        else return 1;
      });
      estadoNombre = true;
    } else {
      alumnosAPI.sort((a, b) => {
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
      alumnosAPI.sort((a, b) => {
        if (a.ciudad < b.ciudad) return -1;
        else return 1;
      });
      estadoCiudad = true;
    } else {
      alumnosAPI.sort((a, b) => {
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
      alumnosAPI.sort((a, b) => {
        if (a.pais < b.pais) return -1;
        else return 1;
      });
      estadoPais = true;
    } else {
      alumnosAPI.sort((a, b) => {
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
      alumnosAPI.sort((a, b) => {
        if (a.telefono < b.telefono) return -1;
        else return 1;
      });
      estadoTelefono = true;
    } else {
      alumnosAPI.sort((a, b) => {
        if (a.telefono < b.telefono) return 1;
        else return -1;
      });
      estadoTelefono = false;
    }
    ordenar();
  }
  function ordenarEmail() {
    vaciar();
    if (!estadoEmail) {
      alumnosAPI.sort((a, b) => {
        if (a.email < b.email) return -1;
        else return 1;
      });
      estadoEmail = true;
    } else {
      alumnosAPI.sort((a, b) => {
        if (a.email < b.email) return 1;
        else return -1;
      });
      estadoEmail = false;
    }
    ordenar();
  }
  function ordenarEtiquetas() {
    vaciar();
    if (!estadoEtiquetas) {
      alumnosAPI.sort((a, b) => {
        if (a.etiquetas < b.etiquetas) return -1;
        else return 1;
      });
      estadoEtiquetas = true;
    } else {
      alumnosAPI.sort((a, b) => {
        if (a.etiquetas < b.etiquetas) return 1;
        else return -1;
      });
      estadoEtiquetas = false;
    }
    ordenar();
  }
  function buscar() {
    let tabla = document.getElementById("ttabla2");
    let busqueda = document.getElementById("tbusqueda").value.toLowerCase();
    let cellsOfRow = "";
    let found = false;
    let compareWith = "";
    for (let i = 0; i < tabla.rows.length; i++) {
      cellsOfRow = tabla.rows[i].getElementsByTagName("td");
      found = false;
      for (let j = 0; j < cellsOfRow.length && !found; j++) {
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
  function mostrarOcultar() {
    if (!add) {
      setAdd(!add);
      document.getElementById("mostrarocultar").innerHTML =
        "Ocultar Formulario";
    } else {
      document.getElementById("mostrarocultar").innerHTML = "Añadir alunmo";
      setAdd(!add);
      ordenarApi();
    }
  }
  function onclick() {
    const tabla = document.getElementById("ttabla2");
    for (let i = 0; i < tabla.rows.length; i++) {
      const doc = document.getElementById(i);
      doc.onclick = function () {
        setPerson(alumnosAPI[i]);
        setDetalle(true);
      };
    }
  }
  function deleteAll() {
    if (alumnosAPI < 1) {
      swal(
        "El usuario " +
          sessionStorage.getItem("email") +
          " no tiene alumnos asociados",
        {
          icon: "info",
          timer: 2000,
        }
      );
    } else {
      swal({
        title: "¿Está seguro de eliminar todos los alumnos?",
        text:
          "Al hacer hacer click en 'Si' se eliminaran todos los alumnos del usuario " +
          sessionStorage.getItem("email") +
          " definitivamente y no podrán ser recuperados",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          AlumnoService.deleteallbyuser(sessionStorage.getItem("email"));
          swal(
            "Los alumnos del usuario " +
              sessionStorage.getItem("email") +
              " han sido eliminados correctamente",
            {
              icon: "success",
              timer: 2000,
            }
          );
          vaciar();
        } else {
          swal("No se han realizado cambios", {
            icon: "error",
            timer: 2000,
          });
        }
      });
    }
  }
  function findAllWithoutUser() {
    AlumnoService.findAllWithoutUser().then((respuesta) => {
      if (respuesta.data < 1) {
        swal("No hay ningun alumno sin usuario asignado", {
          icon: "info",
          timer: 2000,
        });
      } else {
        setAlumnosAPI(respuesta.data);
        vaciar();
        let tabla = document.getElementById(`ttabla2`);
        respuesta.data.map(
          (user, i) =>
            (tabla.innerHTML +=
              `<tr class="ttr" id="` +
              i +
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
              user.email +
              `</td>
          <td class="ttdEtiquetas" id=` +
              (user.id + 100) +
              `></td></tr>`)
        );
        for (let i = 0; i < respuesta.data.length; i++) {
          for (let j = 0; j < respuesta.data[i].etiquetas.length; j++) {
            document.getElementById(respuesta.data[i].id + 100).innerHTML +=
              `<p class="tetiqueta">` +
              respuesta.data[i].etiquetas[j].lenguaje +
              `</p>`;
          }
        }

        for (let i = 0; i < tabla.rows.length; i++) {
          const doc = document.getElementById(i);
          doc.onclick = function () {
            setPerson(respuesta.data[i]);
            setDetalle(true);
          };
        }
      }
    });
  }
  function trasladoSi() {
    alumnosFiltro.length = 0;
    if (!estadoTrasladoSi) {
      alumnosAPI.forEach((user) => {
        if (user.traslado) {
          alumnosFiltro.push(user);
        }
      });
      vaciar();
      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.forEach(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
      estadoTrasladoSi = true;
    } else {
      ordenar();
      estadoTrasladoSi = false;
    }
    return;
  }
  function trasladoNo() {
    alumnosFiltro.length = 0;
    if (!estadoTrasladoNo) {
      alumnosAPI.forEach((user) => {
        if (!user.traslado) {
          alumnosFiltro.push(user);
        }
      });
      vaciar();
      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.forEach(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
      estadoTrasladoNo = true;
    } else {
      ordenar();
      estadoTrasladoNo = false;
    }
  }
  function presencialidadSi() {
    alumnosFiltro.length = 0;
    if (!estadoPresencialidadSi) {
      alumnosAPI.forEach((user) => {
        if (
          user.presencialidad === "PRESENCIAL" ||
          user.presencialidad === "MIXTO"
        ) {
          alumnosFiltro.push(user);
        }
      });
      vaciar();
      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.forEach(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
      estadoPresencialidadSi = true;
    } else {
      ordenar();
      estadoPresencialidadSi = false;
    }
  }
  function presencialidadNo() {
    alumnosFiltro.length = 0;
    if (!estadoPresencialidadNo) {
      alumnosAPI.forEach((user) => {
        if (
          user.presencialidad === "REMOTO" ||
          user.presencialidad === "MIXTO"
        ) {
          alumnosFiltro.push(user);
        }
      });
      vaciar();
      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.forEach(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
      estadoPresencialidadNo = true;
    } else {
      ordenar();
      estadoPresencialidadNo = false;
    }
  }
  function addSelects() {
    etiquetas.forEach((etiqueta) =>
      eSelect.push({ value: etiqueta, label: etiqueta })
    );
    ciudades.forEach((ciudades) =>
      cSelect.push({ value: ciudades, label: ciudades })
    );
    paises.forEach((paises) => pSelect.push({ value: paises, label: paises }));
  }
  function resetAlumnosFiltro() {
    alumnosFiltro.length = 0;
    ordenar();
  }
  const filtroCiudades = (value) => {
    if (value.length !== 0) {
      alumnosFiltro.length = 0;
      vaciar();
      value.forEach((value) => {
        alumnosAPI.forEach((user) => {
          if (user.ciudad === value.label) {
            alumnosFiltro.push(user);
          }
        });
      });

      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.map(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
    } else {
      ordenar();
    }
  };
  const filtroPaises = (value) => {
    if (value.length !== 0) {
      alumnosFiltro.length = 0;
      vaciar();
      value.forEach((value) => {
        alumnosAPI.forEach((user) => {
          if (user.pais === value.label) {
            alumnosFiltro.push(user);
          }
        });
      });

      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.map(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
    } else {
      ordenar();
    }
  };
  const filtroEtiquetas = (value) => {
    if (value.length !== 0) {
      alumnosFiltro.length = 0;
      vaciar();
      alumnosAPI.forEach((user) => {
        user.etiquetas.forEach((etiqueta) => {
          if (etiqueta.lenguaje === value.label) {
            alumnosFiltro.push(user);
          }
        });
      });
      let tabla = document.getElementById(`ttabla2`);
      alumnosFiltro.map(
        (user, i) =>
          (tabla.innerHTML +=
            `<tr class="ttr" id="` +
            i +
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
            user.email +
            `</td>
          <td class="ttdEtiquetas" id=` +
            (user.id + 100) +
            `></td></tr>`)
      );
      for (let i = 0; i < alumnosFiltro.length; i++) {
        for (let j = 0; j < alumnosFiltro[i].etiquetas.length; j++) {
          document.getElementById(alumnosFiltro[i].id + 100).innerHTML +=
            `<p class="tetiqueta">` +
            alumnosFiltro[i].etiquetas[j].lenguaje +
            `</p>`;
        }
      }
      onclick();
    } else {
      ordenar();
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token") < 1) {
      swal("Debe loguerase para acceder a esta pagina", {
        icon: "error",
        timer: 2000,
      });
      navigate("/");
    }
    ordenarApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return detalle ? (
    <Alumno
      id={person.id}
      nombre={person.nombre}
      ciudad={person.ciudad}
      pais={person.pais}
      telefono={person.telefono}
      email={person.email}
      presencialidad={person.presencialidad}
      traslado={person.traslado}
      etiquetas={person.etiquetas}
      usuario={usuarioAPI}
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
              <button className="tbutton" onClick={() => deleteAll()}>
                Eliminar alumnos
                <img src={Delete} alt="eliminar" className="aicon" />
              </button>
              <button className="tbutton" onClick={() => findAllWithoutUser()}>
                Ver alumnos sin Usuario
                <img src={Reload} alt="actualizar" className="aicon" />
              </button>
              <button className="tbutton" onClick={() => ordenarApi()}>
                Ver alumnos de {sessionStorage.getItem("email")}
                <img src={Reload} alt="actualizar" className="aicon" />
              </button>
              <button
                className="tbutton"
                id="mostrarocultar"
                onClick={() => mostrarOcultar()}
              >
                + Añadir alumno
              </button>
            </div>
            <div className="tframe1076" id="divFormulario">
              {add ? <FormAdd /> : <></>}
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
                    <td className="tthCorreo" onClick={() => ordenarEmail()}>
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
          <div className="tframe1422">
            <div className="tframe2001">
              <p className="tfiltros">Filtros de búsqueda</p>
              <img
                src={borrar}
                alt="trash"
                className="tborrar"
                onClick={() => resetAlumnosFiltro()}
              />
            </div>
            <div className="tframe1999">
              <div className="tframe1380">
                <p className="tetiquetas">Etiquetas</p>
                <Select
                  options={eSelect}
                  className="selectEtiquetas"
                  placeholder="Escoja etiquetas"
                  onChange={filtroEtiquetas}
                />
              </div>
              <div className="tframe14332">
                <p className="tpais">País</p>
                <Select
                  options={pSelect}
                  className="selectPaises"
                  isMulti
                  placeholder="Escoja país"
                  onChange={filtroPaises}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                />
              </div>
              <div className="tframe1434">
                <p className="tciudad">Ciudad</p>
                <Select
                  options={cSelect}
                  className="selectCiudades"
                  isMulti
                  placeholder="Escoja ciudad"
                  onChange={filtroCiudades}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                />
              </div>
              <div className="tframe14222">
                <p className="tpresencialDistancia">Presencial / a distancia</p>
                <div className="tframe1421">
                  <div className="tframe1414">
                    <input
                      type="checkbox"
                      className="tcheckPresencial"
                      onChange={() => presencialidadSi()}
                    />
                    <p className="tpresencial">Presencial</p>
                  </div>
                  <div className="tframe1415">
                    <input
                      type="checkbox"
                      className="tcheckRemoto"
                      onChange={() => presencialidadNo()}
                    />
                    <p className="tremoto">En remoto</p>
                  </div>
                </div>
              </div>
              <div className="tframe1435">
                <p className="tposibilidadTraslado">Posibilidad traslado</p>
                <div className="tframe14212">
                  <div className="tframe14142">
                    <input
                      type="checkbox"
                      className="tcheckSi"
                      name="traslado"
                      onChange={() => trasladoSi()}
                    />
                    <p className="tsi">Si</p>
                  </div>
                  <div className="tframe14152">
                    <input
                      type="checkbox"
                      className="tcheckNo"
                      name="traslado"
                      onChange={() => trasladoNo()}
                    />
                    <p className="tno">No</p>
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

export default Tabla;
