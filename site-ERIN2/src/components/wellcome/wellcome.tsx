import { Link } from 'react-router-dom';
import './wellcome.css'
import imageNotebook from '/image/NotebookIlus.png'

const Wellcome = () => {
    return (
        <>
            <section>
                <div className="home" id="home">
                    <img src={imageNotebook} alt="" />
                    <div className="home-conteudo">
                        <p>Bem vindo à XVII edição da escola regional de informática norte 2 da sociedade brasileira de computação</p>
                        <Link to="/evento" className="btn">Conheça</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Wellcome }