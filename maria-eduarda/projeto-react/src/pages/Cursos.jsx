import cursos from '../assets/cursos.jpg'

import styles from '../styles/pages/cursos.module.css'

import Cards from "../components/Cards"

import reprograma from '../assets/reprograma.png'
import programaria from '../assets/programaria.png'
import sysadminas from '../assets/sysadminas.jpg'
import mulheresemdados from '../assets/mulheresemdados.jpg'
import minasprogramam from '../assets/minas-programam.png'
import elasprogramam from '../assets/elas-programam.png'
import datagirls from '../assets/datagirls.png'
import meninasdigitais from '../assets/meninas-digitais.png'
import womakerscode from '../assets/womakerscode.png'
import womentechmakers from '../assets/women-techmakers.png'


const Cursos = () => {
  const list = [
    {cardImage: reprograma, cardTitle:"REPROGRAMA", cardText:"MMMMMMM"},
    {cardImage: programaria, cardTitle:"PROGRAMARIA", cardText:"MMMMMM"},
    {cardImage: sysadminas, cardTitle:"SYSADMINAS", cardText:"MMMMMM"},
    {cardImage: mulheresemdados, cardTitle:"MULHERES EM DADOS", cardText:"MMMMM"},
    {cardImage: minasprogramam, cardTitle:"MINAS PROGRAMAM", cardText:"MMMMMM"},
    {cardImage: elasprogramam, cardTitle:"ELAS PROGRAMAM", cardText:"MMMMM"},
    {cardImage: datagirls, cardTitle:"DATA GIRLS", cardText:"MMMMMM"},
    {cardImage: meninasdigitais, cardTitle:"PROGRAMA MENINAS DIGITAIS", cardText:"MMMMMM"},
    {cardImage: womakerscode, cardTitle:"WOMAKERSCODE", cardText:"MMMMM"},
    {cardImage: womentechmakers, cardTitle:"WOMEN TECHMAKERS", cardText:"MMMMM"}
  ]

  function getCards(card) {

    return card.map((item, indice) => {
      return <div className={styles.cursosCards}
      key={indice+1}
      >
      <Cards
        key={indice}
        image={item.cardImage} 
        title={item.cardTitle}
        text={item.cardText}
        button=""
      /> 
      </div>
    })
  }

  return (
    <>
      <header className={styles.cursosContainer}>
        <h2 className={styles.cursosTitle}>Cursos para mulheres</h2>
        <img className={styles.cursosImage} src={cursos} />
      </header>

    <h2>Cursos</h2>
    <div className={styles.cursos}>
      {getCards(list)}
    </div>

    </>
  );
};

export default Cursos;