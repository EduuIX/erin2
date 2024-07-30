import { Link } from 'react-router-dom';
import './footer.css'


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <Link onClick={scrollToTop} to="/">
                    <h4>ERIN 2</h4>
                </Link>
            </div>
            <div className="menu">
                <nav>
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
            <div className="redes-sociais">
                <Link to="https://www.instagram.com/lacis_ufpa?igsh=ZDNtNjdrNTE4bnE1" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="https://www.facebook.com/erin2.sbc" target="_blank"><i className="fa-brands fa-square-facebook"></i></Link>
            </div>
            <div className="dev">
                <h5>Desenvolvido por <Link to="https://www.instagram.com/eduu_rib/" target="_blank">Eduardo Ribeiro <i className="fa-solid fa-code"></i></Link></h5>
                <p>Copyright <i className="fa-regular fa-copyright"></i> ERIN2 — Todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export { Footer }