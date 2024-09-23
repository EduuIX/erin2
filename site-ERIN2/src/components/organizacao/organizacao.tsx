import './organizacao.css'
import logoSBC from '/image/logo_sbc.png';
import logoUFPA from '/image/ufpaLogo.png';
import logoLaCIS from '/image/logo-lacis-update.svg'
import { Link } from 'react-router-dom';


const Organizacao: React.FC = () => {

    return (
        <>
            <section className="organizacao">
                <div className="organizacao-conteudo">
                    <h2>Organização</h2>
                    <div className="conteudo">
                        <Link target='_blank' to='https://ufpa.br/' className="carta">
                            <h4>UFPA</h4>
                            <img src={logoUFPA} alt="" />
                            <p>Universidade Federal do Pará</p>
                        </Link>
                        <Link target='_blank' to='https://www.sbc.org.br/' className="carta">
                            <h4>SBC</h4>
                            <img src={logoSBC} alt="" />
                            <p>Sociedade Brasileira de Computação</p>
                        </Link>
                        <Link target='_blank' to='https://lacis.ufpa.br/' className="carta">
                            <h4>LACIS</h4>
                            <img src={logoLaCIS} alt="" />
                            <p>Laboratório de Cidades Inteligentes e Sustentáveis</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Organizacao }