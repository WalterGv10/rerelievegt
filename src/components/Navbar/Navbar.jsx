import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/#servicios' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Proceso', path: '/#proceso' },
    { name: 'Contacto', path: '/#contacto' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
                : 'bg-black/0 backdrop-blur-sm'
                }`}
        >
            <div className="mx-auto w-full container-padding">
                <div className="flex items-center justify-between h-[var(--spacing-section)] max-h-20">

                    {/* Logo - Fluid size */}
                    <Link
                        to="/"
                        className="text-fluid-h3 font-bold text-amber-100 tracking-tight drop-shadow-md hover:opacity-80 transition-opacity"
                    >
                        RelieveGt
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 text-fluid-body font-medium rounded-full transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-amber-100 bg-amber-100/10'
                                    : 'text-amber-100/70 hover:text-amber-100 hover:bg-amber-100/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/#contacto"
                            className="ml-4 px-6 py-2.5 text-fluid-body font-medium text-black bg-amber-100 rounded-full hover:bg-amber-100/90 transition-all duration-300 shadow-lg"
                        >
                            Cotizar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - 100dvh for full mobile viewport */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-black/95 backdrop-blur-xl transition-all duration-500 z-40 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
                    }`}
            >
                {/* Close Button (top right) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 text-white/60 hover:text-white"
                >
                    <span className="text-4xl">&times;</span>
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`text-fluid-h2 font-light transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    to="/#contacto"
                    className="mt-8 px-10 py-4 text-fluid-body font-medium text-black bg-white rounded-full hover:scale-105 transition-transform"
                >
                    Cotizar Proyecto
                </Link>
            </div>
        </nav>
    );
}
