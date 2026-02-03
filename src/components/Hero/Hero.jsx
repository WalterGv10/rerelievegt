export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 py-20 overflow-hidden">
            {/* Subtle lighting overlay to mimic gallery feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 pointer-events-none" />

            <div className="max-w-6xl w-full space-y-12 sm:space-y-16 animate-monumental-in relative z-10">
                <div className="space-y-6 sm:space-y-8 text-center">
                    {/* Main Statement */}
                    <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-[0.4em] uppercase text-brand-accent/80 mb-4">
                        Escala que impone presencia
                    </h2>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none select-none">
                        <span className="block text-white">No imprimimos objetos.</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                            Imprimimos presencia.
                        </span>
                    </h1>
                </div>

                {/* Supporting Copy */}
                <div className="max-w-3xl mx-auto space-y-8 text-center">
                    <p className="text-xl sm:text-2xl md:text-4xl font-light text-gray-400 tracking-tight leading-snug text-balance">
                        “Cuando el tamaño importa, la impresión también.”
                    </p>

                    <div className="h-px w-24 bg-brand-accent/30 mx-auto" />

                    <p className="text-sm sm:text-base md:text-lg text-gray-500 uppercase tracking-widest leading-relaxed font-semibold">
                        Monumental • Escultural • Industrial
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl">
                        Inicia un proyecto monumental
                    </button>
                </div>
            </div>

            {/* Side lighting effect */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </section>
    );
}
