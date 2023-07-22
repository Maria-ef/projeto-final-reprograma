import Header from "../components/Header";
import CardHome from "../components/CardHome";

import home from "../assets/home.jpg";

import styles from '../styles/pages/home.module.css'


const Home = () => {
  return (
    <>
      <Header
        // title="Mulheres na Tecnologia"
        image={home}
        
        />
        <h3 className={styles.homeTitle}>Conheça algumas das profissões na área da tecnologia a seguir:</h3>
        <div className={styles.homeProfessions}>
          <div className={styles.cards}>
            <CardHome 
              title="Arquitetura de redes"
              description="É responsável pelo desenvolvimento e manutenção de redes de internet, organizacionais e sociais. Trabalha para melhorar a forma de compartilhamento de informações e dados."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Ciência de dados"
              description="De forma geral, é possível dizer que o profissional dessa área é responsável por estabelecer uma base sólida de dados para executar análises robustas, o que pode ser feito por vários processos. Com essas informações, as empresas conseguem entender o negócio e os consumidores, além de tomar melhores decisões."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Analista de testes de softwares"
              description="Identifica e determina os testes exigidos para a operação perfeita dos softwares, monitora o processo e seus resultados detalhadamente, além de avaliar a qualidade dos programas."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Ciência da computação"
              description="Há faculdades de ciência da computação. A atividade profissional é ampla, mas hoje, o foco é a criação e desenvolvimento de softwares, ou seja, os programas, sistemas e aplicativos que um computador, smartphone ou outra máquina tem."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Engenharia de hardware"
              description="Criar, projetar e reparar hardwares é a forma de atuação mais comum da profissão. Hardwares são a parte física dos aparelhos, como gabinetes, teclado, monitor e mouse, entre outros."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Engenharia de QA (quality assurance)"
              description="Trabalha com automação, controle de qualidade e estatísticas. Analisa a qualidade dos sistemas, emite relatórios a fim de prevenir erros e falhas nos processos."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Especialista de cibersegurança"
              description="Maneja os sistemas de informação e recursos da empresa a fim de identificar fraquezas nos servidores e sistemas, e propor ferramentas, conduta e as mudanças que forem necessárias para a segurança da base de dados das instituições."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Desenvolvimento de games"
              description="Quem estuda design de games tem a capacidade de desenvolver jogos do zero com toda sua parte de programas, criação gráfica, parte estratégia e algorítmica através dos comandos dos jogos."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Desenvolvimento de mobile ou aplicativos"
              description="É a pessoa que trabalha com desenvolvimento de aplicativos, sejam eles de relacionamentos, contabilidade, compra ou jogos. São infinitas possibilidades que exigem, além de criatividade, conhecimento técnico e resiliência."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Help desk ou suporte ao cliente"
              description="Facilita a comunicação entre empresas e clientes. Soluciona também alguns problemas básicos e direciona outros à especialistas. É uma profissão muito comum em empresas de telefonia, embora haja certa tendência em robotizar e automatizar os primeiros contatos."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Programação de multimídia"
              description="Quem trabalha com este ramo cuida da parte gráfica, modelagem e animação dos ambientes virtuais de jogos e também de outras plataformas de realidade virtual."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Programação de computadores"
              description="Os programas de computador são feitos em linguagem de programação. Quem trabalha nesta profissão aperfeiçoa as linguagens de programação para computadores sempre com o objetivo que sejam mais diretas e rápidas em sua execução."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Programação web"
              description="Desenvolve sites, fóruns, portais e outros programas da internet e são hospedados em servidores web. Especialistas em programação web são peças-chave para as empresas de portais de hospedagem."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Robótica e inteligência artificial"
              description="A inteligência artificial entra como peça chave na automatização de processos e quem trabalha com isso desenvolve todo o programa ou boa parte dele, para fins da máquina ser funcional, cumprir com o que foi projetada."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Tecnologia industrial"
              description="A indústria cresce conforme crescem suas tecnologias e seus processos são aperfeiçoados. Isso se dá através da aplicação de técnicas por profissionais capacitados que geram e aprimoram, através da tecnologia, processos, serviços e produtos."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="UI designer (designer de interface do usuário)"
              description="É uma profissão nova cujo objetivo é criar as melhores interfaces para aplicativos ou sites. O objetivo? Permitir que as pessoas naveguem de forma intuitiva, ou seja, sem qualquer dificuldade em encontrar o que buscam."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Profissional de TI"
              description="A atuação é ampla, tanto quanto a área, mas tem a função principal de gerenciar as informações do negócio. Através de mecanismos específicos gera, armazena e assegura a integridade dos dados de uma corporação. É uma das profissões mais conhecidas e bem remuneradas no Brasil."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Área de suporte"
              description="Profissionais que deem um suporte técnico são essenciais para que tanto o software como o hardware das máquinas estejam em boas condições. Quem atua nessa área tem um papel fundamental na organização, para solucionar quaisquer problemas que clientes ou colaboradores venham a ter, assim como preveni-los."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Desenvolvimento de e-commerce"
              description="A venda pela internet tem se tornado uma das formas mais famosas de comercialização de produtos. Os e-commerces, portanto, precisam de quem possa desenvolvê-los. Criar e-commerce é mais uma das áreas da tecnologia que há uma grande demanda de profissionais. Seja para montar a loja, o software de cobrança ou para realizar a sua manutenção."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Cloud computing"
              description="Progressivamente, usuários utilizam as facilidades do armazenamento virtual. E o cloud computing não fica de fora. A computação na nuvem requer um profissional que planeje e execute seus processos nas empresas. Assim como ser capaz de realizar a integração do cloud computing com as outras tecnologias da empresa, como a internet das coisas."
            />
          </div>
          <div className={styles.cards}>
            <CardHome 
              title="Mídias sociais"
              description="Esse profissional é responsável por técnicas, estratégias e produções que fazem com que as redes sociais de alguma corporação fiquem mais conhecidas. Além disso, é importante que o profissional tenha conhecimento de ferramentas tecnológicas que se liguem ao mundo das mídias sociais. "
            />
          </div>

        </div>

    </>
  );
};

export default Home;
