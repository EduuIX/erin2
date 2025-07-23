import './style.css'
import icon_Carlos from '../../../assets/palestrantes/Carlos/Carlos.svg'


const Webnars = () => {
    return (
        <>
            <section className="webnars">
                <div className="webnar">
                    <img src={icon_Carlos} alt="" />
                    <div className="content">
                        <div className="icon">
                            <img src={icon_Carlos} alt="" />
                            <div className="info-prof">
                                <h3>Prof. Dr. Carlos Ramos</h3>
                                <p>Universidade do Porto</p>
                            </div>
                        </div>
                        <h2>Inteligência Artificial</h2>
                        <div className="resumo">
                            <p>
                                O professor fará um webinar centrado em inteligência artificial no século XXI, destacando seu impacto comparável a uma nova 
                                “matriz energética”. A palestra examinará como a IA vem integrada ao cotidiano — de smartphones a sistemas sofisticados — e como a 
                                aprendizagem automática e o deep learning impulsionam avanços em visão computacional, processamento de linguagem natural e tomadas 
                                de decisão autônoma. Ele abordará também a promessa da IA como ferramenta poderosa para resolver desafios sociais e ambientais 
                                globais, enfatizando a necessidade de direcionar parte dos ganhos dessas tecnologias para o bem coletivo .
                            </p>
                            <p>
                                O professor aprofundará a discussão sobre Explainable AI (XAI), destacando a evolução da IA de “caixas‑pretas” para modelos que podem 
                                explicar suas decisões. Essa transição é apresentada como crucial para permitir transparência, confiança e responsabilidade 
                                institucional, especialmente em cenários com mudanças drásticas. O webinar trará uma análise técnica e ética do crescente papel da IA 
                                no século XXI, focando em seus aspectos cognitivos e interpretáveis.
                            </p>
                        </div>
                        <div className="biografia">
                            <p>
                                <span>Biografia</span>:
                                Carlos Fernando da Silva Ramos, coordenador principal do Departamento de Engenharia Informática do Instituto Politécnico do 
                                Porto (IPP), em Portugal. Carlos Ramos tem graduação (1986), Doutorado (1993) e título de Habilitação (Agregação em 2001) em 
                                Engenharia Eletrotécnica e de Computadores, da Universidade do Porto (UP). Foi Professor Auxiliar na UP 1986-1995 e Professor 
                                Coordenador no Instituto de Engenharia do Politécnico do Porto (ISEP/IPP) de 1993 a 2018, altura em que assumiu o cargo de Professor 
                                Catedrático. De 2010 a 2018 foi Vice-Presidente do IPP, sendo responsável pelas áreas de P&D, Inovação e Internacionalização. Desde 
                                2022 é Pró-Presidente para a Cooperação e Relações Internacionais do IPP. Assume a coordenação do IPP e a participação no Conselho 
                                Executivo da Universidade Europeia (ATHENA). Carlos Ramos é membro do Conselho de Avaliação Externa da Agência Portuguesa de Avaliação 
                                e Acreditação dos Ciclos de Estudos do Ensino Superior, para a área de Engenharia da Computação. É Diretor do Mestrado em Engenharia 
                                de IA e Diretor do novo Programa de Doutoramento em IA e Engenharia de Sistemas Inteligentes do ISEP/IPP (o primeiro exclusivo para 
                                IA em Portugal). Suas pesquisas centram-se em IA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export { Webnars };