import { Paineis } from '../../components/atracoes/paineis';
import { Palestras } from '../../components/atracoes/palestras';
import { Webnars } from '../../components/atracoes/webnar';
import './style.css'
import { useState } from 'react';






const Atracoes = () => {
    const [view, setView] = useState('1');


    return (
        <>
            <section className='atracoes'>
                <div className="sub-routes">
                    <button onClick={() => setView('1')} disabled={view === '1'}>Palestra</button>
                    <button onClick={() => setView('2')} disabled={view === '2'}>Painel</button>
                    <button onClick={() => setView('3')} disabled={view === '3'}>Webinar</button>
                </div>

                <main>
                    <div className="main-container">
                        {view === '1' && <Palestras />}
                        {view === '2' && <Paineis />}
                        {view === '3' && <Webnars />}
                    </div>
                </main>
            </section>
        </>
    );
};


export { Atracoes };