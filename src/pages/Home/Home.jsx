import SEO from '../../components/SEO';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

export default function Home() {
    return (
        <div className="relative z-10 text-white">
            <SEO
                title="RelieveGt | Impresión 3D Monumental"
                description="No imprimimos objetos, imprimimos presencia. Especialistas en impresión 3D de gran formato para arte, arquitectura e industria en Guatemala."
                name="RelieveGt"
                type="website"
            />

            <Hero />
            <Services />
        </div>
    );
}
