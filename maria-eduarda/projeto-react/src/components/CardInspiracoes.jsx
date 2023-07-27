import { Link } from 'react-router-dom'

import InspDescription from '../components/InspDescription'

import styles from '../styles/components/cardinspiracoes.module.css'

const CardInspiracoes = ({image, description, title, link}) => {
    return (
        <div className={styles.cards}>
          <div className={styles.cardPhoto}>
            <img className={styles.cardImage} src={image} />
          </div>
          <div className={styles.cardText}>
          <Link to={link} target='_blank'>
            <span className={styles.cardSpan}>{title}</span>
            </Link>
            <InspDescription
            texto={description}
            />
            
            
          </div>
        </div>
    )
}

export default CardInspiracoes;