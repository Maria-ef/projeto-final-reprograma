import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Inspiracoes from './pages/Inspiracoes'
import Sobre from './pages/SobreMim'
import Footer from './components/Footer'



const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cursos" element={<Cursos/>} />
        <Route path="/inspiracoes" element={<Inspiracoes/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
      <Footer content="Feito por Maria Eduarda com amor <3!" />
    </BrowserRouter>
  )
}

export default Router