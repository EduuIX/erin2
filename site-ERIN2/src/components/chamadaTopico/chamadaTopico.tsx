import './chamadaTopico.css';

const ChamadaTopico = () => {
    return (
        <>
            <div className="topico">
                <h2>Tópicos</h2>
                <p>Os autores estão convidados a submeter trabalhos de suas pesquisas
                    científicas ou tecnológicas na forma de artigo científico nos seguintes
                    tópicos abaixo sugeridos (mas não limitados a estes):
                </p>
                <ul>
                    <li>Qualidade de software</li>
                    <li>Aplicações da engenharia de software na indústria</li>
                    <li>Manutenção de software</li>
                    <li>Métodos, técnicas, métricas e ferramentas para engenharia de software</li>
                    <li>Computação aplicada à educação</li>
                    <li>Realidade virtual e aumentada</li>
                    <li>Simuladores e jogos educativos</li>
                    <li>Aplicações de monitoramento ambiental</li>
                    <li>Sistemas de informações geográficas</li>
                    <li>Sistemas embarcados</li>
                    <li>Sistemas inteligentes</li>
                    <li>Redes de computadores</li>
                    <li>Computação móvel</li>
                    <li>Sistemas multimídia</li>
                    <li>Jogos e entretenimento digitais</li>
                    <li>Computação verde, sustentabilidade e eficiência energética </li>
                    <li>Cultura digital & inclusão digital</li>
                </ul>
            </div>
        </>
    );
}

export { ChamadaTopico }