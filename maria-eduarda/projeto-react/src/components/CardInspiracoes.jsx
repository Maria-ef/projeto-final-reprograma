import { Link } from 'react-router-dom'

import styles from '../styles/components/cardinspiracoes.module.css'

const CardInspiracoes = ({image, description, title, link}) => {
    return (
        <div className={styles.cards}>
          <div className={styles.cardPhoto}>
            <img className={styles.cardImage} src={image} />
          </div>
          <div className={styles.cardText}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <p className={styles.cardDescription}>{description}</p>
            <Link to={link} target='_blank'>
            <button className={styles.cardButton}>LinkedIn</button>
            </Link>
            
          </div>
        </div>
    )
}

export default CardInspiracoes;