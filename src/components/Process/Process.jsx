import SectionWrapper from '../shared/SectionWrapper';

const steps = [
    { number: '01', title: 'Concepto', description: 'Tu visión, nuestra interpretación' },
    { number: '02', title: 'Ingeniería', description: 'Optimización para escala' },
    { number: '03', title: 'Producción', description: 'Impresión capa por capa' },
    { number: '04', title: 'Entrega', description: 'Acabado profesional' }
];

export default function Process() {
    return (
        <SectionWrapper>
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        De idea a{' '}
                        <span className="font-semibold">pieza monumental</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto font-normal drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        Precisión, no velocidad.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal line (desktop) */}
                    <div className="hidden md:block absolute top-6 lg:top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                    {/* Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center space-y-2 sm:space-y-3"
                            >
                                {/* Number */}
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-white/30 bg-black/50 backdrop-blur-md text-lg sm:text-xl lg:text-2xl font-light text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
