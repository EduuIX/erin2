import { Link } from 'react-router-dom';
import './chamadaDeTrabalho.css';

const ChamadaDeTrabalho = () => {
    return (
        <section className="trabalho">
            <h2>Chamada de Trabalho</h2>
            <p>
                Iniciada em 1998, a Escola Regional de Informática Norte 2 (ERIN2)
                é um celeiro para a discussão de ferramentas TICs e a aplicação destas
                para a promoção regional. A ERIN2 é um dos principais eventos na área
                das TICs no Norte do Brasil. Em 2024, Universidade Federal do Pará
                organizará a XVII ERIN2, com o foco em discutir e aproximar as principais
                iniciativas de Inovação e Soluções em TIC voltadas para o desenvolvimento
                da região amazônica, a partir de instituições de ensino, pesquisa, empresas,
                de instituições governamentais e não governamentais, e da sociedade civil em
                geral.
                A XVII ERIN será um ambiente oportuno para compartilhar conhecimento e
                experiências de profissionais, pesquisadores e acadêmicos das áreas de TIC,
                em busca de inovações tecnológicas e soluções sustentáveis para sociedade e
                meio ambiente, visando o desenvolvimento e o progresso da região norte. A
                apresentação dos artigos irá proporcionar uma excelente oportunidade para
                expor os trabalhos de alunos de graduação. Os artigos aceitos serão
                publicados nos anais do evento, que serão disponibilizados online na SBC
                OpenLib (SOL) – <Link className="link" to="https://sol.sbc.org.br/index.php/indice"
                    target="_blank">https://sol.sbc.org.br/index.php/indice</Link> – o portal de conteúdo
                da SBC. Todos os artigos serão indexados com DOI.
            </p>
        </section>
    );
}

export { ChamadaDeTrabalho }