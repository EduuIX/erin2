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
                            <h4><span className='destaque'>Auditório do ICEN </span>– UFPA</h4>
                            <p>Rua Igarapé Tucunduba – Bairro Guamá</p>
                            <p>CEP 66075-123, Belém – Pará – Amazônia – Brasil</p>
                            <h4>E-mail:</h4>
                            <p> <Link className='link' to={"mailto:iagomedeiros@ufpa.br"}>iagomedeiros@ufpa.br</Link></p>
                        </div>
                        <div className="map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.49730492405!2d-48.4590401265197!3d-1.4744396358575789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d95745f8181%3A0xaac0dc1e12dbaaa3!2sAudit%C3%B3rio%20do%20ICEN!5e0!3m2!1spt-BR!2sbr!4v1722610153475!5m2!1spt-BR!2sbr" 
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