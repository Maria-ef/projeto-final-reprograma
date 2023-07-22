import Header from '../components/Header'

import sobre from '../assets/sobre-mim.jpg'

const Sobre = () => {
  return (
    <>
    <Header title="Entre em contato" image={sobre} />
    <div>
      <form onSubmit={() => {}}>
        <input 
          type='text'
          placeholder='Digite seu nome'
          onChange={() => {}}
          value=''
        />
        <input
          type='email' 
          placeholder='Digite seu email'
          onChange={() => {}}
          value=''
        />
        <input 
          placeholder='Digite sua mensagem'
          onChange={() => {}}
          value=''
        />
        <button type='submit'>Enviar mensagem</button>
      </form>
    </div>
    </>
  )
}

export default Sobre