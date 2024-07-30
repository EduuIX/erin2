import './programacaoTabela.css'

const ProgramacaoTabela = () => {
    return (
        <>
            <div className="logo">
                <img src="./src/assets/image/logo-erin.png" alt="" />
                    <div className="titulo">
                        <h2>ERIN 2 — 2024</h2>
                        <h3>Escola Regional de Informática Norte 2</h3>
                    </div>
            </div>

            <div className="tabela">
                <h3 className="title">Programação da XVII Escola Regional de Informática Norte (ERIN 2024)</h3>
                <table className="tabela-conteudo" border={1}>
                    <thead>
                        <tr className="cabecalho">
                            <th>Início</th>
                            <th>Fim</th>
                            <th>25/09</th>
                            <th>26/09</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8h30</td>
                            <td>9h</td>
                            <td><h3>Credenciamento</h3></td>
                            <td><h3>Credenciamento</h3></td>
                        </tr>
                        <tr>
                            <td>9h</td>
                            <td>10h</td>
                            <td>
                                <h3>Sessão Técnica 1</h3>
                                <p className="conteudo">Apresentação de Artigos Científicos</p></td>
                            <td>
                                <h3>Sessão Técnica 4</h3>
                                <p className="conteudo">Apresentação de Artigos Científicos</p>
                            </td>
                        </tr>
                        <tr className="coffe">
                            <td>10h</td>
                            <td>10h30</td>
                            <td>Coffee-break</td>
                            <td>Coffee-break</td>
                        </tr>
                        <tr>
                            <td>10h30</td>
                            <td>11h30</td>
                            <td>
                                <h3>Palestra 1</h3>
                                <p>À definir</p>
                                {/* <p className="conteudo">Computação nas Bordas em redes
                                    5G: A próxima fronteira entre
                                    Núvem e Aplicações</p>
                                <p className="professor">Dr. Augusto Neto, UFRN - Brasil</p> */}
                            </td>
                            <td>
                                <h3>Minicurso</h3>
                                <p className="conteudo">À definir</p>
                                {/* <p className="professor">Dra. Linnyer Beatrys Ruiz Aylon, UEM</p> */}
                            </td>
                        </tr>
                        <tr className="almoco">
                            <td>11h30</td>
                            <td>14h</td>
                            <td>Almoço</td>
                            <td>Almoço</td>
                        </tr>
                        <tr>
                            <td>14h</td>
                            <td>15h</td>
                            <td>
                                <h3>Palestra 2</h3>
                                <p>À definir</p>
                                {/* <p className="conteudo">Desafios e perspectivas do OpenRAN</p>
                                <p className="professor">Dr. Christian Esteve Rothenberg,
                                    UNICAMP - Brasil</p> */}
                            </td>
                            <td>
                                <h3>Palestra 3</h3>
                                <p>À definir</p>
                                {/* <p className="conteudo">Aprendizado Federado Desafios e
                                    Oportunidades
                                </p>
                                <p className="professor">Dr. Leandro Villas, UNICAMP - Brasil</p> */}
                            </td>
                        </tr>
                        <tr>
                            <td>15h</td>
                            <td>16h</td>
                            <td>
                                <h3>Sessão Técnica 2</h3>
                                <p className="conteudo">Apresentação de Artigos Científicos</p></td>
                            <td>
                                <h3>Sessão Técnica 5</h3>
                                <p className="conteudo">Apresentação de Artigos Científicos</p>
                            </td>
                        </tr>
                        <tr className="coffe">
                            <td>16h</td>
                            <td>16h30</td>
                            <td>Coffee-break</td>
                            <td>Coffee-break</td>
                        </tr>
                        <tr>
                            <td>16h30</td>
                            <td>18h</td>
                            <td>
                                <h3>Sessão Técnica 3</h3>
                                <p className="conteudo">Apresentação de artigos científicos</p></td>
                            <td>
                                <h3>Painel</h3>
                                <p>À definir</p>
                                {/* <p className="conteudo">Empreendedorismo na Amazônia</p>
                                <p className="mediador">Mediador: Adailton Lima, UFPA</p>
                                <p className="convidado">Convidado 1: Linnyer Beatrys RuizAylon, UEM</p>
                                <p className="convidado">Convidado 2: Antônio Loureiro, UFMG</p>
                                <p className="convidado">Convidado 3: Leandro Villas, UNICAMP</p> */}
                            </td>
                        </tr>
                        <tr>
                            <td>18h</td>
                            <td>18h30</td>
                            <td><h3>Cerimônia de Abertura</h3></td>
                            <td><h3>Cerimônia de Encerramento</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export { ProgramacaoTabela }