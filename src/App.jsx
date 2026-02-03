import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Contact from './pages/Contact/Contact';
import Waves from './components/Waves/Waves';
import './styles/theme.css';

function App() {
    return (
        <div className="relative w-full min-h-screen font-sans antialiased text-amber-100 overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                <Waves
                    lineColor="#ffffff"
                    backgroundColor="rgba(36, 36, 36, 1)" // Matching home background
                    waveSpeedX={0.0125}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<Catalog />} />
                    <Route path="/funkos" element={<Funkos />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
