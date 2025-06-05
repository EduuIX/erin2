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
                            <h4><span className='destaque'>Macapá </span>– AP</h4>
                            <p>Rodovia BR-210, Km 03, S/n - Brasil Novo, AP, 68909-398</p>
                            <h4>E-mail:</h4>
                            <p> <Link className='link' to={"mailto:thiego.nunes@ifap.edu.br, rafael@unifap.br"}>Envie-nos um e-mail</Link></p>
                        </div>
                        <div className="map">
                            <iframe 
                                src=
                                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8137820045267!2d-51.09461292425068!3d0.08641906433215789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e680b76ce263%3A0x30df88c4500fefcd!2sInstituto%20Federal%20do%20Amap%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1749130405834!5m2!1spt-BR!2sbr"
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