import './comite.css'

import thiego from '../../assets/palestrantes/Thiego/WhatsApp Image 2025-07-08 at 13.47.03 1.svg'
import iago from '../../assets/palestrantes/IagoMedeiros/Foto SR Norte 2 - Iago - Opcao 2(1) 1 (1).svg'
import rafael from '../../assets/palestrantes/Rafael/WhatsApp Image 2025-07-08 at 13.47.02 1.svg'


const Comite = () => {
    return (
        <>
            <section>
                <div className="comite">
                    <div className="evento-conteudo">
                        <h2>Comitê</h2>
                        <div className="section-comite">
                            <div className="comite-conteudo">
                                <div className="conteudo">
                                    <h3>Coordenação Geral</h3>
                                    <ul>
                                        <li>
                                            <div className="icon_user">
                                                <img src={thiego} alt="" />
                                                <p>Thiêgo Nunes, IFAP</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon_user">
                                                <img src={iago} alt="" />
                                                <p>Iago Medeiros, UFPA</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon_user">
                                                <img src={rafael} alt="" />
                                                <p>Rafael Pontes, Unifap</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="conteudo">
                                    <h3>Comissão Organizadora</h3>
                                    <ul>
                                        <li>Eduardo Ribeiro, UFPA</li>
                                        <li>Ema Pantoja, Unifap</li>
                                    </ul>
                                </div>
                                <div className="conteudo">
                                    <h3>Coordenação do Comitê de Programa</h3>
                                    <ul>
                                        <li>Anderson Brasil, IFAP</li>
                                        <li>Hugo Santos, UEPA</li>
                                        <li>Lucas Bastos, UFPA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Comite }