import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import AlumnoService from "../../service/AlumnoService";

const yupSchema = Yup.object().shape({
  nombre: Yup.string().min(4, "Incorrecto").required("El nombre es requerido"),
  email: Yup.string()
    .email("Ingrese un email valido")
    .max(255)
    .required("El email es requerido "),
  ciudad: Yup.string().min(2, "Incorrecto"),
  pais: Yup.string().min(2, "Incorrecto"),
  telefono: Yup.number("Ingrese un numero valido"),
  traslado: Yup.bool(),
});

const Formadd = () => {
  let navigate = useNavigate();

  let nUsuario = {
    id: "25",
    nombre: "",
    ciudad: "",
    pais: "",
    telefono: "",
    email: "",
    traslado: false,
    presencialidad: "",
    etiquetas: [{
      id: null,
      lenguaje: "REACT"
    }],
    usuario: "admin1@admin.com"
  };

  return (
    <>
      <Formik
        initialValues={nUsuario}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
          await new Promise((r) => setTimeout(r, 500));
          AlumnoService.create("admin1@admin.com",values)
            .then((response) => {
              alert("Se ha creado el alumno correctamente");
              console.log(response);
              navigate("../tabla");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        {({ errors, handleChange,handleBlur, values, touched }) => (
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
                />Presencial
                 </label>
              </div>
              <div>
              <label>
                <Field
                  className="tinput2"
                  type="radio"
                  name="presencialidad"
                  value="REMOTO"
                />Remoto 
                 </label>                
              </div>
              <div>
              <label>
                <Field
                  className="tinput2"
                  type="radio"
                  name="presencialidad"
                  value="MIXTO"
                />Mixto
                </label>
              </div>
            </div>
            <input id="tpresencialidad" disabled />
            <br />
            <div className="divtraslado">
            <label>
              <Field
                className="tinput2"
                type="radio"
                name="traslado"
                value={`true`}
              />Si
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
              />No 
            </label>
            </div>
            <input id="ttraslado" disabled />
            <Field
              className="tinput2"
              name="etiquetas"
              type="text"
              id="tetiquetas"
              placeholder="Etiquetas"
              onChange={handleChange}

            />
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
