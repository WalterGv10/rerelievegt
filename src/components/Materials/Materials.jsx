import SectionWrapper from '../shared/SectionWrapper';

const materials = [
    {
        name: 'PLA+',
        description: 'Material premium derivado del maíz. Es ecológico, biodegradable y permite el mayor nivel de detalle superficial.',
        features: ['Acabado estético superior', '100% Biodegradable', 'Ideal para figuras y llaveros'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: 'from-teal-400 to-cyan-400',
        borderColor: 'border-teal-500/30',
        bgHover: 'hover:bg-teal-950/30',
        iconBg: 'bg-teal-900/40 text-teal-400'
    },
    {
        name: 'TPU',
        description: 'Termoplástico de poliuretano flexible. Es elástico, resistente a impactos y prácticamente indestructible.',
        features: ['Flexibilidad extrema', 'Alta absorción de impactos', 'Resistente a la abrasión'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        // Replacing standard icon with a "wave" like shape representation if possible, strictly using SVG paths. 
        // Using a generic elastic/bounce looking icon for now or standard shape.
        // Let's use a "waves" icon for TPU as per image
        overrideIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15l4-4a3 3 0 014.24 0l4 4a3 3 0 014.24 0M4 9l4 4a3 3 0 004.24 0l4-4a3 3 0 004.24 0" />
            </svg>
        ),
        color: 'from-purple-400 to-fuchsia-400',
        borderColor: 'border-purple-500/30',
        bgHover: 'hover:bg-purple-950/30',
        iconBg: 'bg-purple-900/40 text-purple-400'
    },
    {
        name: 'ABS',
        description: 'Plástico de ingeniería de alta resistencia térmica y mecánica. El material ideal para piezas funcionales.',
        features: ['Resistencia a altas temperaturas', 'Muy duradero', 'Fácil de post-procesar'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: 'from-orange-400 to-amber-400',
        borderColor: 'border-orange-500/30',
        bgHover: 'hover:bg-orange-950/30',
        iconBg: 'bg-orange-900/40 text-orange-400'
    },
    {
        name: 'PETG',
        description: 'El equilibrio perfecto entre PLA y ABS. Resistente como el ABS pero fácil de imprimir como el PLA.',
        features: ['Resistencia química', 'Apto para exteriores', 'Muy fuerte estructuralmente'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: 'from-blue-400 to-indigo-400',
        borderColor: 'border-blue-500/30',
        bgHover: 'hover:bg-blue-950/30',
        iconBg: 'bg-blue-900/40 text-blue-400'
    }
];

export default function Materials() {
    return (
        <SectionWrapper className="relative py-20">

            <div className="text-center space-y-4 mb-16">
                <h2 className="text-fluid-h2 font-light text-white tracking-tight drop-shadow-xl">
                    Nuestros <span className="font-semibold">Materiales</span>
                </h2>
                <p className="text-fluid-body text-white/70 max-w-2xl mx-auto">
                    Seleccionamos la mejor materia prima para garantizar durabilidad y acabado.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {materials.map((mat, index) => (
                    <div
                        key={index}
                        className={`group relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${mat.bgHover} ${mat.borderColor} hover:border-opacity-100 border-opacity-30`}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${mat.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 transition-opacity duration-700`} />

                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${mat.iconBg} group-hover:scale-110`}>
                            {mat.overrideIcon || mat.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-fluid-h3 font-bold text-white mb-4 tracking-wide">
                            {mat.name}
                        </h3>

                        <p className="text-sm text-white/70 leading-relaxed mb-8 h-24">
                            {mat.description}
                        </p>

                        {/* Features list */}
                        <ul className="space-y-3 border-t border-white/10 pt-6">
                            {mat.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-xs sm:text-sm text-white/60">
                                    <span className={`mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${mat.color}`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
