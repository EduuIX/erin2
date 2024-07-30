import { Main } from "../../components/main/main";
import { Organizacao } from "../../components/organizacao/organizacao";
import { PublicoAlvo } from "../../components/publicoAlvo/publicoAlvo";
import { Wellcome } from "../../components/wellcome/wellcome";
import { EventoData } from "../../components/eventoData/eventoData";

import './home.css';

const Home = () => {
    return (
        <>
            <Wellcome />
            <EventoData />
            <Main />
            <PublicoAlvo />
            <Organizacao />
        </>
    );
}

export { Home }