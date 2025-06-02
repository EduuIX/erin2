import './publicoAlvo.css'

const PublicoAlvo = () => {
    return (
        <>
            <section>
                <div className="alvo">
                    <h2>Público Alvo</h2>
                    <p>
                        A <strong className="destaque">XVIII Escola Regional de Informática Norte 2 (ERIN2)</strong> é direcionada,
                        prioritariamente, a <strong className="destaque">professores</strong>, <strong className="destaque">pesquisadores</strong>, <strong className="destaque">estudantes técnicos</strong>, <strong className="destaque">graduação </strong>
                        e <strong className="destaque">pós-graduação</strong> das áreas de <strong className="destaque">Tecnologia da Informação e Comunicação (TIC)</strong>,
                        além de <strong className="destaque">profissionais</strong>, <strong className="destaque">empreendedores</strong> e <strong className="destaque">empresas do setor tecnológico</strong>.
                        O evento também é aberto à participação de gestores públicos, representantes de
                        startups, ONGs e instituições que atuam com <strong className="destaque">inovação</strong>, <strong className="destaque">educação</strong>, <strong className="destaque">inclusão
                        digital</strong> e <strong className="destaque">desenvolvimento regional</strong>.
                    </p>
                    <p>
                        A programação da ERIN2 contempla trabalhos científicos e de extensão nas áreas de:
                    </p>
                    <div className="prog">
                        <ul>
                            <li>Redes de Computadores</li>
                            <li>Engenharia de Software</li>
                            <li>Banco de Dados</li>
                            <li>Processamento de Imagens e Sinais</li>
                        </ul>
                        <ul>
                            <li>Hardware e Sistemas Embarcados</li>
                            <li>Telecomunicações</li>
                            <li>Educação a Distância e Tecnologias Educacionais</li>
                            <li>Inteligência Artificial e Inclusão Digital</li>
                        </ul>
                    </div>
                    <p>
                        Com essa abordagem, a ERIN2 promove a integração entre a
                        comunidade acadêmica, o setor produtivo e a sociedade,
                        fortalecendo o ecossistema de inovação na Região Amazônica.
                    </p>
                </div>
            </section>

        </>
    );
}

export { PublicoAlvo }