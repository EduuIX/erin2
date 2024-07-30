import './comite.css'

const Comite = () => {
    return (
        <>
            <section>
                <div className="comite">
                    <div className="evento-conteudo">
                        <h2>Comitê</h2>
                        <div className="section-comite">
                            <div className="comite-conteudo">
                                <div className="conteudo">
                                    <h3>Coordenação Geral</h3>
                                    <ul>
                                        <li>Denis Rosário, UFPA</li>
                                        <li>Iago Medeiros, UFPA</li>
                                    </ul>
                                </div>
                                <div className="conteudo">
                                    <h3>Comissão Organizadora</h3>
                                    <ul>
                                        <li>Lucas Bastos, UFPA</li>
                                        <li>Lucas Pacheco, UFPA</li>
                                        <li>Rafael Veiga, UFPA</li>
                                        <li>Matheus Brito, UFPA</li>
                                        <li>Eduardo Ribeiro, UFPA</li>
                                        <li>Livia Hipólito, UFPA</li>
                                    </ul>
                                </div>
                                <div className="conteudo">
                                    <h3>Coordenação do Comitê de Programa</h3>
                                    <ul>
                                        <li>Eduardo Cerqueira, UFPA</li>
                                        <li>Hugo Santos, UFRA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Comite }