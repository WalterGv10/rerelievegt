import SEO from '../../components/SEO';
import CatalogIntro from '../../components/CatalogIntro/CatalogIntro';
import ProductCard from '../../components/ProductCard/ProductCard';
import CatalogClosing from '../../components/CatalogClosing/CatalogClosing';
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight';
import { products } from '../../data/products';

export default function Catalog() {
    // Bad Bunny Data
    const badBunnyImages = [
        { image: '/catalog/bad-bunny/front.jpg', text: 'Benito' },
        { image: '/catalog/bad-bunny/studio.jpg', text: 'Vibra' },
        { image: '/catalog/bad-bunny/side.jpg', text: 'Perfil' },
        { image: '/catalog/bad-bunny/studio-2.jpg', text: 'Neon' },
    ];

    // Floating Bodies Data
    const bodiesImages = [
        { image: '/catalog/floating-bodies/main.jpg', text: 'Sinergia' },
        { image: '/catalog/floating-bodies/main.jpg', text: 'Equilibrio' },
        { image: '/catalog/floating-bodies/main.jpg', text: 'Fuerza' },
    ];

    // Geo Jaguar Pink Data (New)
    const jaguarPinkImages = [
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Neon' },
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Soul' },
        { image: '/catalog/geo-leopard-pink/main.jpg', text: 'Wild' },
    ];

    // Geo Panther Silver Data
    const pantherSilverImages = [
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Prism' },
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Cromo' },
        { image: '/catalog/geo-panther-silver/main.jpg', text: 'Luz' },
    ];

    // Lucky Cat Data
    const luckyCatImages = [
        { image: '/catalog/lucky-cat/main.jpg', text: 'Suerte' },
        { image: '/catalog/lucky-cat/main.jpg', text: 'Dark' },
        { image: '/catalog/lucky-cat/main.jpg', text: 'Neko' },
    ];

    return (
        <div className="relative z-10 text-amber-100 pt-16 sm:pt-20">
            <SEO
                title="Catálogo - RelieveGt"
                description="Colección de piezas de gran formato."
                name="RelieveGt"
                type="website"
            />

            <CatalogIntro />

            {/* Spotlights Stack */}
            <div className="flex flex-col gap-12 sm:gap-24 pb-20">

                <ProductSpotlight
                    title="Cabezón Temático - Bad Bunny"
                    description="La pieza central. Iconografía urbana y texturas hiper-realistas llevadas al volumen monumental."
                    images={badBunnyImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Sinergia Corporal"
                    description="Una composición desafiante a la gravedad. Cuerpos entrelazados en un arco de tensión estética."
                    images={bodiesImages}
                    align="right"
                />

                <ProductSpotlight
                    title="Jaguar Digital - Neon Soul"
                    description="Fusión cyberpunk. Facetas doradas y luz magenta interna para una presencia imponente."
                    images={jaguarPinkImages}
                    align="left"
                />

                <ProductSpotlight
                    title="Pantera Geométrica - Prism"
                    description="Agresividad natural domada por geometría digital. Facetas reflectantes y acentos neón."
                    images={pantherSilverImages}
                    align="right"
                />

                <ProductSpotlight
                    title="Maneki Neko - Dark Matter"
                    description="El gato de la suerte reimaginado. Estética oscura para espacios que rompen reglas."
                    images={luckyCatImages}
                    align="left"
                />

            </div>

            {/* Full Grid Header */}
            <div className="text-center py-12 border-t border-white/10 bg-black/50">
                <h3 className="text-fluid-h2 font-medium">Índice Completo</h3>
                <p className="text-white/60 mt-2">Explora todas nuestras referencias</p>
            </div>

            {/* Grid */}
            <section className="px-3 sm:px-6 md:px-8 pb-12 sm:pb-16 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <CatalogClosing />
        </div>
    );
}
