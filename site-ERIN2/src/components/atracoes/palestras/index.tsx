import './style.css'
import icon_Iago from '../../../assets/palestrantes/IagoMedeiros/Iago.svg'
import icon_Ramon from '../../../assets/palestrantes/Ramon/ramon.svg'


const Palestras = () => {
    return (
        <>
            <section className="palestras">
                <div className="palestra">
                    <img src={icon_Iago} alt="" />
                    <div className="content">
                        <div className="icon">
                            <img src={icon_Iago} alt="" />
                            <div className="info-prof">
                                <h3>Prof. Dr. Iago Medeiros</h3>
                                <p>Universidade Federal do Pará (UFPA) & Sociedade Brasileira de Computação (SBC)</p>
                            </div>
                        </div>
                        <h2>Sociedade Brasileira de Computação: Desafios e Perspectivas</h2>
                        <div className="resumo">
                            <p>
                                A Sociedade Brasileira de Computação (SBC) é uma sociedade científica sem fins lucrativos. 
                                Fundada em 24 de julho de 1978, reúne estudantes, docentes, pesquisadores e pesquisadoras, profissionais e entusiastas da área de 
                                Computação de todo o Brasil. Sua missão é fomentar o acesso à informação e cultura por meio da informática, incentivar a pesquisa e o 
                                ensino em computação no país, promover a inclusão digital e contribuir para a formação de profissionais de computação que tenham 
                                responsabilidade social.
                                Nesta palestra, o Secretário Regional (Prof. Dr. Iago Medeiros) da Norte 2, que compreendem os estados do Amapá e Pará, vai abordar 
                                sobre quais são os principais desafios para a computação na região, além de abordar sobre as perspectivas de melhoria e avanços que a 
                                SBC traz para os estudantes e profissionais destes estados.
                            </p>
                        </div>
                        <div className="biografia">
                            <p><span>Biografia</span>: Atual Secretário Regional da Norte 2 (estados Pará e Amapá) pela Sociedade Brasileira de Computação (desde 2024) e 
                                professor adjunto da Universidade Federal do Pará (UFPA), no campus de Tucuruí, onde ministro diversas matérias para o Bacharelado de 
                                Engenharia da Computação. Possuo graduação em Engenharia da Computação pela UFPA, com período de mobilidade na Inglaterra; mestrado em 
                                Engenharia Elétrica pela UFPA, com período de estágio na UFRGS; e doutorado em Ciência da Computação pela UFPA com período de 
                                mobilidade no Canadá. Tenho experiência na área de pesquisa e inovação nacional e internacional desde 2016, onde avanço o estado-da-arte 
                                de sistemas TIC na busca por soluções inovadores na área de Inteligência Artificial, Redes de Comunicação, IoT e Simulação Computacional.</p>
                        </div>
                    </div>
                </div>
                <div className="palestra">
                    <img src={icon_Ramon} alt="" />
                    <div className="content">
                        <div className="icon">
                            <img src={icon_Ramon} alt="Foto do palestrante Ramon Torres Cruz" />
                            <div className="info-prof">
                                <h3>Ramon Torres Cruz</h3>
                                <p>Acadêmico de Direito pela Universidade Federal do Amapá (UNIFAP)</p>
                            </div>
                        </div>
                        <h2>A Justiça Social no Amapá: Cidadania Através do Ensino de Informática</h2>
                        <div className="resumo">
                            <p>
                                Em tempos de digitalização crescente das relações sociais e jurídicas, não há como
                                conceber o acesso à justiça sem a efetiva inclusão digital dos cidadãos, sobretudo daqueles
                                situados nas franjas da sociedade. O acesso à justiça, como bem delineado por Mauro
                                Cappelletti, ultrapassa a mera disponibilização formal dos tribunais. Não basta oferecer
                                assistência judiciária gratuita ou criar mecanismos de representação coletiva; é necessário,
                                sobretudo, enfrentar as barreiras materiais e culturais que impedem a população vulnerável
                                de usufruir concretamente dos seus direitos. Nesse sentido, a iniciativa conjunta do Tribunal
                                Regional do Trabalho da 8ª Região e do Tribunal de Justiça do Estado do Amapá, ao
                                promover um curso de informática para pessoas em situação de rua, materializa aquilo que
                                a doutrina contemporânea reconhece como a função proativa do Judiciário: não apenas
                                julgar, mas também fomentar políticas públicas que ampliem a esfera de cidadania
                                substancial. Trata-se, portanto, de uma ação que se insere no contexto do
                                neoconstitucionalismo e da máxima efetividade dos direitos fundamentais, com especial
                                relevo para a dignidade da pessoa humana (art. 1º, III, da CF/88). Importa salientar que, no
                                caso da região amazônica, as vulnerabilidades se potencializam diante de demandas
                                específicas e sensíveis, como o combate ao trabalho em condições análogas à escravidão,
                                a exploração econômica predatória e os múltiplos desafios de acesso às políticas públicas
                                básicas, o que torna a inclusão digital ainda mais premente como ferramenta de
                                emancipação e defesa de direitos.
                            </p>
                            <p>
                                Essas ações promovem uma verdadeira "revolução democrática do saber jurídico", e
                                concretizam o pensamento de Boaventura de Sousa Santos e Paulo Freire ao
                                desmonopolizar o conhecimento técnico e levá-lo àqueles historicamente invisibilizados pelo
                                sistema. A pedagogia adotada no curso reflete um compromisso inequívoco com as
                                clássicas teorias educacionais, conjugando o construtivismo de Vygotsky e Piaget, a
                                aprendizagem significativa de Ausubel, e a educação emancipatória de Paulo Freire. As
                                práticas de ensino, longe de se restringirem a uma transmissão verticalizada de conteúdos,
                                priorizaram a mediação dialógica e a valorização da experiência prévia dos educandos,
                                ainda que mínima. Além disso, a gamificação e o uso do reforço positivo, em consonância
                                com as teorias de Skinner, criaram um ambiente propício à superação das barreiras
                                psíquicas e sociais que usualmente obstaculizam o aprendizado de populações
                                vulnerabilizadas. Assim, concretizou-se o respeito ao tempo e ao contexto de cada
                                participante.
                            </p>
                            <p>
                                Não é demais recordar que, conforme já asseverado pela doutrina e reiterado pelo
                                Conselho Nacional de Justiça, o Poder Judiciário deve atuar também como agente promotor
                                de inclusão e redução das desigualdades. O curso de informática ora relatado é exemplo
                                eloquente dessa atuação transformadora: não se trata de um ato filantrópico episódico, mas
                                de uma estratégia de intervenção social contínua e estruturante. Ao capacitar pessoas em
                                situação de rua para interagir com as tecnologias da informação, os tribunais envolvidos
                                reafirmam o compromisso constitucional com uma justiça socialmente sensível e
                                democraticamente engajada, contribuindo para o fortalecimento do Estado Democrático de
                                Direito em sua vertente mais humanizadora e cientes das especificidades regionais e das
                                mazelas estruturais que afetam a Amazônia
                            </p>
                        </div>
                        <div className="biografia">
                            <p><span>Biografia</span>: 
                                Ramon Torres Cruz é acadêmico de Direito pela Universidade Federal do Amapá (UNIFAP) e graduado em Ciência da Computação pela 
                                Universidade Federal do Pará (UFPA). Possui especializações em Redes de Computadores, Docência e Gestão em Educação a Distância e 
                                Direito Constitucional, além de ser pós-graduando em Direitos Humanos. Com 11 anos de experiência no serviço público, atua como 
                                Analista Judiciário – Apoio Especializado em Tecnologia da Informação no Tribunal Regional do Trabalho da 8ª Região (TRT8). 
                                Possui certificações reconhecidas como ITIL, COBIT e ISO 27002, e formação prática em desenvolvimento como Full Stack Web Developer 
                                pela Ironhack (Turma 92).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export { Palestras };