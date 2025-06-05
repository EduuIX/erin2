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
                                        <li>Thiêgo Nunes, IFAP</li>
                                        <li>Iago Medeiros, UFPA</li>
                                        <li>Rafael Pontes, Unifap</li>
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
                                    </ul>
                                </div>
                                <div className="conteudo">
                                    <h3>Coordenação do Comitê de Programa</h3>
                                    <ul>
                                        <li>Anderson Brasil, IFAP</li>
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