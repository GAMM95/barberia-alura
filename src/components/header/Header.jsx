import './header.css';
import logo from '../../assets/logo-blanco.png';
import { links } from '../../Data';
// Iconos de React
import { FaStream } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header'>
      {/* contenedor de la cabecera */}
      <nav className="nav container">
        {/* Logo */}
        <a href='/' className="nav logo">
          <img src={logo} alt='logoG' className='nav__logo-img' ></img>
        </a>

        {/* Menu de items */}
        <div className="nav__menu">
          <ul className="nav__list">
            {links.map(({ nombre, ruta }, indice) => {
              return (
                <li className='nav__item' key={indice}>
                  <a href={ruta} className="nav__link">
                    {nombre}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Alternar nav */}
        <div className="nav__toggle">
          <FaStream />
        </div>

      </nav>
    </header>
  )
}

export default Header