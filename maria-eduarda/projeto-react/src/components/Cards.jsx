import styles from '../styles/components/cards.module.css'

const Cards = ({image, description, title, text, button}) => {
    return (
        <div className={styles.cards}>
          <img className={styles.cardImage} src={image} description={description}/>
          <div className={styles.cardText}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <p className={styles.cardDescription}>{text}</p>
            <button className={styles.cardButton}>{button}</button>
          </div>
        </div>
    )
}

export default Cards;