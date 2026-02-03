import { Routes, Route } from 'react-router-dom';
import Iridescence from './components/Iridescence/Iridescence';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans antialiased text-gray-200 bg-[#0a0a0a] overflow-x-hidden">
      {/* Slower, darker background for a sober gallery atmosphere */}
      <Iridescence
        color={[0.1, 0.1, 0.12]}
        mouseReact={true}
        amplitude={0.05}
        speed={0.4}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
