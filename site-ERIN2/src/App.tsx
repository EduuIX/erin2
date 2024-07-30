import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Header } from './components/header/header'


import { Home } from './routes/home/home'
import { Chamadas } from './routes/chamadas/chamadas'
import { Programacao } from './routes/programacao/programacao'
import { Inscricoes } from './routes/inscricoes/inscricoes'
import { Evento } from './routes/evento/evento'
import { Contato } from './routes/contato/contato'
import { NotFound } from './routes/notFound/notFound'
import { Footer } from './components/footer/footer';


function App() {
    return (
        <>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/chamadas" element={<Chamadas />} />
                        <Route path="/programacao" element={<Programacao />} />
                        <Route path="/inscricoes" element={<Inscricoes />} />
                        <Route path="/evento" element={<Evento />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default App
