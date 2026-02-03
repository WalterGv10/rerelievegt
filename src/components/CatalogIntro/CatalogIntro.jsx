export default function CatalogIntro() {
    return (
        <section className="relative h-[85vh] flex items-end pb-6 sm:pb-12 md:pb-16">
            {/* Hero Image Background */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/catalog-hero.jpg"
                    alt="Escultura en espacio de exhibición"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-left space-y-2 sm:space-y-4 md:space-y-6">

                    {/* Tagline */}
                    <p className="text-[9px] sm:text-xs md:text-sm text-white/80 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        Galería técnica
                    </p>

                    {/* Main Title */}
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                        <span className="font-semibold">Piezas</span> que ocupan espacio.
                        <br />
                        <span className="text-white/90">Y lo merecen.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 font-normal max-w-2xl leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.95)]">
                        Cada proyecto es una declaración de escala.
                    </p>

                </div>
            </div>
        </section>
    );
}
