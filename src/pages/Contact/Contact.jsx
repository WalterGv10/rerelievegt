import SEO from '../../components/SEO';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />,
            label: 'Instagram Principal',
            value: '@relievegt',
            href: 'https://www.instagram.com/relievegt/',
            color: 'hover:text-pink-400'
        },
        {
            icon: <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />,
            label: 'Coleccionables & Funkos',
            value: '@funkosgt_',
            href: 'https://www.instagram.com/funkosgt_/',
            color: 'hover:text-amber-400'
        },
        {
            icon: <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" />,
            label: 'WhatsApp Pedidos',
            value: '+502 3685 0866',
            href: 'https://wa.me/50236850866?text=Hola%20RelieveGt,%20me%20gustar%C3%ADa%20mas%20informaci%C3%B3n.',
            color: 'hover:text-green-400'
        },
        {
            icon: <FaEnvelope className="w-8 h-8 md:w-10 md:h-10" />,
            label: 'Correo Electrónico',
            value: 'info@relievegt.com',
            href: 'mailto:info@relievegt.com',
            color: 'hover:text-amber-400'
        }
    ];

    return (
        <div className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <SEO
                title="Contacto - RelieveGt"
                description="Contáctanos para iniciar tu proyecto de impresión 3D de gran formato en Guatemala."
            />

            <div className="max-w-4xl w-full">
                <header className="text-center mb-16 space-y-4">
                    <h1 className="text-fluid-h1 font-bold tracking-tight text-amber-100">
                        Conversemos en <span className="font-light italic text-white">Grande</span>
                    </h1>
                    <p className="text-fluid-body text-white/60 max-w-2xl mx-auto">
                        Estamos listos para llevar tus ideas al mundo físico. Elige tu canal preferido y hablemos de tu próximo proyecto monumental.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                    {contactInfo.map((info, idx) => (
                        <a
                            key={idx}
                            href={info.href}
                            target={info.href !== '#' ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`group relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-amber-100/30 flex items-center gap-6 overflow-hidden ${info.color}`}
                        >
                            <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                                {info.icon}
                            </div>
                            <div className="relative z-10 space-y-1">
                                <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">{info.label}</p>
                                <p className="text-lg md:text-xl font-medium text-amber-100/90 group-hover:text-white transition-colors">{info.value}</p>
                            </div>

                            {/* Decorative background shape */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100/5 rounded-full blur-2xl group-hover:bg-amber-100/10 transition-all duration-500" />
                        </a>
                    ))}
                </div>

                <div className="mt-8 p-10 rounded-[2.5rem] bg-gradient-to-br from-amber-100/10 to-transparent border border-white/5 text-center">
                    <h3 className="text-xl font-medium mb-4 text-white">¿Tienes un diseño listo para cotizar?</h3>
                    <p className="text-white/60 mb-8 max-w-lg mx-auto">
                        Envíanos tus archivos .STL o .OBJ directamente por WhatsApp o correo para una revisión técnica y presupuesto inmediato.
                    </p>
                    <a
                        href="https://wa.me/50236850866"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-amber-100 text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-amber-100/20"
                    >
                        Enviar Archivos
                    </a>
                </div>
            </div>
        </div>
    );
}
