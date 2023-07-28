import { useState } from 'react'

import styles from '../styles/components/inspdescription.module.css'

const Description = ({ texto }) => {
    const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  
    const handleMostrarMais = () => {
      setMostrarTextoCompleto(true);
    }

    const handleMostrarMenos = () => {
      setMostrarTextoCompleto(false);
    }
  
    return (
      <>
        <p className={styles.description}>{mostrarTextoCompleto ? texto : texto.substring(0, 300)}</p>
        {!mostrarTextoCompleto && (
          <span className={styles.span} onClick={handleMostrarMais}>Mostrar mais</span>
        )}
        {mostrarTextoCompleto && (
        <span className={styles.span} onClick={handleMostrarMenos}>Mostrar menos</span>
      )}
      </>
    );
  }

  export default Description;