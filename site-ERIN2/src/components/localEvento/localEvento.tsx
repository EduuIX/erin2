import { Link } from 'react-router-dom';
import './localEvento.css';

const LocalEvento = () => {
    return (
        <>
            <section>
                <div className="utilidade" id="utilidades">
                    <h3>Local do Evento:</h3>
                    <div className="utilidade-container">
                        <div className="info">
                            <h4>Universidade Federal do Pará</h4>
                            <p>Rua Augusto Corrêa, 01 – Bairro Guamá</p>
                            <p>CEP 66075-110, Belém – Pará – Amazônia – Brasil</p>
                            <h4>E-mail:</h4>
                            <p> <Link className='link' to={"mailto:iagomedeiros@ufpa.br"}>iagomedeiros@ufpa.br</Link></p>
                        </div>
                        <div className="map">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.494765097674!2d-48.459862925918145!3d-1.4758564358608324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d94cc1263ff%3A0x1f6e35bc3b41ab9e!2sUniversidade%20Federal%20do%20Par%C3%A1%20(UFPA)!5e0!3m2!1spt-BR!2sbr!4v1710894252684!5m2!1spt-BR!2sbr" 
                            width="600" height="450" loading="lazy">
                            </iframe>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    );
}

export { LocalEvento };