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
                            <p>Rua Igarapé Tucunduba – Bairro Guamá</p>
                            <p>CEP 66075-123, Belém – Pará – Amazônia – Brasil</p>
                            <h4>E-mail:</h4>
                            <p> <Link className='link' to={"mailto:iagomedeiros@ufpa.br"}>iagomedeiros@ufpa.br</Link></p>
                        </div>
                        <div className="map">
                            <iframe 
                                src=
                                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127673.98492052277!2d-51.17739017148825!3d0.1017515137267907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e5e06b4b1a37%3A0x56357df330df0f97!2zTWFjYXDDoSwgQVA!5e0!3m2!1spt-BR!2sbr!4v1748876623990!5m2!1spt-BR!2sbr"
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