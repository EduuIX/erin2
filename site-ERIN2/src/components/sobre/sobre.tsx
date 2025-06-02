import './sobre.css'

const Sobre = () => {
    return (
        <>
            <section className="sobre">
                <h2>Sobre o Evento</h2>
                <p>
                    A <span className='destaque'>Escola Regional de Informática Norte 2 (ERIN2)</span> é um dos eventos mais
                    tradicionais e relevantes na área de <span className='destaque'>Tecnologias da Informação e Comunicação
                    (TIC)</span> da Região Norte do Brasil. Criada em <span className='destaque'>1998</span>, a ERIN2 consolidou-se como um
                    espaço estratégico para o debate, a formação e a disseminação de conhecimentos
                    científicos e tecnológicos voltados ao desenvolvimento amazônico.
                </p>
                <p>
                    Ao longo de sua trajetória, o evento já reuniu centenas de participantes em diversas
                    edições realizadas em cidades-polo como <span className='destaque'>Belém</span>, <span className='destaque'>Marabá</span>, <span className='destaque'>Santarém</span> e <span className='destaque'>Castanhal</span>,
                    atraindo <span className='destaque'>em média 350 participantes</span>, entre estudantes, pesquisadores,
                    professores, profissionais da indústria e representantes do poder público.
                </p>
                <p>
                    Entre os marcos históricos da ERIN2, destacam-se:
                </p>
                <span className="list">
                    <ul>
                        <li><span className='destaque'>2009</span>, quando o evento foi sediado no <span className='destaque'>Hangar – Centro de Convenções da Amazônia</span>, com a presença de renomados palestrantes nacionais;</li>
                        <li><span className='destaque'>2013</span>, sob organização do Centro Universitário do Pará (CESUPA), que reuniu mais de 350 participantes em palestras, painéis e minicursos com temas inovadores em TIC;</li>
                        <li><span className='destaque'>2017</span>, edição realizada no <span className='destaque'>Campus Guamá da UFPA</span>, promovida em conjunto com a 
                        <span className='destaque'>Sociedade Brasileira de Computação (SBC)</span>, com foco na aproximação entre iniciativas de inovação tecnológica e desenvolvimento regional.</li>
                    </ul>
                </span>
                <p>
                    Nas edições mais recentes, a ERIN2 ampliou sua projeção, promovendo cursos,
                    tutoriais e painéis com <span className='destaque'>pesquisadores de destaque do Brasil e de Portugal</span>, como
                    da <span className='destaque'>Universidade de Coimbra</span>. Em <span className='destaque'>2024</span>, a <span className='destaque'>XVII ERIN2</span> foi organizada pela
                    <span className='destaque'>Universidade Federal do Pará (UFPA)</span> nos dias 25 e 26 de setembro, mantendo o
                    compromisso de fomentar o intercâmbio de saberes e soluções sustentáveis para os
                    desafios amazônicos.
                </p>
                <p>
                Agora, em <span className='destaque'>2025</span>, a <span className='destaque'>XVIII edição da ERIN2</span> será realizada em <span className='destaque'>Macapá-AP</span>, sob a
                coordenação do <span className='destaque'>Instituto Federal do Amapá (IFAP)</span>, <span className='destaque'>Universidade Federal do 
                Ampá (Unifap)</span> e <span className='destaque'>Universidade Federal do Pará (UFPA)</span>, reafirmando seu papel
                como catalisador de conexões entre ciência, tecnologia, educação e transformação
                social.
                </p>
            </section>
        </>
    )
}

export { Sobre }