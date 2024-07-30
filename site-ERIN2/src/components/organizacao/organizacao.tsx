import Carousel from '../carrossel/carrossel';
import './organizacao.css'
import logoSBC from '/image/logo_sbc.png';
import logoUFPA from '/image/ufpaLogo.png';
import logoGercom from '/image/logo-gercom-nome.png';
import logoPropesp from '/image/PROPESP.png';
import logoLaCIS from '/image/logo-lacis.png'


const Organizacao: React.FC = () => {

    
    const images_realizacao = [
        logoSBC,
        logoUFPA,
    ];
    
    const images_apoio = [
        logoLaCIS,
        logoGercom,
        logoPropesp,
    ];

    return (
        <>
            <section className="organizacao">
                <div className="organizacao-conteudo">
                    <h2>Organização</h2>
                    <div className="conteudo">
                        <div className="realizacao">
                            <h3>Realizado por:</h3>
                            <div className="realizacao-conteudo">
                                <Carousel images={images_realizacao} />
                            </div>
                        </div>
                        <div className="apoio">
                            <h3>Apoio:</h3>
                            <div className="apoio-conteudo">
                                <Carousel images={images_apoio} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Organizacao }