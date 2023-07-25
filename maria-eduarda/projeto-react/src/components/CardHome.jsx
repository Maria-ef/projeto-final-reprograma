import styles from '../styles/components/cardhome.module.css'

const CardHome = ({title, description}) => {
    return (
        <div className="cardsHome">
          <h1 className={styles.cardTitle}>{title}</h1>
          <p className={styles.cardDescription}>{description}</p>
        </div>
    )
}

export default CardHome;