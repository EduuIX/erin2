import { Link } from 'react-router-dom';
import './header.css';
import logoErin from '/image/logo-erin.png'


const handleLogoClick = () => {
    window.location.href = "/";
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        <Link to="/" onClick={handleLogoClick}>
                            <img src={logoErin} alt="logotipo ERIN2" />
                            <h1 >Erin 2</h1>
                        </Link>
                    </div>

                    <nav>
                        <input type="checkbox" id="menu-hamburguer" />
                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>


                        <ul>
                            <li><Link onClick={scrollToTop} to="/">Home</Link></li>
                            <li><Link onClick={scrollToTop} to="/chamadas">Chamadas</Link></li>
                            <li><Link onClick={scrollToTop} to="/programacao">Programação</Link></li>
                            <li><Link onClick={scrollToTop} to="/inscricoes">Inscrições</Link></li>
                            <li><Link onClick={scrollToTop} to="/evento">Evento</Link></li>
                            <li><Link onClick={scrollToTop} to="/contato">Contato</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
};

export { Header }