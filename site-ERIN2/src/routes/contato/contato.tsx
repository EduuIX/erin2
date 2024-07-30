import './contato.css'
import { ContatoEmail } from "../../components/contatoEmail/contatoEmail";

const Contato = () => {
    return (
        <>
            <main className='contato'>
                <div className='contato-conteudo'>
                    <ContatoEmail />
                </div>
            </main>
        </>
    );
}

export { Contato }