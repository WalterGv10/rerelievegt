export default function CatalogClosing() {
    return (
        <section className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">

                {/* Transversal Message */}
                <div className="py-6 sm:py-8 md:py-12 border-y border-white/10">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-light italic tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        Escala real. Presencia real.
                    </p>
                </div>

                {/* Authority Statement */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        Cada pieza es única.
                        <br />
                        <span className="font-semibold">
                            Cada proyecto se construye a escala real.
                        </span>
                    </h2>
                </div>

                {/* CTA */}
                <div className="pt-3 sm:pt-4 md:pt-6">
                    <a
                        href="/contacto"
                        className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-3.5 md:py-4 lg:py-5 border-2 border-white/40 bg-black/40 backdrop-blur-md text-white font-medium tracking-wide rounded-full hover:bg-white hover:text-black transition-all duration-500 text-xs sm:text-sm md:text-base drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    >
                        Hablemos de tu pieza
                    </a>
                </div>

            </div>
        </section>
    );
}
