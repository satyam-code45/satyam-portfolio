import { mySocials } from '@/constants/social'
import { Download } from 'lucide-react'
import React from 'react'

const TopCard = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between grid-default-color p-4 sm:p-6 gap-6 sm:gap-0">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
                <img src="/assets/hero/hero1.png" alt="Profile" className="w-14 h-14 rounded-full" />
                <div className="flex flex-col">
                    <h2 className="font-bold text-lg">Satyam</h2>
                    <p className="subtext">Full Stack Developer</p>
                </div>
            </div>

            {/* Download CV and Social Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a
                    href="/assets/Resume.pdf"
                    download="satyam_resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-royal to-lavender text-white font-light shadow-md hover:from-fuchsia hover:to-orange hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                    Download CV
                    <Download className="w-5 h-5" />
                </a>

                <div className="flex items-center gap-3">
                    {mySocials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-11 h-11 rounded-full  hover:bg-white/20 transition"
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-6 h-6 object-contain transition-transform duration-200 group-hover:scale-110"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCard
