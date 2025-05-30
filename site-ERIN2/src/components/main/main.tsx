import './main.css';
import image from '/image/Imagem1.png'

const Main = () => {
    return (
        <>
            <section>
                <div className="main" id="main">
                    <div className="main-container">
                        <img src={image} alt="" />
                        <div className="info">
                            <p>
                                A <strong className='destaque'>XVIII Escola Regional de Informática Norte 2 (ERIN2)</strong> consolida-se como um
                                dos principais eventos em Tecnologias da Informação e Comunicação (TIC) na
                                região Norte do Brasil. Em 2025, o evento será sediado em <strong className='destaque'>Macapá-AP</strong>, sob a
                                coordenação do <strong className='destaque'>Instituto Federal do Amapá (IFAP)</strong>, <strong className='destaque'>Universidade Federal do
                                Ampá (Unifap)</strong> e <strong className='destaque'>Universidade Federal do Pará (UFPA)</strong>, reunindo pesquisadores,
                                profissionais, estudantes, representantes do setor produtivo, do governo e da
                                sociedade civil.
                            </p>
                            <p>
                                Com o tema voltado à <strong className='destaque'>inovação tecnológica</strong>, <strong className='destaque'>inclusão digital</strong> e <strong className='destaque'>sustentabilidade</strong>
                                na Amazônia, a ERIN2 será um espaço estratégico para o compartilhamento de
                                experiências e o fortalecimento de redes colaborativas. A programação incluirá
                                palestras, painéis, oficinas, sessões técnicas e mostras de projetos que abordam
                                soluções em TIC aplicadas ao desenvolvimento regional.
                            </p>
                            <p>
                                O evento busca promover a integração entre ensino, pesquisa, mercado e políticas
                                públicas, contribuindo para o avanço científico e social da região amazônica por
                                meio da ciência da computação, inteligência artificial, dados, redes e outras áreas
                                emergentes da computação.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Main }