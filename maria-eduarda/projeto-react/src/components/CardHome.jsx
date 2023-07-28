import styles from '../styles/components/cardhome.module.css'

const CardHome = ({title, description}) => {
    return (
      <div className={styles.flipContainer}>
        <div className={styles.flipper}>
          <div className={styles.front}>
            <h1 className={styles.cardTitle}>{title}</h1>
          </div>
          <div className={styles.back}>
            <p className={styles.cardDescription}>{description}</p>
          </div>
          </div>
      </div>
    )
}

export default CardHome;