import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import AlumnoService from "../../service/AlumnoService";

const yupSchema = Yup.object().shape({
  nombre: Yup.string().min(4, "Incorrecto").required("Campo obligatorio"),
  email: Yup.string()
    .email("Ingrese un email valido")
    .max(255)
    .required("Campo obligatorio"),
  ciudad: Yup.string().min(2, "Incorrecto").required("Campo obligatorio"),
  pais: Yup.string().min(2, "Incorrecto").required("Campo obligatorio"),
  telefono: Yup.number("Ingrese un numero valido").required(
    "Campo obligatorio"
  ),
  presencialidad: Yup.string().required("Seleccione una opción"),
  traslado: Yup.bool().required("Seleccione una opción"),
});

const Formadd = () => {
  const [usuario, setUsuario] = useState({
    id: "999",
    nombre: "",
    ciudad: "",
    pais: "",
    telefono: "",
    email: "",
    traslado: false,
    presencialidad: "",
    etiquetas: [{}],
    usuario: sessionStorage.getItem("email"),
  });
  usuario.etiquetas.length = 0;

  let java = false;
  let html = false;
  let javascrypt = false;
  let react = false;
  let spring = false;
  let python = false;
  let typescrypt = false;
  let angular = false;
  let github = false;

  const addEtiqueta = (etiqueta) => {
    usuario.etiquetas.push({
      id: null,
      lenguaje: etiqueta,
    });
    console.log(usuario.etiquetas);
  };

  const deleteEtiqueta = (etiqueta) => {
    const indice = usuario.etiquetas.findIndex((elemento, indice) => {
      if (elemento.lenguaje === etiqueta) {
        return true;
      }
      return false;
    });
    usuario.etiquetas.splice(indice, 1);
  };

  return (
    <>
      <Formik
        initialValues={usuario}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values);
          await new Promise((r) => setTimeout(r, 200));
          AlumnoService.create(sessionStorage.getItem("email"), values)
            .then((response) => {
              alert("Se ha creado el alumno correctamente");
              usuario.etiquetas.length = 0;
              document.getElementById("tformulario").reset();
              console.log(response);
            })
            .catch((e) => {
              console.log(e);
              usuario.etiquetas.length = 0;
              document.getElementById("tformulario").reset();
            });
        }}
      >
        {({ errors, handleChange, handleBlur, values, touched }) => (
          <Form className="tform2" id="tformulario">
            <Field
              className="tinput2"
              type="text"
              id="tnombre"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              value={values.nombre}
              onBlur={handleBlur}
            />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.nombre}
            </p>
            <Field
              className="tinput2"
              type="text"
              id="tciudad"
              name="ciudad"
              placeholder="Ciudad"
              onChange={handleChange}
              value={values.ciudad}
              onBlur={handleBlur}
            />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.ciudad}
            </p>
            <Field
              className="tinput2"
              type="text"
              id="tpais"
              name="pais"
              placeholder="Pais"
              onChange={handleChange}
              value={values.pais}
              onBlur={handleBlur}
            />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.pais}
            </p>
            <Field
              className="tinput2"
              type="text"
              id="ttelefono"
              name="telefono"
              placeholder="Telefono"
              onChange={handleChange}
              value={values.telefono}
              onBlur={handleBlur}
            />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.telefono}
            </p>
            <Field
              className="tinput2"
              type="text"
              id="tcorreo"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.email}
            </p>
            <div className="divpresencialidad">
              <div>
                <label>
                  <Field
                    className="tinput2"
                    type="radio"
                    name="presencialidad"
                    value="PRESENCIAL"
                  />
                  Presencial
                </label>
              </div>
              <div>
                <label>
                  <Field
                    className="tinput2"
                    type="radio"
                    name="presencialidad"
                    value="REMOTO"
                  />
                  Remoto
                </label>
              </div>
              <div>
                <label>
                  <Field
                    className="tinput2"
                    type="radio"
                    name="presencialidad"
                    value="MIXTO"
                  />
                  Mixto
                </label>
              </div>
            </div>
            <input id="tpresencialidad" disabled />
            <br />
            <p className="error" style={{ color: "black" }}>
              {touched && errors.presencialidad}
            </p>
            <div className="divtraslado">
              <label>
                <Field
                  className="tinput2"
                  type="radio"
                  name="traslado"
                  value={`true`}
                />
                Si
              </label>
              <label>
                <input
                  className="tinput2"
                  type="text"
                  id="ttraslado"
                  value="Traslado"
                  disabled
                />
              </label>
              <label>
                <Field
                  className="tinput2"
                  type="radio"
                  name="traslado"
                  value={`false`}
                />
                No
              </label>
              <p className="error" style={{ color: "black" }}>
                {touched && errors.traslado}
              </p>
            </div>
            <input id="ttraslado" disabled />
            <input
              className="tinput2"
              type="text"
              id="tetiquetas"
              placeholder="ETIQUETAS"
              disabled
            />
            <div
              role="group"
              aria-labelledby="checkbox-group"
              id="divetiquetas"
            >
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="HTML&CSS"
                  onChange={() =>
                    !html
                      ? (addEtiqueta("HTML&CSS"), (html = true))
                      : (deleteEtiqueta("HTML&CSS"), (html = false))
                  }
                />
                HTML&CSS
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="JAVA"
                  onChange={() =>
                    !java
                      ? (addEtiqueta("JAVA"), (java = true))
                      : (deleteEtiqueta("JAVA"), (java = false))
                  }
                />
                JAVA
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="JAVASCRYPT"
                  onChange={() =>
                    !javascrypt
                      ? (addEtiqueta("JAVASCRYPT"), (javascrypt = true))
                      : (deleteEtiqueta("JAVASCRYPT"), (javascrypt = false))
                  }
                />
                JAVASCRYPT
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="REACT"
                  onChange={() =>
                    !react
                      ? (addEtiqueta("REACT"), (react = true))
                      : (deleteEtiqueta("REACT"), (react = false))
                  }
                />
                REACT
              </label>
            </div>
            <div id="divetiquetas">
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="SPRING"
                  onChange={() =>
                    !spring
                      ? (addEtiqueta("SPRING"), (spring = true))
                      : (deleteEtiqueta("SPRING"), (spring = false))
                  }
                />
                SPRING
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="PYTHON"
                  onChange={() =>
                    !python
                      ? (addEtiqueta("PYTHON"), (python = true))
                      : (deleteEtiqueta("PYTHON"), (python = false))
                  }
                />
                PYTHON
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="GITHUB"
                  onChange={() =>
                    !github
                      ? (addEtiqueta("GITHUB"), (github = true))
                      : (deleteEtiqueta("GITHUB"), (github = false))
                  }
                />
                GITHUB
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="ANGULAR"
                  onChange={() =>
                    !angular
                      ? (addEtiqueta("ANGULAR"), (angular = true))
                      : (deleteEtiqueta("ANGULAR"), (angular = false))
                  }
                />
                ANGULAR
              </label>
              <label id="checketiquetas">
                <input
                  type="checkbox"
                  value="TYPESCRIPT"
                  onChange={() =>
                    !typescrypt
                      ? (addEtiqueta("TYPESCRIPT"), (typescrypt = true))
                      : (deleteEtiqueta("TYPESCRIPT"), (typescrypt = false))
                  }
                />
                TYPESCRIPT
              </label>
            </div>
            <br />
            <br />
            <button name="enviar" id="btn" type="submit">
              Enviar Alumno
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formadd;
