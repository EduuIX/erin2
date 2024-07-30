import { Link } from 'react-router-dom';
import './inscricoesErin.css'
import { Banner } from '../banner/banner';

const InscricoesErin = () => {
    return (
        <>
            <section className='inscricoesErin'>
                <h2>Inscrições para a ERIN 2 — 2024</h2>
                <p>
                    Inscrições para a ERIN 2 2024 são gerenciadas pela Sociedade Brasileira de Computação
                    (SBC) através do portal do sistema ECOS. Os valores de inscrição para a XVII Escola
                    Regional de Informática Norte (ERIN 2024) estão listados abaixo.
                    Destacamos que alunos e profissionais não associados à SBC podem se associar
                    (ou renovar a associação) durante o processo de inscrição com um desconto no valor
                    da inscrição de não associado, pagando um valor promocional para o combo
                    “inscrição + associação”. Inscrever-se com associação à SBC é a opção mais vantajosa
                    para os não associados, pois pagam um valor promocional e ainda recebem os
                    benefícios de um associado. Para maiores informações, 
                    <Link className='link' to={"https://www.sbc.org.br/associe-se-2/269-beneficios"} target='_blank'> clique aqui</Link>.
                </p>
                <p>
                    Aproveite e faça a inscrição com antecedência para aproveitar os descontos.
                    As inscrições online para a XVII Escola Regional de Informática Norte
                    (ERIN 2024) devem ser realizadas pelo Sistema de Inscrições da SBC (ECOS).
                </p>
                <Banner />
            </section>
        </>
    );
}

export { InscricoesErin }