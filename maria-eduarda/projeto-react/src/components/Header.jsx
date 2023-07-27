import styles from "../styles/components/header.module.css";

const Header = ({ title, image, text, description }) => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img className={styles.headerImage} src={image} />
      </div>
        
      <div>
        <h3 className={styles.headerTitle}>{title}</h3>
        <div className={styles.description}>
          <p className={styles.headerText}>{text}</p>
          <p className={styles.headerDescription}>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
