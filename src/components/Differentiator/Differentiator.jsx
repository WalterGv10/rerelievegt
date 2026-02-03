import SectionWrapper from '../shared/SectionWrapper';

const pillars = [
    {
        title: 'Volumen',
        description: 'Piezas de hasta 2 metros de altura.',
        metric: '2m+',
        metricLabel: 'altura'
    },
    {
        title: 'Precisión',
        description: 'Detalle milimétrico en cada capa.',
        metric: '0.1mm',
        metricLabel: 'resolución'
    },
    {
        title: 'Presencia',
        description: 'Objetos que transforman espacios.',
        metric: '∞',
        metricLabel: 'posibilidades'
    }
];

export default function Differentiator() {
    return (
        <SectionWrapper>
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        Cuando el tamaño{' '}
                        <span className="font-semibold">deja de ser límite</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto font-normal drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        La escala es presencia, autoridad y transformación.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="text-center space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md hover:bg-black/50 hover:border-white/30 transition-all duration-500"
                        >
                            {/* Metric */}
                            <div className="space-y-0.5 sm:space-y-1">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                    {pillar.metric}
                                </span>
                                <p className="text-[10px] sm:text-xs text-white/60 tracking-widest uppercase font-medium">
                                    {pillar.metricLabel}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="space-y-1 sm:space-y-2">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                    {pillar.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
