import Header from "../components/Header"
import CardInspiracoes from "../components/CardInspiracoes"

import inspiracoes from '../assets/inspiracoes.jpg'

import styles from '../styles/pages/inspiracoes.module.css'

import ester from '../assets/ester.jpg'
import jennifer from '../assets/jennifer.jpg'
import taina from '../assets/taina.jpg'
import talita from '../assets/talita.jpg'


const Inspiracoes = () => {
  const list = [
    {cardImage: ester,
    cardName:"Ester Souza",
    cardDescription:"Conheci a Reprograma por meio de uma propaganda de TV quando eu era babá e tinha trancado a faculdade de arquitetura. Não passei de primeira, mas após três tentativas, fui selecionada para o curso. Durante o curso, enfrentei desafios porque tive que trabalhar, pois era final de ano e eu ganhava mais dinheiro como folguista, mas contei com o apoio das colegas. Passei seis meses desempregada, mas ter participado do grupo de formação continuada da Reprograma me ajudou a melhorar minhas entrevistas e superar a síndrome do impostor. Então consegui uma entrevista e passei, porém, não me chamaram. Depois de um tempo, conversei com um gerente que tinha feito entrevista comigo e ele me indicou para empresas que ele trabalhava. No começo foi desesperador ouvir palavras que eu não conhecia, me senti um bebê, pois não conseguia nem falar e a linguagem de programação era c#. Passei 3 meses de experiência devorando os cursos da alura e consegui  fazer um pouco de código com o mentor. Nessa fase, a empresa teve layoff e eu fiquei sem entender nada. Então fui transferida para área de qualidade e lá estou até hoje. Fiz 1 ano de Zenvia, aprendi automação de teste e quero continuar nesse caminho, pois sou apaixonada.",
    linkedin:"https://www.linkedin.com/in/ester-silvade/"},
    {cardImage: jennifer,
    cardName:"Jennifer Alves",
    cardDescription:"Sou formada em Serviço Social e decidi fazer a transição de carreira para TI, mas não sabia ao certo em que área seguir. Por acaso, em uma busca no LinkedIn, vi uma curtida de alguém que eu tinha conexão na postagem da Reprograma sobre a inscrição para a turma de Back-End e me inscrevi. Pronto, a partir dali minha vida mudou: durante a formação da reprograma senti muita dificuldade, tive muita ajuda das colegas que já tinham uma base...senti vontade de desistir por achar que nada daquilo iria fazer sentido na minha cabeça TDAH um dia, teve lágrimas, e muito desespero. Mas eu não estava só, outras meninas passavam pelo mesmo turbilhão de sentimentos e quando compartilhamos eles nos unimos e fomos até o fim. Sinto que as coisas começaram a clarear mais um pouco quando eu já estava perto de concluir a formação. Umas das empresas patrocinadoras da Reprograma abriu um processo seletivo para uma academia(formação) de SAP ABAP, seria para aprender outra linguagem daqui estaca sendo ensinada na reprograma. Mas eu topei o desafio e participei do processo seletivo, fiz a academia de 30 dias e consegui ser contratada. Hoje tem 1 ano e 4 meses que sou desenvolvedora SAP ABAP e estou muito orgulhosa de mim por não ter desistido. Espero que vocês tatuem no coração que nunca se deve desistir de algo por achar que não consegue, talvez por realmente não se identificar, mas não por achar que nunca vão aprender. A curva de aprendizado é individual, cada um aprende no seu tempo. O mais importante é sempre praticar e estudar muito.",
    linkedin:"https://www.linkedin.com/in/jeniffer-a-472230107/"},
    {cardImage: taina,
    cardName:"Tainá Medeiros",
    cardDescription:"Sou engenheira de software desde 2009, bacharel em Ciência da Computação, Especialista em Segurança da Informação e Mestre em Sistemas e Computação com ênfase em jogos digitais. Nos primeiros 10 anos da minha carreira, trabalhei apenas com Back-End, principalmente com java. Desde 2019 comecei a trabalhar Front-End usando typescript e react, me apaixonei e hoje atuo como FullStack. Também tive a oportunidade de ser Tech lead durante minha carreira e hoje sou líder de tecnologia na ThoughtWorks criando APIs, correções em aplicações web, contribuindo com documentações, revisões de código, criando e executando processos batch  e também trabalho muito próximo ao cliente, tomando decisões. Para minha equipe, ajudo todos em suas carreiras e procuro sempre ensiná-los a serem autônomos, e também cuido para que tenhamos um ambiente transparente e seguro. Fui professora por 6 anos em algumas universidades no Brasil, além disso, fora do trabalho, gosto de jogar jogos de tabuleiro, passear com meu cachorro Tequila…..Adoro a cor laranja e sou apaixonada por girafas. Como forma de educar, incentivar e evoluir o mundo, criei um projeto para proporcionar um ambiente seguro para meninas que queiram trabalhar como desenvolvedoras: Sou a Fundadora e Coordenadora do 'Meninas também jogam' www.facebook.com/meninastbjogam projeto que promove uma cultura gamer independente de gênero, com o objetivo de motivar mais mulheres a ingressarem na área de TI.",
    linkedin:"https://www.linkedin.com/in/tainamedeiros/"},
    {cardImage: talita,
    cardName:"Talita Oliveira",
    cardDescription:"Olá, me chamo Talita Oliveira, tenho 34 anos, sou natural de Campina Grande - PB. Sou formada em História, e atuei como professora antes de conhecer a Reprograma em 2021 e decidir estudar programação. Ingressei no curso de backend (turma On14) e me apaixonei pela área. No começo foi desafiador, mas com o tempo e o projeto final, tudo fez mais sentido. Atualmente, participo de outros bootcamps, e busco sempre respeitar o meu tempo de aprendizado. Além de ensinar programação, a Reprograma criou uma comunidade de apoio que me inspira a continuar aprendendo e compartilhando conhecimentos. ❤️",
    linkedin:"https://www.linkedin.com/in/talitarosamistica/"}
  ] 

  function getCards(card) {

    return card.map((item, indice) => {
      return <div className={styles.inspCards}
      key={indice+1}
      >
      <CardInspiracoes
        key={indice}
        image={item.cardImage} 
        title={item.cardName}
        description={item.cardDescription} 
        link={item.linkedin}
      /> 
      
      </div>
    })
  }

  return (
    <>
    <Header
    image={inspiracoes}
    title="Mulheres que inspiram Mulheres ❤️" 
    text="Em um campo com pouca representação feminina, o incentivo entre mulheres pode ajudar a reduzir o sentimento de isolamento e solidão, proporcionando um senso de comunidade e apoio. Ao ver exemplos de sucesso de mulheres na tecnologia, outras mulheres são motivadas a perseguir seus próprios objetivos nesse campo."
    description="Portanto, encorajar outras mulheres na área de T.I. não apenas contribui para a construção de uma indústria tecnológica mais inclusiva, mas também ajuda a abrir portas para mais mulheres alcançarem seus objetivos profissionais, promovendo um futuro mais igualitário e inovador."
    />
     
     <div className={styles.historias}>
        {getCards(list)}
    </div>


    </>
  ); 
};

export default Inspiracoes;