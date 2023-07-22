import styles from "../styles/components/header.module.css";

const Header = ({ title, image }) => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img className={styles.headerImage} src={image} alt={title} />
      </div>
      <div className={styles.headerIntro}>
        <h2 className={styles.headerTitle}>Bem-vindas ao nosso site "Mulheres na Tech"!</h2>
        <p className={styles.headerDescription}>
             A indústria da tecnologia tem sido historicamente dominada por homens,
          mas estamos determinadas a mudar essa realidade. Acreditamos que cada
          mulher possui um potencial incrível para impulsionar a inovação e
          promover transformações significativas no mundo através da tecnologia.
          Queremos quebrar barreiras, desafiar estereótipos e garantir que todas
          as mulheres interessadas tenham a oportunidade de se destacar nesse
          campo.
        </p>
        <br />
        <p className={styles.headerDescription}>
          Aqui, incentivamos mulheres a seguirem carreira na área tech. Neste
          site, você encontrará informações valiosas para ajudá-la a iniciar e
          progredir em sua jornada na área de tecnologia. Desde guias práticos
          sobre como escolher a carreira certa até histórias inspiradoras de
          mulheres bem-sucedidas na indústria. Nosso objetivo é fornecer
          conhecimentos relevantes e ferramentas indispensáveis para o seu
          sucesso.
        </p>
      </div>
    </header>
  );
};

export default Header;
