import './organizacao.css'
import logoSBC from '/image/logo_sbc.png';
import logoUFPA from '/image/ufpaLogo.png';
import logoLaCIS from '/image/logo-lacis-update.svg'


const Organizacao: React.FC = () => {

    return (
        <>
            <section className="organizacao">
                <div className="organizacao-conteudo">
                    <h2>Organização</h2>
                    <div className="conteudo">
                        <div className="carta">
                            <h4>UFPA</h4>
                            <img src={logoUFPA} alt="" />
                        </div>
                        <div className="carta">
                            <h4>SBC</h4>
                            <img src={logoSBC} alt="" />
                        </div>
                        <div className="carta">
                            <h4>LACIS</h4>
                            <img src={logoLaCIS} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Organizacao }