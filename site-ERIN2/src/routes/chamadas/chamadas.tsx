import { ChamadaAutores } from '../../components/chamadaAutores/chamadaAutores';
import { ChamadaDeTrabalho } from '../../components/chamadaDeTrabalho/chamadaDeTrabalho';
import { ChamadaTopico } from '../../components/chamadaTopico/chamadaTopico';
import { DatasImportantes } from '../../components/datasImportantes/datasImportantes';
import './chamadas.css'

const Chamadas = () => {
    return (
        <>
            <section className="chamada">
                <div className="chamada-conteudo">
                    <ChamadaDeTrabalho />
                    <DatasImportantes />
                    <ChamadaTopico />
                    <ChamadaAutores />
                </div>
            </section>
        </>
    );
}

export { Chamadas }