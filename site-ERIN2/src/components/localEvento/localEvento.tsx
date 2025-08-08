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
                            <h5>Hub de Inovação Amazoon</h5>
                            <p>Rua Odilardo Silva, 1039 - Macapá/AP</p>
                            <p>CEP: 68908-196</p>
                            <h4>E-mail:</h4>
                            <p> <Link className='link' to={"mailto:thiego.nunes@ifap.edu.br, rafael@unifap.br"}>Envie-nos um e-mail</Link></p>
                        </div>
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.544418312133!2d-51.099348487281006!3d0.02100256444838528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e11f134c963d%3A0xaf1b309c2a3943b9!2sAmazoom%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1754666931290!5m2!1spt-BR!2sbr" 
                                width="600" 
                                height="450" 
                                loading="lazy"
                            >
                            </iframe>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    );
}

export { LocalEvento };