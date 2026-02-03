import SEO from '../../components/SEO';
import CatalogIntro from '../../components/CatalogIntro/CatalogIntro'; // We can reuse or create a specific one
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight';
import { products } from '../../data/products';
import { FaInstagram } from 'react-icons/fa';

export default function Funkos() {
    // Filter only Funkos
    const funkosProducts = products.filter(p => p.type === 'Funko' || p.name.includes('Funko') || p.name.includes('Caricatura'));

    // Highlight Data (Using existing placeholders for now)
    const featuredFunkoImages = [
        { image: '/catalog/mega-caricatura-influencer/front.jpg', text: 'Custom' },
        { image: '/catalog/mega-caricatura-influencer/side.jpg', text: 'Box' },
        { image: '/catalog/mega-caricatura-influencer/action.jpg', text: 'Detail' },
    ];

    return (
        <div className="relative z-10 text-amber-100 pt-16 sm:pt-20">
            <SEO
                title="Funkos & Coleccionables - RelieveGt"
                description="Crea tu propio Funko personalizado. Figuras únicas, cajas diseñadas a medida y calidad premium."
                name="RelieveGt"
                type="website"
            />

            {/* Funkos Hero */}
            <section className="relative py-20 sm:py-32 px-6 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
                    Funkos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gt</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                    Tu personalidad, inmortalizada en formato coleccionable.
                </p>

                <a
                    href="https://www.instagram.com/funkosgt_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-md group"
                >
                    <FaInstagram className="text-xl group-hover:text-pink-400 transition-colors" />
                    <span className="font-medium tracking-wide">@funkosgt_</span>
                </a>
            </section>

            {/* Spotlight */}
            <div className="pb-20">
                <ProductSpotlight
                    title="Experiencia Custom Total"
                    description="No es solo una figura, es una experiencia. Desde el modelado 3D de tus rasgos hasta el diseño gráfico de tu caja personalizada."
                    images={featuredFunkoImages}
                    align="right"
                />
            </div>

            {/* Grid Header */}
            <div className="text-center py-12 border-t border-white/10 bg-black/50">
                <h3 className="text-fluid-h2 font-medium">Galería de Coleccionables</h3>
                <p className="text-white/60 mt-2">Referencias y Pedidos Anteriores</p>
            </div>

            {/* Grid */}
            <section className="px-3 sm:px-6 md:px-8 pb-12 sm:pb-16 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
                        {funkosProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
