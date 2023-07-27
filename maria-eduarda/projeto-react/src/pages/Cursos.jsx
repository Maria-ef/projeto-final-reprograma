import cursos from '../assets/cursos.jpg'

import styles from '../styles/pages/cursos.module.css'

import Cards from "../components/Cards"
import Header from '../components/Header'

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
    {cardImage: reprograma, 
      cardTitle:"REPROGRAMA", 
      cardText:"Oferecem cursos de programação completamente gratuitos para mulheres e adolescentes em situações de vulnerabilidade social, econômica e de gênero, priorizando em seus processos seletivos negras, trans e travestis.", 
      cardDescription:"Phython, Imersão JavaScript, Educa{devas}, Frond-End e Back-End estão entre seus cursos.", 
      linkTo:"https://reprograma.com.br/"},
    {cardImage: programaria, 
      cardTitle:"PROGRAMARIA", 
      cardDescription:"Para uma menina, o desafio de programar se inicia antes mesmo da tentativa de aprender. Faltam exemplos que inspirem e sobram preconceitos e estereótipos que desestimulam e reforçam a idéia de que a tecnologia é um campo masculino. Não se trata de falta de interesse ou de habilidade, a PrograMaria acredita que é preciso rever essas narrativas culturais que dizem o que a mulher pode ou não fazer, além de oferecer ferramentas e oportunidades para que elas aprendam.",
      linkTo:"https://www.programaria.org/"},
    {cardImage: sysadminas, 
      cardTitle:"SYSADMINAS", 
      cardDescription:"A Comunidade SysAdminas é uma organização sem fins lucrativos e grupo solidário que oferece uma rede de apoio para mulheres que desejam aprender conteúdos de infraestrutura de TI em um ambiente acolhedor e seguro. Nossa missão é incentivar e inspirar mulheres a crescerem em suas carreiras na área de TI no Brasil.",
      linkTo:"https://www.sysadminas.com.br/"},
    {cardImage: mulheresemdados, 
      cardTitle:"MULHERES EM DADOS", 
      cardDescription:"São um grupo formado por mulheres com diferentes níveis de experiência, diferentes carreiras e diferentes histórias e que têm em comum o interesse por dados e a vontade de melhorar a equidade de gênero nesse meio. Esperam contribuir cada vez mais por essa causa e construir uma rede de apoio cada vez mais forte e cheia de mulheres incríveis!",
      linkTo:"https://linktr.ee/mulheresemdados"},
    {cardImage: minasprogramam, 
      cardTitle:"MINAS PROGRAMAM", 
      cardDescription:"O Minas Programam é uma iniciativa criada em 2015 para desafiar os estereótipos de gênero e de raça que influenciam nossa relação com as áreas de ciências, tecnologia e computação. Promovem oportunidades de aprendizado sobre programação para meninas e mulheres, priorizando àquelas que são negras ou indígenas.",
      linkTo:"https://minasprogramam.com/"},
    {cardImage: elasprogramam, 
      cardTitle:"ELAS PROGRAMAM", 
      cardDescription:"Elas Programam é uma consultoria especializada em desenvolver soluções para engajamento, capacitação e contratação de talentos femininos de tecnologia.",
      linkTo:"https://www.elasprogramam.com.br/"},
    {cardImage: datagirls, 
      cardTitle:"DATA GIRLS", 
      cardDescription:"Fazem parte do grupo Neuron - Data Science and Artificial Intelligence e iniciaram as atividades em 2019 com o objetivo de fomentar o engajamento feminino em ciência de dados, inteligência artificial e temas relacionados para que possam envolver, encorajar e fortalecer uma comunidade ativa de mulheres neste campo!",
      linkTo:"https://linktr.ee/DataGirls"},
    {cardImage: meninasdigitais, 
      cardTitle:"PROGRAMA MENINAS DIGITAIS", 
      cardDescription:"Tem como objetivo despertar o interesse de meninas estudantes do ensino médio e dos anos finais do ensino fundamental, para que estas conheçam melhor a área e sintam-se motivadas em seguir uma carreira em Computação. As ações do Programa são diversificadas: oferta de minicursos e oficinas; realização de dinâmicas; palestras com estudantes e profissionais que já atuam na área compartilhando suas experiências; realização de eventos etc.",
      linkTo:"https://meninas.sbc.org.br/"},
    {cardImage: womakerscode, 
      cardTitle:"WOMAKERSCODE", 
      cardDescription:"São uma organização dedicada a impulsionar mulheres na área da tecnologia. Oferecem diversas iniciativas e programas, como meetups (eventos), workshops e mentorias, abordando habilidades técnicas e competências pessoais (soft-skills), incentivando o networking e preparando-as para carreiras em tecnologia.",
      linkTo:"https://womakerscode.org/"},
    {cardImage: womentechmakers, 
      cardTitle:"WOMEN TECHMAKERS", 
      cardDescription:"O programa Women Techmakers do Google oferece visibilidade, comunidade e recursos para mulheres em tecnologia.",
      linkTo:"https://developers.google.com/womentechmakers?hl=pt-br"}
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
        description={item.cardDescription} 
        link={item.linkTo}
      /> 
      </div>
    })
  }

  return (
    <>
    <Header 
      image={cursos}
      title="Você sabia que existem cursos apenas para mulheres?"
      text="Cursos voltados para mulheres na área de tecnologia são iniciativas que visam promover a igualdade de gênero no setor. Eles oferecem oportunidades específicas para mulheres aprenderem habilidades técnicas em tecnologia, enquanto criam um ambiente acolhedor e encorajador."
      description="Esses cursos têm como objetivo aumentar a representatividade feminina na indústria e eliminar barreiras de gênero. Importante ressaltar que, para trabalhar na área de tecnologia, não é necessária a exigência de nível superior, proporcionando oportunidades inclusivas para mulheres de diversas formações educacionais."
      />
    
    <h2 className={styles.initialTitle}>Mulheres na tecnologia: 10 iniciativas de TI para elas</h2>
    <div className={styles.cursos}>
        {getCards(list)}
    </div>
    

    </>
  );
};

export default Cursos;