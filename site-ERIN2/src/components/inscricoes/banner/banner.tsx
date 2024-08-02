import './banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className="titulo">
                    <h2>Inscreva-se pelo combo SBC</h2>
                </div>
                <div className='conteudo'>
                    <div className='bonus'>
                        <p>Inscrição no evento</p>
                    </div>
                    <div className='operador'><i className="fa-solid fa-plus"></i></div>
                    <div className='bonus'>
                        <p>Associação à SBC</p>
                    </div>
                    <div className='operador'><i className="fa-solid fa-equals"></i></div>
                    <div className='texto'>
                        <p>
                            Aproveite os benefícios de Associado e continue obtendo descontos nos
                            outros eventos da SBC
                        </p>
                    </div>
                </div>
                <Link to={"https://centraldesistemas.sbc.org.br/ecos/erin2_2024"} target='_blank'>
                    <div className="btn">
                        <p>Clique para aderir ao combo</p>
                    </div>
                </Link>
            </section>
        </>
    );
}

export { Banner };