import { ProgramacaoTabela } from '../../components/programacaoTabela/programacaoTabela';
import './programacao.css';

const Programacao = () => {
    return (
        <>
            <main className="programacao">
                <section className="programacao-container">
                    <h3>XVIII Escola Regional de Informática Norte 2 (ERIN 2)</h3>
                    <p>13, 14 e 15 de Agosto de 2025 - Macapá/AP</p>
                    <div className="programacao-conteudo">
                        <ProgramacaoTabela />
                    </div>
                </section>
            </main>
        </>
    );
}

export { Programacao }