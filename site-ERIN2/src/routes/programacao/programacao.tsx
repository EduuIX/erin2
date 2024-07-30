import { ProgramacaoTabela } from '../../components/programacaoTabela/programacaoTabela';
import './programacao.css';

const Programacao = () => {
    return (
        <>
            <main className="programacao">
                <section className="programacao-conteudo">
                    <ProgramacaoTabela />
                </section>
            </main>
        </>
    );
}

export { Programacao }