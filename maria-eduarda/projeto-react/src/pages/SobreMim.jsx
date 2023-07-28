import sobre from "../assets/sobre-mim.jpg";
import me from "../assets/maria-ef.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin2.png";
import instagram from "../assets/instagram2.png";

import database from "../service/firebase";
import { ref, push, set } from "firebase/database"

import styles from "../styles/pages/sobre.module.css";

import { useState } from "react";

import { Link } from 'react-router-dom'

const Sobre = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputNome(e) {
    setNome(e.target.value);
  }

  function handleInputEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const messageListRef = ref(database, 'mensagens') //cria uma coleção no firebase
    const newMessageRef = push(messageListRef) //cria uma nova mensagem e enviar para nossa coleção "mensagens"
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })  

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <h2 className={styles.aboutTitle}>Um pouco sobre mim</h2>
        <img className={styles.headerImage} src={sobre} />
      </header>

      <div className={styles.aboutMe}>
        <div>
          <img className={styles.photo} src={me} />
        </div>

        <div>
          <p className={styles.aboutText}>
            Meu nome é Maria Eduarda, sou de Recife e tenho 23 anos. 
            Eu estava cursando Nutrição e realizando um estágio quando tomei a decisão de
            migrar para a área de tecnologia. Foi nesse momento que tomei
            conhecimento da Reprograma, por meio de uma amiga que já havia
            participado do programa. Após me inscrever, fui aprovada no processo
            seletivo para o curso de Front-End. 
          </p>
          <p className={styles.aboutText}>
            Desde então, tenho dedicado o ano de 2023 para estudar e aprimorar meus conhecimentos nessa nova
            área. Iniciar essa trajetória pela Reprograma foi, sem dúvida
            alguma, a melhor escolha que poderia ter feito. Embora tenha sido um
            desafio, encontrei um ambiente extremamente acolhedor, no qual mesmo
            chegando sem nenhum conhecimento prévio, encontrei mulheres que
            sempre acreditaram em meu potencial e demonstraram imensa paciência. O
            fato de ter iniciado meu aprendizado da maneira correta fez toda a
            diferença para que eu pudesse prosseguir com confiança em meu novo
            caminho.</p>
          <ul className={styles.curiosity}>
            <h3 className={styles.curiosityTitle}>Curiosidades sobre mim:</h3>
            <li className={styles.li}>Amo Harry Potter;</li>
            <li className={styles.li}>Sou apaixonada pelos animais;</li>
            <li className={styles.li}>Tenho 5 tatuagens;</li>
            <li className={styles.li}>Amo praia;</li>
            <li className={styles.li}>
              Gosto de filmes e séries de inestigação criminal;
            </li>
            <li className={styles.li}>
              No meu tempo livre gosto de estar com as pessoas que amo.
            </li>
          </ul>
        </div>
      </div>
     
      <div className={styles.contact}>
        <h1 className={styles.formTitle}>Entre em contato comigo</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}
          />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Digite seu email"
            onChange={handleInputEmail}
            value={email}
          />
          <textarea
            className={styles.formInput}
            placeholder="Digite sua mensagem ou nos conte sua história"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button className={styles.formButton} type="submit">
            Enviar mensagem
          </button>
        </form>

        <div className={styles.buttons}>
           <div className={styles.github}>
              <Link to="https://github.com/Maria-ef" target="_blank">
                <img className={styles.buttonImage} src={github} />
              </Link>
            </div>

            <div className={styles.linkedin}>
                <Link to="https://www.linkedin.com/in/maria-eduarda-ferreira-aab205270/" target="_blank">
                  <img className={styles.buttonImage} src={linkedin}/>
                </Link>
            </div>

            <div className={styles.instagram}>
              <Link to="https://www.instagram.com/_maduhb/" target="_blank">
                <img className={styles.buttonImage} src={instagram}/>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
