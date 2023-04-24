import PropTypes from 'prop-types';
import { useState } from 'react';
import Contacto from './ComponenteA';

function ComponenteB({ contacto }) {
  const [conectado, setConectado] = useState(contacto.conectado);

  function cambiarEstado() {
    setConectado(!conectado);
  }

  return (
    <div className={conectado ? 'Conectado' : 'Desconectado'}>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteB;

