import './main.css';
import image from '/image/Imagem1.png'

const Main = () => {
    return (
        <>
            <section>
                <div className="main" id="main">
                    <img src={image} alt="" />
                    <div className="info">
                        <p>Atualmente, a ERIN é um dos principais eventos na área das TICs no Norte do Brasil. Em 2024,
                            a Universidade Federal do Pará organizará a <strong className="destaque">XVII Escola Regional de Informática Norte 2</strong>, com o foco em
                            discutir e aproximar as principais iniciativas de Inovação e Soluções em TIC voltadas para o
                            <strong className="destaque"> desenvolvimento da Região Amazônica</strong>, a partir de instituições de ensino, pesquisa, empresas, de
                            instituições governamentais e não governamentais e da sociedade civil em geral.
                        </p>
                        <p>A XVII ERIN será um ambiente oportuno para compartilhar conhecimento e experiências de
                            profissionais, pesquisadores e acadêmicos das áreas de TIC, em busca de <strong className="destaque">inovações tecnológicas</strong> e
                            <strong className="destaque"> soluções sustentáveis</strong> para <strong className="destaque">sociedade</strong> e <strong className="destaque">meio ambiente</strong>, visando o desenvolvimento e o progresso da
                            região Norte.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Main }