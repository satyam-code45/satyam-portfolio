import { mySocials } from "@/constants/social"

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 pb-4 c-space text-sm text-neutral-400">
            {/* Copyright */}
            <div className="text-center sm:text-left">
                &copy; 2025 Satyam. All rights reserved.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
                {mySocials.map((social, idx) => (
                    <a
                        href={social.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition"
                    >
                        <img
                            src={social.icon}
                            alt={social.name}
                            className="w-4 h-4 object-contain transition-transform duration-200 group-hover:scale-110"
                        />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
