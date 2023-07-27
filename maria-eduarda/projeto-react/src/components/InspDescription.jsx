import { useState } from 'react'

import styles from '../styles/components/inspdescription.module.css'

const Description = ({ texto }) => {
    const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  
    const handleMostrarMais = () => {
      setMostrarTextoCompleto(true);
    }
  
    return (
      <>
        <p className={styles.description}>{mostrarTextoCompleto ? texto : texto.substring(0, 300)}</p>
        {!mostrarTextoCompleto && <span className={styles.span} onClick={handleMostrarMais}>Mostrar mais</span>}
      </>
    );
  }

  export default Description;