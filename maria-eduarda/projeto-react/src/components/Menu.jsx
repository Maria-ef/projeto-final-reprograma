import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

import logo from '../assets/logo.jpg'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
        <Link to="/">
            <img className={styles.logo} src={logo} alt='logo do site' title='Logo do Site' /> 
        </Link>
        
        <li>
            <Link className={styles.menuLink} to="/">Home</Link>
        </li>
        <li>
            <Link className={styles.menuLink} to="/cursos">Cursos</Link>
        </li>
        <li>
            <Link className={styles.menuLink} to="/inspiracoes">Inspirações</Link>
        </li>
        <li>
            <Link className={styles.menuLink} to="/sobre">Sobre Mim</Link>
        </li> 
    </nav>
  )
}

export default Menu