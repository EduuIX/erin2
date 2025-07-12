import './style.css'
import icon_Iago from '../../../assets/palestrantes/IagoMedeiros/Foto SR Norte 2 - Iago - Opcao 2(1).jpeg'


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
            </section>
        </>
    );
};


export { Palestras };