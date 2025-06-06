import { ComiteOrgnizacao } from "../../components/comite-organizacao";
import { Comite } from "../../components/comite/comite";
import { EventoData } from "../../components/eventoData/eventoData";
import { LocalEvento } from "../../components/localEvento/localEvento";
import { Organizacao } from "../../components/organizacao/organizacao";
import { PublicoAlvo } from "../../components/publicoAlvo/publicoAlvo";
import { Sobre } from "../../components/sobre/sobre";

const Evento = () => {
    return (
        <>
            <EventoData />
            <PublicoAlvo />
            <Sobre />
            <Comite />
            <LocalEvento />
            <Organizacao />
            <ComiteOrgnizacao />
        </>
    );
}

export { Evento }