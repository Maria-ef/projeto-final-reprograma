import styles from '../styles/components/cards.module.css'

import { Link } from 'react-router-dom'

const Cards = ({image, description, title, text, link}) => {
    return (
        <div className={styles.cards}>
          <div className={styles.cardPhoto}>
            <img className={styles.cardImage} src={image} />
          </div>
          <div className={styles.cardText}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <p className={styles.cardDescription}>{text}</p>
            <p className={styles.cardDescription}>{description}
            <Link to={link} target='_blank'>
            <button className={styles.cardButton}>Saiba mais</button>
            </Link>
            </p>
            
            
          </div>
        </div>
    )
}

export default Cards;