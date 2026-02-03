import CircularGallery from '../CircularGallery/CircularGallery';

export default function ProductSpotlight({ title, description, images, align = 'left' }) {
    // Fill images array if it has few items to create a better circular effect
    // We aim for at least 8 items for a smooth loop
    const filledImages = images.length < 8
        ? [...images, ...images, ...images, ...images, ...images].slice(0, 10)
        : images;

    return (
        <section className="relative w-full py-16 bg-[#0a0a0a] border-b border-white/5 last:border-0 overflow-hidden">
            <div className="container-padding max-w-[1920px] mx-auto">

                {/* Header */}
                <div className={`text-center mb-8 ${align === 'right' ? 'md:text-right' : 'md:text-left'} md:px-12`}>
                    <h2 className="text-fluid-h2 font-light text-white tracking-tight drop-shadow-xl inline-block relative">
                        {title}
                        <span className={`block h-1 w-1/3 bg-white/20 mt-2 ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}></span>
                    </h2>
                    <p className={`mt-4 text-fluid-body text-white/70 max-w-xl leading-relaxed ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}>
                        {description}
                    </p>
                </div>

                {/* Gallery */}
                <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full relative z-0 mt-8 rounded-2xl overflow-hidden border border-white/5 bg-black/20">
                    <CircularGallery
                        items={filledImages}
                        bend={2}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 40px Inter"
                        scrollSpeed={2}
                    />

                    {/* Overlay Gradient for integration */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
