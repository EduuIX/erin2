import './inscricoes.css';
import { InscricoesErin } from '../../components/inscricoes/inscricoesErin2/inscricoesErin';
import { InstrucaoParaAutores } from '../../components/inscricoes/instrucaoParaAutores/instrucao';
import { FormasDePagamento } from '../../components/inscricoes/formasDePagamento/pagamento';
import { EmpenhoFaturamento } from '../../components/inscricoes/notaDeEmpenhoFaturamento/empenhoFaturamento';
import { PoliticaDeCancelamento } from '../../components/inscricoes/politicaDeCancelamento/cancelamento';
import { CategoriasEValores } from '../../components/inscricoes/categoriasEValores/categoriasEValores';

const Inscricoes = () => {
    return (
        <>
            <section className="inscricoes">
                <div className="inscricoes-conteudo">
                    <InscricoesErin />
                    <CategoriasEValores />
                    <InstrucaoParaAutores />
                    <FormasDePagamento />
                    <EmpenhoFaturamento />
                    <PoliticaDeCancelamento />
                </div>
            </section>
        </>
    );
}

export { Inscricoes }