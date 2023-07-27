import Header from "../components/Header";
import CardHome from "../components/CardHome";

import home from "../assets/home.jpg";

import styles from '../styles/pages/home.module.css'


const Home = () => {
  const list = [
    {cardTitle:"Arquitetura de redes", cardDescription:"É responsável pelo desenvolvimento e manutenção de redes de internet, organizacionais e sociais. Trabalha para melhorar a forma de compartilhamento de informações e dados."},
    {cardTitle:"Ciência de dados", cardDescription:"De forma geral, é possível dizer que o profissional dessa área é responsável por estabelecer uma base sólida de dados para executar análises robustas, o que pode ser feito por vários processos. Com essas informações, as empresas conseguem entender o negócio e os consumidores, além de tomar melhores decisões."},
    {cardTitle:"Analista de testes de softwares", cardDescription:"Identifica e determina os testes exigidos para a operação perfeita dos softwares, monitora o processo e seus resultados detalhadamente, além de avaliar a qualidade dos programas."},
    {cardTitle:"Ciência da computação", cardDescription:"Há faculdades de ciência da computação. A atividade profissional é ampla, mas hoje, o foco é a criação e desenvolvimento de softwares, ou seja, os programas, sistemas e aplicativos que um computador, smartphone ou outra máquina tem."},
    {cardTitle:"Engenharia de hardware", cardDescription:"Criar, projetar e reparar hardwares é a forma de atuação mais comum da profissão. Hardwares são a parte física dos aparelhos, como gabinetes, teclado, monitor e mouse, entre outros."},
    {cardTitle:"Engenharia de QA (quality assurance)", cardDescription:"Trabalha com automação, controle de qualidade e estatísticas. Analisa a qualidade dos sistemas, emite relatórios a fim de prevenir erros e falhas nos processos."},
    {cardTitle:"Especialista de cibersegurança", cardDescription:"Maneja os sistemas de informação e recursos da empresa a fim de identificar fraquezas nos servidores e sistemas, e propor ferramentas, conduta e as mudanças que forem necessárias para a segurança da base de dados das instituições."},
    {cardTitle:"Desenvolvimento de games", cardDescription:"Quem estuda design de games tem a capacidade de desenvolver jogos do zero com toda sua parte de programas, criação gráfica, parte estratégia e algorítmica através dos comandos dos jogos."},
    {cardTitle:"Desenvolvimento de mobile ou aplicativos", cardDescription:"É a pessoa que trabalha com desenvolvimento de aplicativos, sejam eles de relacionamentos, contabilidade, compra ou jogos. São infinitas possibilidades que exigem, além de criatividade, conhecimento técnico e resiliência."},
    {cardTitle:"Help desk ou suporte ao cliente", cardDescription:"Facilita a comunicação entre empresas e clientes. Soluciona também alguns problemas básicos e direciona outros à especialistas. É uma profissão muito comum em empresas de telefonia, embora haja certa tendência em robotizar e automatizar os primeiros contatos."},
    {cardTitle:"Programação de multimídia", cardDescription:"Quem trabalha com este ramo cuida da parte gráfica, modelagem e animação dos ambientes virtuais de jogos e também de outras plataformas de realidade virtual."},
    {cardTitle:"Programação de computadores", cardDescription:"Os programas de computador são feitos em linguagem de programação. Quem trabalha nesta profissão aperfeiçoa as linguagens de programação para computadores sempre com o objetivo que sejam mais diretas e rápidas em sua execução."},
    {cardTitle:"Programação web", cardDescription:"Desenvolve sites, fóruns, portais e outros programas da internet e são hospedados em servidores web. Especialistas em programação web são peças-chave para as empresas de portais de hospedagem."},
    {cardTitle:"Robótica e inteligência artificial", cardDescription:"A inteligência artificial entra como peça chave na automatização de processos e quem trabalha com isso desenvolve todo o programa ou boa parte dele, para fins da máquina ser funcional, cumprir com o que foi projetada."},
    {cardTitle:"Tecnologia industrial", cardDescription:"A indústria cresce conforme crescem suas tecnologias e seus processos são aperfeiçoados. Isso se dá através da aplicação de técnicas por profissionais capacitados que geram e aprimoram, através da tecnologia, processos, serviços e produtos."},
    {cardTitle:"UI designer (designer de interface do usuário)", cardDescription:"É uma profissão nova cujo objetivo é criar as melhores interfaces para aplicativos ou sites. O objetivo? Permitir que as pessoas naveguem de forma intuitiva, ou seja, sem qualquer dificuldade em encontrar o que buscam."},
    {cardTitle:"Profissional de TI", cardDescription:"A atuação é ampla, tanto quanto a área, mas tem a função principal de gerenciar as informações do negócio. Através de mecanismos específicos gera, armazena e assegura a integridade dos dados de uma corporação. É uma das profissões mais conhecidas e bem remuneradas no Brasil."},
    {cardTitle:"Área de suporte", cardDescription:"Profissionais que deem um suporte técnico são essenciais para que tanto o software como o hardware das máquinas estejam em boas condições. Quem atua nessa área tem um papel fundamental na organização, para solucionar quaisquer problemas que clientes ou colaboradores venham a ter, assim como preveni-los."},
    {cardTitle:"Desenvolvimento de e-commerce", cardDescription:"A venda pela internet tem se tornado uma das formas mais famosas de comercialização de produtos. Os e-commerces, portanto, precisam de quem possa desenvolvê-los. Criar e-commerce é mais uma das áreas da tecnologia que há uma grande demanda de profissionais. Seja para montar a loja, o software de cobrança ou para realizar a sua manutenção."},
    {cardTitle:"Cloud computing", cardDescription:"Progressivamente, usuários utilizam as facilidades do armazenamento virtual. E o cloud computing não fica de fora. A computação na nuvem requer um profissional que planeje e execute seus processos nas empresas. Assim como ser capaz de realizar a integração do cloud computing com as outras tecnologias da empresa, como a internet das coisas."},
    {cardTitle:"Mídias sociais", cardDescription:"Esse profissional é responsável por técnicas, estratégias e produções que fazem com que as redes sociais de alguma corporação fiquem mais conhecidas. Além disso, é importante que o profissional tenha conhecimento de ferramentas tecnológicas que se liguem ao mundo das mídias sociais."}
  ]

    function generateCards(cardList) {
     
      return cardList.map((item, idx) => {
        return <div className={styles.cards}>
        <CardHome
          key={idx} 
          title={item.cardTitle}
          description={item.cardDescription}
        /> 
        </div>
      })

    }
  return (
    <>
      <Header
        image={home}
        title='Bem-vindas ao nosso site "Mulheres na Tecnologia"!'
        text="A indústria da tecnologia tem sido historicamente dominada por homens, mas estamos determinadas a mudar essa realidade. Acreditamos que cada mulher possui um potencial incrível para impulsionar a inovação e promover transformações significativas no mundo através da tecnologia. Queremos quebrar barreiras, desafiar estereótipos e garantir que todas as mulheres interessadas tenham a oportunidade de se destacar nesse campo."
        description="Aqui, incentivamos mulheres a seguirem carreira na área tech. Neste site, você encontrará informações valiosas para ajudá-la a iniciar e progredir em sua jornada na área de tecnologia. Desde guias práticos sobre como escolher a carreira certa até histórias inspiradoras de mulheres bem-sucedidas na indústria. Nosso objetivo é fornecer conhecimentos relevantes e ferramentas indispensáveis para o seu sucesso."
        />
        
        <h3 className={styles.homeTitle}>Quer saber um pouco mais sobre áreas da tecnologia?</h3>
        <h4 className={styles.homeSubtitle}>Confira algumas abaixo</h4>
        <div className={styles.homeProfessions}>
          {generateCards(list)}
        </div>

    </>
  );
};

export default Home;
