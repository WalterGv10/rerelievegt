import SEO from '../../components/SEO';
import Hero from '../../components/Hero/Hero';
import Differentiator from '../../components/Differentiator/Differentiator';
import Applications from '../../components/Applications/Applications';
import Process from '../../components/Process/Process';
import Materials from '../../components/Materials/Materials';
import ClosingCTA from '../../components/ClosingCTA/ClosingCTA';

export default function Home() {
    return (
        <div className="relative z-10 text-white">
            <SEO
                title="RelieveGt - Impresión 3D de Gran Formato"
                description="No imprimimos objetos. Imprimimos presencia. Especialistas en piezas monumentales, esculturas y prototipos industriales a gran escala."
                name="RelieveGt"
                type="website"
            />

            <Hero />
            <Differentiator />
            <Applications />
            <Process />
            <Materials />
            <ClosingCTA />
        </div>
    );
}
