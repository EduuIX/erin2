import { Link } from 'react-router-dom';
import './chamadaDeTrabalho.css';

const ChamadaDeTrabalho = () => {
    return (
        <section className="trabalho">
            <h2>Chamada de Trabalho</h2>
            <p>
                A <span className='destaque'>Escola Regional de Informática Norte 2 (ERIN2)</span>, criada em <span className='destaque'>1998</span>, é
                reconhecida como um espaço dinâmico de discussão, divulgação científica e 
                construção de soluções em <span className='destaque'>Tecnologias da Informação e Comunicação (TIC)</span> 
                voltadas ao desenvolvimento da <span className='destaque'>Região Amazônica</span>.
            </p>
            <p>
                Em sua <span className='destaque'>XVIII edição</span>, a ERIN2 será realizada de <span className='destaque'>13 a 15 de agosto de 2025</span>, na
                cidade de <span className='destaque'>Macapá-AP</span>. O evento convida autores a submeterem <span className='destaque'>trabalhos
                científicos, relatos de experiência, artigos de iniciação científica e extensão
                tecnológica</span> que dialoguem com os desafios regionais e proponham <span className='destaque'>inovações
                sustentáveis em TIC</span>.
            </p>
            <p>
                A apresentação dos artigos irá proporcionar uma excelente oportunidade para
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