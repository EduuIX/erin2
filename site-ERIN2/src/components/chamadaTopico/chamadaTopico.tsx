import './chamadaTopico.css';

const ChamadaTopico = () => {
    return (
        <>
            <div className="topico">
                <h2>Tópicos</h2>
                <p>
                    A chamada é aberta para contribuições de pesquisadores, professores,
                    estudantes de graduação e pós-graduação, profissionais da área de
                    tecnologia, educação, governo e indústria. Serão aceitos trabalhos nas seguintes
                    áreas (não exclusivas):
                </p>
                <ul>
                    <li>Redes de Computadores</li>
                    <li>Engenharia de Software</li>
                    <li>Banco de Dados</li>
                    <li>Computação Aplicada à Educação</li>
                    <li>Processamento de Imagens e Sinais</li>
                    <li>Sistemas Embarcados e Hardware</li>
                    <li>Telecomunicações</li>
                    <li>Inteligência Artificial e Ciência de Dados</li>
                    <li>Inclusão Digital e Tecnologias Sociais</li>
                    <li>Extensão Tecnológica e Inovação para o Desenvolvimento Sustentável</li>
                </ul>
            </div>
        </>
    );
}

export { ChamadaTopico }