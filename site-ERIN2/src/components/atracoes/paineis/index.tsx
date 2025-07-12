import './style.css'
import icon_Eduardo from '../../../assets/palestrantes/Eduardo/Eduardo.jpg'
import icon_Antonio from '../../../assets/palestrantes/Antonio/antonio.jpeg'


const Paineis = () => {
    return (
        <>
            <section className="paineis">
                <div className="painel">
                    <div className="content">
                        <h2>Norte Conectado: Transformação Digital e Inclusão Tecnológica na Amazônia</h2>
                    </div>
                    <div className="container">
                        <div className="images">
                            <img src={icon_Eduardo} alt="" />
                            <div className="icon">
                                <img src={icon_Eduardo} alt="" />
                                <div className="info-prof">
                                    <h3>Eduardo Grizendi</h3>
                                    <p>Diretor de Engenharia e Operações</p>
                                </div>
                                <div className="biografia">
                                    <p>
                                        <span>Biografia</span>:
                                        Engenheiro Eletrônico, pelo ITA, Mestrado em Telecomunicações pelo INATEL e MBA em Gestão Empresarial pela FGV. Professor por 
                                        vários anos do Inatel - Instituto Nacional de Telecomunicações, na área de Inovação e Negócios. Autor do Manual de Inovação para 
                                        Empresas Brasileiras de TIC publicado pela Editora Publit. Diretor de Engenharia e Operações da RNP - Rede Nacional de Ensino e 
                                        Pesquisas. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <img src={icon_Antonio} alt="" />
                            <div className="icon">
                                <img src={icon_Antonio} alt="" />
                                <div className="info-prof">
                                    <h3>Antônio Teles Júnior</h3>
                                    <p>Vice-Governador do Estado do Amapá</p>
                                </div>
                                <div className="biografia">
                                    <p>
                                        <span>Biografia</span>: 
                                        Antônio Pinheiro Teles Junior é um economista, professor da Universidade Federal do Amapá - UNIFAP e político amapaense.
                                    </p>
                                    <p>
                                        Em 2011 passou a integrar o corpo societário da empresa Numeric Consultoria, atuando como prestador de serviços no Serviço de 
                                        Apoio as Micro e Pequenas Empresas – SEBRAE. No ano de 2013, foi admitido como 
                                        Professor de Magistério Superior na Universidade Federal do Amapá - UNIFAP.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export { Paineis };