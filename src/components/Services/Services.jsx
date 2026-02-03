const applications = [
    {
        title: 'Arte y Escultura',
        desc: 'Piezas monumentales que transforman galerías y espacios públicos.',
        icon: '🏛️'
    },
    {
        title: 'Arquitectura e Interiorismo',
        desc: 'Elementos funcionales y decorativos de gran escala que definen estructuras.',
        icon: '📐'
    },
    {
        title: 'Branding Físico',
        desc: 'Piezas icónicas que materializan la identidad de marca con impacto absoluto.',
        icon: '✨'
    },
    {
        title: 'Prototipos Industriales',
        desc: 'Validación de volumen y forma en escala 1:1 para ingeniería avanzada.',
        icon: '🏭'
    }
];

export default function Services() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl w-full space-y-24">

                {/* Differential Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-white">
                            Escala Real.<br />
                            Impacto Inevitable.
                        </h2>
                        <div className="w-20 h-1 bg-brand-accent" />
                    </div>
                    <div className="space-y-6">
                        <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed">
                            No hacemos miniaturas. Creamos proyectos que transforman espacios, proyectos que otros no pueden alcanzar por tamaño o complejidad.
                        </p>
                        <p className="text-lg text-brand-accent uppercase tracking-[0.2em] font-bold italic">
                            "Competimos donde otros no llegan: en tamaño, presencia y carácter."
                        </p>
                    </div>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="group relative p-10 bg-[#121212] border border-white/5 hover:border-white/10 transition-all duration-700 overflow-hidden"
                        >
                            {/* Abstract hover background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-accent/10 transition-colors duration-700" />

                            <div className="relative z-10 space-y-6">
                                <div className="text-4xl opacity-50">{app.icon}</div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                    {app.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                    {app.desc}
                                </p>
                            </div>

                            {/* Detail accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 group-hover:bg-brand-accent transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 origin-left" />
                        </div>
                    ))}
                </div>

                {/* Closing Frase Power */}
                <div className="pt-24 text-center border-t border-white/5">
                    <p className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-600 italic leading-snug">
                        Impresión 3D que domina el espacio, <br className="hidden sm:block" />
                        redefiniendo los límites de lo posible.
                    </p>
                </div>
            </div>
        </section>
    );
}
