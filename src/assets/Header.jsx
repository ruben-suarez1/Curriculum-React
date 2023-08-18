import { useState } from 'react';

const Header = () => {

    const [isMenuShown, setIsMenuShown] = useState(false);

    const toggleMenu = () => {
        setIsMenuShown(!isMenuShown);
    };

    const closeMenu = () => {
        setIsMenuShown(false);
    };

    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav__logo">SUAREZ</a>

                <div className={`nav__menu ${isMenuShown ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">


                        <li className="nav__item">
                            <a href="#home" className="nav__link activ-link">
                                <i className='bx bx-home nav__icon'></i>Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#profile" className="nav__link">
                                <i className='bx bx-user nav__icon' ></i>Perfil
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#education" className="nav__link">
                                <i className='bx bx-book nav__icon'></i>Educación
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='bx bx-receipt nav__icon' ></i>Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <i className='bx bx-briefcase-alt nav__icon' ></i>Experiencia
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#certificate" className="nav__link">
                                <i className='bx bx-award nav__icon' ></i>Cursos
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#references" className="nav__link">
                                <i className='bx bx-user-voice nav__icon'></i>Lenguajes
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#references" className="nav__link">
                                <i className='bx bx-book-reader nav__icon'></i>Intereses
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className={`bx ${isMenuShown ? 'bx-x' : 'bx-grid-alt'}`}></i>
                </div>
            </nav>
        </header>
    )
}

export default Header