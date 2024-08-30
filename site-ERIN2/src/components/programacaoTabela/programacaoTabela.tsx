import './programacaoTabela.css'

const ProgramacaoTabela = () => {
    return (
        <>
            <div className="tabela">
                <h3 className="title">Programação da XVII Escola Regional de Informática Norte (ERIN 2024)</h3>
                <table className="tabela-conteudo" border={1}>
                    <thead>
                        <tr className="cabecalho">
                            <th className='c1'>Início</th>
                            <th className='c1'>Fim</th>
                            <th className='c2'>26/09</th>
                            <th className='c2'>27/09</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8h30</td>
                            <td>9h</td>
                            <td><h3>Credenciamento</h3></td>
                            <td><h3>Credenciamento</h3></td>
                        </tr>
                        <tr>
                            <td>9h</td>
                            <td>10h</td>
                            <td>
                                <p className='conteudo'>Inovação e Sustentabilidade: Casos de sucesso com empresa e sociedade</p>
                                <ul className="conteudo">
                                    <li>Segurança</li>
                                    <li>Manna Amazônia</li>
                                </ul>
                            </td>
                            <td>
                                <h3>Sessão Técnica 3</h3>
                                <p className="conteudo">Apresentação de Artigos Científicos</p>
                            </td>
                        </tr>
                        <tr className="coffe">
                            <td>10h</td>
                            <td>10h30</td>
                            <td>Coffee-break</td>
                            <td>Coffee-break</td>
                        </tr>
                        <tr>
                            <td>10h30</td>
                            <td>11h30</td>
                            <td>
                                <h3>Palestra 1</h3>
                                <p>Alocação de Recursos no Contínuo de Computação</p>
                                <p className="prof">Dr. Luiz Fernando Bittencourt, UNICAMP</p>
                            </td>
                            <td>
                                <h3>Palestra 3</h3>
                                <p className="conteudo">Cibersegurança na Era da Inteligência Artificial: Combate ao Cibercrime em um Mundo de Ameaças Emergentes</p>
                                <p className="prof">Prof. Dr. Allan Costa, UFRA</p>
                            </td>
                        </tr>
                        <tr className="almoco">
                            <td>11h30</td>
                            <td>14h</td>
                            <td>Almoço</td>
                            <td>Almoço</td>
                        </tr>
                        <tr>
                            <td>14h</td>
                            <td>15h</td>
                            <td>
                                <h3>Sessão Técnica 1</h3>
                                <p className='conteudo'>Apresentação de Artigos Científicos</p>
                            </td>
                            <div className='mini'>
                                <h3>Minicurso</h3>
                                <p className='conteudo'>Introdução ao Aprendizado Federado: Teoria e Prática</p>
                                <p className="prof"></p>
                            </div>
                        </tr>
                        <tr>
                            <td>15h</td>
                            <td>16h</td>
                            <td>
                                <h3>Palestra 2</h3>
                                <p>Sustentabilidade e Mobilidade. É possível darem as mãos?</p>
                                <p className="prof">Prof. Dr. Antonio Alfredo Ferreira Loureiro, UFMG</p>
                            </td>
                            <div className='mini'>
                                <p className="prof"></p>
                                <p className='prof'>Dr. Joahannes Bruno Dias da Costa, UNICAMP</p>
                                <ul className="prof">
                                    <li>Local: labcomp 3</li>
                                    <li>Capacidade: 30 pessoas</li>
                                </ul>
                            </div>
                        </tr>
                        <tr className="coffe">
                            <td>16h</td>
                            <td>16h30</td>
                            <td>Coffee-break</td>
                            <td>Coffee-break</td>
                        </tr>
                        <tr>
                            <td>16h30</td>
                            <td>18h</td>
                            <td>
                                <h3>Sessão Técnica 2</h3>
                                <p className="conteudo">Apresentação de artigos científicos</p></td>
                            <td>
                                <h3>Painel</h3>
                                <p>Crimes Virtuais: Estratégias para Combater Fraudes, Fake News, Crimes de Injuria, Difamação, Calunia e Pedofilia no Ambiente Digital</p>
                                {/* <ul className='prof'>
                                        <li>Moderador: Dr. Allan Costa</li>
                                        <li>Convidado: Inacio Gorayeb</li>
                                        <li>Convidada: Delegada Vanessa Lee</li>
                                </ul> */}
                                <p className='prof'></p>
                                <p className="prof">Moderador: Dr. Allan Costa</p>
                                <p className="prof">Convidado: Inacio Gorayeb</p>
                                <p className="prof">Convidado: Delegada Vanessa Lee</p>
                            </td>
                        </tr>
                        <tr>
                            <td>18h</td>
                            <td>18h30</td>
                            <td><h3>Cerimônia de Abertura</h3></td>
                            <td><h3>Cerimônia de Encerramento</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <section className="descricao">
                <div className="descricao-content">
                    <div className="content back">
                        <h2 className='titulo'> <span>Título: </span>Crimes Virtuais: Estratégias para Combater Fraudes, Fake News, Crimes de Injuria, Difamação, Calunia e Pedofilia no Ambiente Digital</h2>
                        <h4><strong>Data: 27/09</strong></h4>
                        <h4><strong>Hora: 16h30 às 18h</strong></h4>
                        <div className='desc'>
                            <p>
                                <strong>Resumo: </strong>Este painel abordará os desafios crescentes no combate aos crimes virtuais, focando em fraudes, 
                                disseminação de fake news, crimes contra a honra e pedofilia. Especialistas discutirão as mais 
                                recentes técnicas e tecnologias para identificar e mitigar essas ameaças no ambiente digital. 
                                O painel também explorará a importância da colaboração entre as forças de segurança, empresas de 
                                tecnologia, e a sociedade civil na criação de estratégias eficazes para proteger indivíduos e 
                                garantir um ambiente online mais seguro. Serão debatidos os desafios legais, éticos e técnicos 
                                envolvidos, bem como as melhores práticas e ferramentas para a prevenção e resposta a esses crimes.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className='titulo'> <span>Título: </span>Alocação de Recursos no Contínuo de Computação</h2>
                        <h4><strong>Data: 26/09</strong></h4>
                        <h4><strong>Hora: 10h30 às 11h30</strong></h4>
                        <div className='desc'>
                            <p>
                                <strong>Resumo: </strong>Com a extensão da nuvem para a névoa e borda, serviços computacionais podem ser espalhados por um 
                                conjunto de recursos computacionais que incluem dispositivos de usuários, a nuvem e uma 
                                infraestrutura computacional intermediária. Ainda, o aumento da capacidade de rede promete 
                                redução de atrasos em transferências de dados, habilitando um contínuo de capacidade computacional 
                                que pode ser usado para processar grandes quantidades de dados com tempos de resposta reduzidos. 
                                Grandes quantidades de dados são muitas vezes processadas usando técnicas de aprendizado de máquina, 
                                procurando extrair conhecimento de dados brutos gerados e consumidos por um conjunto de aplicações 
                                altamente heterogêneas. Aprendizado de máquina distribuído tem evoluído como uma ferramenta para 
                                executar tarefas de aprendizado também na borda da rede, muitas vezes imediatamente após a obtenção 
                                do dado ao invés de transferi-lo para um sistema centralizado de nuvem para posterior agregação e 
                                processamento. Nós visualizamos a construção de um contínuo de computação inteligente, onde modelos 
                                de aprendizado de máquina distribuídos podem executar em qualquer dispositivo, da borda até a nuvem, 
                                de forma transparente, criando um sistema de computação distribuído que é capaz de atender uma ampla 
                                gama de aplicações com requisitos heterogêneos e construir conhecimento à partir de dado gerado por 
                                essas aplicações. Nesta palestra, apresentarei uma visão geral da alocação de recursos em um 
                                Contínuo de Computação.
                            </p>
                            <p className='palestrante'>
                                <span>Palestrante: </span><span className='name'>Luis Bittencourt</span> é prof do Instituto de Computação da Universidade 
                                Estadual de Campinas (UNICAMP). Possui graduação em Bacharelado em Ciência da Computação pela 
                                Universidade Federal do Paraná (2003), Mestrado em Ciência da Computação pela Universidade Estadual 
                                de Campinas (2006) e Doutorado em Ciência da Computação pela Universidade Estadual de Campinas (2010). 
                                Realizou doutorado sanduíche e estágio de pesquisa na Universidade de Manchester, Reino Unido. 
                                Realizou pós-doutorado na Universidade Estadual de Campinas (2010 a 2012) e na Rutgers University 
                                (2016-2017). Tem experiência na área de Ciência da Computação, com ênfase em Sistemas Distribuídos, 
                                atuando principalmente no escalonamento e alocação de recursos em computação em grade, computação em 
                                nuvem e névoa, redes definidas por software e redes virtualizadas.
                            </p>
                        </div>
                    </div>
                    <div className="content back">
                        <h2 className='titulo'> <span>Título: </span>Sustentabilidade e Mobilidade. É possível darem as mãos?</h2>
                        <h4><strong>Data: 26/09</strong></h4>
                        <h4><strong>Hora: 15h às 16h</strong></h4>
                        <div className='desc'>
                            
                            <p>
                            </p>
                            <p className='palestrante'>
                                <span>Palestrante: </span><span className='name'>Antonio Loureiro </span> 
                                possui graduação em Ciência da Computação pela Universidade Federal de Minas Gerais (1983), 
                                mestrado em Ciência da Computação pela Universidade Federal de Minas Gerais (1987) e doutorado 
                                em Ciência da Computação pela University of British Columbia, Canadá (1995). Atualmente é 
                                Prof Titular do Departamento de Ciência da Computação da Universidade Federal de Minas 
                                Gerais. Tem experiência na área de Ciência da Computação, com ênfase em sistemas distribuídos, 
                                atuando principalmente nos seguintes temas: algoritmos distribuídos, computação móvel/ubíqua, 
                                comunicação sem fio, gerenciamento de redes, redes de computadores, redes de sensores sem fio. 

                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className='titulo'> <span>Título: </span>Cibersegurança na Era da Inteligência Artificial: Combate ao Cibercrime em um Mundo de Ameaças Emergentes</h2>
                        <h4><strong>Data: 27/09</strong></h4>
                        <h4><strong>Hora: 10h30 às 11h30</strong></h4>
                        <div className='desc'>
                            
                            <p>
                                <strong>Resumo: </strong>Nesta palestra, você explora como a inteligência artificial (IA) está moldando o campo da 
                                cibersegurança e, ao mesmo tempo, sendo usada por criminosos para sofisticar ataques. O tema 
                                abordará os desafios modernos enfrentados pelas organizações na proteção de seus ativos digitais, 
                                destacando as novas formas de cibercrime que estão emergindo, como ataques de ransomware com IA, 
                                deep fakes, e fraudes automatizadas. Também serão discutidas estratégias avançadas de defesa que 
                                utilizam a IA, a automação e a análise de grandes volumes de dados para antecipar e mitigar 
                                ameaças. A palestra finaliza com um panorama sobre a evolução do cibercrime e como a comunidade 
                                de segurança cibernética pode se preparar para os desafios futuros.
                            </p>
                            <p className='palestrante'>
                                <span>Palestrante: </span><span className='name'>Allan Costa </span> 
                                em Pós Doc em Segurança Cibernética, Doutor e Mestre em Ciência da Computação, Prof da 
                                Universidade Federal Rural da Amazônia (UFRA) e detentor de uma vasta gama de certificações 
                                internacionais, incluindo CCISO, CISM, CRISC, CISA, CEH, CHFI, CCSE, CASP+, CySA+, PMO e CNSS 
                                que validam sua sólida experiência no universo da cibersegurança. Com mais de duas décadas de 
                                experiência, sua trajetória profissional abrange diversos aspectos desse contexto, atuando como 
                                Prof Universitário, Auditor, Consultor e Perito ad hoc de Cybersecurity. Além disso, exerce 
                                o papel de vCISO e vDPO em órgãos do Governo Federal. Sua ampla visão do mercado é complementada 
                                por uma orientação incisiva para metas e resultados, refletindo-se em sua habilidade de 
                                transitar habilmente entre funções técnicas, estratégicas e de gestão. Destaca-se especialmente 
                                por sua atuação em níveis executivos (C-Level) no ambiente corporativo. 

                            </p>
                        </div>
                    </div>
                    <div className="content back">
                        <h2 className='titulo'> <span>Título: </span>Introdução ao Aprendizado Federado: Teoria e Prática</h2>
                        <h4><strong>Data: 27/09</strong></h4>
                        <h4><strong>Hora: 14h às 16h</strong></h4>
                        <div className='desc'>
                            
                            <p>
                                <strong>Resumo: </strong>Aprendizado Federado, ou Federated Learning (FL) em inglês, é uma técnica de aprendizado de 
                                máquina que permite treinar modelos diretamente nos dispositivos locais, como smartphones ou 
                                computadores, em vez de centralizar os dados em um único servidor. Isso preserva a privacidade 
                                dos usuários, pois os dados sensíveis nunca deixam os dispositivos, e reduz a necessidade de 
                                grandes transferências de dados. Os modelos treinados localmente são então agregados em um 
                                modelo global, combinando os conhecimentos de cada dispositivo sem compartilhar os dados 
                                originais. Essa abordagem é especialmente útil em cenários onde a privacidade e a eficiência são 
                                cruciais. Assim, este minicurso oferece uma introdução abrangente, abordando tanto os aspectos 
                                teóricos quanto práticos do FL.
                            </p>
                            <p className='palestrante'>
                                <span>Palestrante: </span><span className='name'>Joahannes da Costa </span> 
                                fez bacharelado em Sistemas de Informação e Mestrado em Ciência da Computação, ambos pela 
                                Universidade Federal do Pará. Concluiu o Doutorado em Ciência da Computação na Universidade 
                                Estadual de Campinas (UNICAMP) em 2023, com período de doutorado-sanduíche na Universidade 
                                Técnica de Dresden, na Alemanha. Atualmente é Pós-Doutorando no Hub de Inteligência Artificial e 
                                Arquiteturas Cognitivas (H.IAAC) do Instituto de Computação da UNICAMP. Seus interesses de 
                                pesquisa incluem: Aprendizado de Máquina, Nuvens Veiculares, Sistemas de Transportes 
                                Inteligentes e Computação em Nuvem.
 

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { ProgramacaoTabela }