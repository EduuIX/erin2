import './contatoEmail.css';
import { Link } from 'react-router-dom';

const ContatoEmail = () => {
    return (
        <>
            <section className='conteudo'>
                <h2>Entre em contato</h2>
                <p>
                    Se você tiver alguma <strong className='destaque'>dúvida</strong>,
                    <strong className="destaque"> comentário</strong> ou deseja <strong className="destaque">mais informações</strong> sobre a
                    XVII Escola Regional de Informática Norte 2, por favor, não hesite em nos contatar.
                </p>
                <p className='email'>Email: iagomedeiros@ufpa.br</p>
                <Link className='link-email' to={"mailto:iagomedeiros@ufpa.br"}> <div className="btn">Envie-nos um E-mail</div> </Link>
            </section>
        </>
    )

}

export { ContatoEmail };
