import borrar from '../images/borrar.png'
import cruz from '../images/cruz.png'
import React from 'react';

const Formfiltro = () => {
    return (

<div className="tframe1422">
<div className="tframe2001">
  <p className="tfiltros">Filtros de búsqueda</p>
  <img src={borrar} alt="trash" className="tborrar" />
</div>
<div className="tframe1999">
  <div className="tframe1380">
    <div className="tframe1433">
      <p className="tetiquetas">Etiquetas</p>
      <input className="tframe1328" placeholder='Escribe para buscar'/>
    </div>
    <div className="tframe1430">
      <div className="tframe1401">
        <div className="ttagReact">
          <p className="treact">REACT</p>
          <img src={cruz} alt="" className="tcruz" />
        </div>
        <div className="ttagHtml">
          <p className="thtml">HTML&CSS</p>
          <img src={cruz} alt="" className="tcruz" />
        </div>
      </div>
      <div className="tframe1403">
        <div className="ttagAngular">
          <p className="tangular">ANGULAR</p>
          <img src={cruz} alt="" className="tcruz" />
        </div>
      </div>
    </div>
  </div>
  <div className="tframe14332">
    <p className="tpais">País</p>
    <select className="tframe13282">
      <option value="España">España</option>
    </select>
  </div>
  <div className="tframe1434">
    <p className="tciudad">Ciudad</p>
    <select className="tframe13283">
      <option value="Ciudad">Valencia</option>
    </select>
  </div>
  <div className="tframe14222">
    <p className="tpresencialDistancia">Presencial / a distancia</p>
    <div className="tframe1421">
      <div className="tframe1414">
        <input type="checkbox" className="tcheckPresencial" />
        <p className="tpresencial">Presencial</p>
      </div>
      <div className="tframe1415">
        <input type="checkbox" className="tcheckRemoto" />
        <p className="tremoto">En remoto</p>
      </div>
    </div>
  </div>
  <div className="tframe1435">
    <p className="tposibilidadTraslado">Posibilidad traslado</p>
    <div className="tframe14212">
      <div className="tframe14142">
        <input type="checkbox" className="tcheckSi" />
        <p className="tsi">Si</p>
      </div>
      <div className="tframe14152">
        <input type="checkbox" className="tcheckNo" />
        <p className="tno">No</p>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Formfiltro;
