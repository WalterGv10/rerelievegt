import { useState } from 'react';

export default function ProductCard({ product }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div
            className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            onClick={() => setShowInfo(!showInfo)}
        >
            {/* Background with ID number */}
            {/* Image Layer */}
            <div className="absolute inset-0">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-white/20 text-fluid-h1">{product.id}</span>
                    </div>
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Info Overlay */}
            <div
                className={`absolute inset-0 bg-black/90 backdrop-blur-md p-[var(--spacing-container)] flex flex-col justify-end transition-all duration-500 ${showInfo ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <h3 className="text-fluid-h3 font-semibold text-white mb-2 shadow-sm">
                    {product.name}
                </h3>

                <div className="space-y-1 text-fluid-small text-white/80">
                    <p><span className="text-white/50 uppercase tracking-widest text-[10px]">Dimensiones:</span> {product.dimensions}</p>
                    <p><span className="text-white/50 uppercase tracking-widest text-[10px]">Tipo:</span> {product.type}</p>
                </div>
            </div>

            {/* Bottom Label (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-fluid-body font-medium text-white shadow-sm">
                    {product.name}
                </p>
            </div>
        </div>
    );
}
