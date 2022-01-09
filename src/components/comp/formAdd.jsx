import React, { Fragment } from "react";

const Formadd = () => {
  return (
    <Fragment>
      <form className="tform2" id="tformulario">
        <input
          className="tinput2"
          type="text"
          id="tnombre"
          placeholder="Nombre"
        />{" "}
        <br />
        <input
          className="tinput2"
          type="text"
          id="tciudad"
          placeholder="Ciudad"
        />{" "}
        <br />
        <input
          className="tinput2"
          type="text"
          id="tpais"
          placeholder="Pais"
        />{" "}
        <br />
        <input
          className="tinput2"
          type="text"
          id="ttelefono"
          placeholder="Telefono"
        />
        <br />
        <input
          className="tinput2"
          type="text"
          id="tcorreo"
          placeholder="Email"
          max="10"
          min="0"
        />
        <br />
        <input
          className="tinput2"
          type="text"
          id="tetiquetas"
          placeholder="Etiquetas"
        />
        <br />
      </form>
    </Fragment>
  );
};

export default Formadd;
