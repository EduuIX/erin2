import { ComiteOrgnizacao } from '../../comite-organizacao';
import './cancelamento.css'

const PoliticaDeCancelamento = () => {
    return (
        <>
            <section className="cancelamento">
                <h2>Política de Cancelamento</h2>
                <p>Até o dia 08/08/2025 pode-se fazer a devolução de 70% do valor pago pela
                    inscrição na XVIII Escola Regional de Informática Norte (ERIN 2025), sendo
                    que os 30% restantes cobrirão os custos administrativos da inscrição. Após
                    esta data não haverá devolução de qualquer valor pago. A política se aplica
                    tanto para o cancelamento da inscrição, quanto para o cancelamento de qualquer
                    outra atividade ou custo adicional. Para solicitar o cancelamento, enviar um
                    e-mail para <span className='link'>faturamento@sbc.org.br</span>.</p>
            </section>
            <ComiteOrgnizacao />
            {/* <div className="org">
                <div className="comite-conteudo">
                    <div className="conteudo">
                        <h3>Coordenação Geral</h3>
                        <ul>
                            <li>Thiêgo Nunes, IFAP</li>
                            <li>Iago Medeiros, UFPA</li>
                            <li>Rafael Pontes, Unifap</li>
                        </ul>
                    </div>
                    <div className="conteudo">
                        <h3>Coordenação do Comitê de Programa</h3>
                        <ul>
                            <li>Anderson Brasil, IFAP</li>
                        </ul>
                    </div>
                    <div className="conteudo">
                        <h3>Comitê de Programa</h3>
                        <ul>
                            <li>Em formação</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export { PoliticaDeCancelamento }