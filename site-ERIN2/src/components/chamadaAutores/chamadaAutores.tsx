import { Link } from 'react-router-dom';
import './chamadaAutores.css';

const ChamadaAutores = () => {
    return (
        <>
            <div className="autores">
                <h2>Instruções para Autores </h2>
                <p>
                    Os trabalhos devem ser escritos em português ou inglês, com formatação da
                    Sociedade Brasileira de Computação, disponível em <Link className="link"
                        to="http://tinyurl.com/sbc-template-artigos"
                        target="_blank">template</Link> respeitando o
                    limite máximo de seis (6) páginas (apresentação oral). Serão observados os
                    critérios de originalidade, relevância, apresentação e qualidade técnica no
                    julgamento dos trabalhos.
                </p>
            </div>
        </>
    );
}

export { ChamadaAutores }