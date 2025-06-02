import { mySocials } from '@/constants'
import { Download } from 'lucide-react'
import React from 'react'

const TopCard = () => {
    return (
        <div className='flex items-center justify-between grid-default-color'>
            <div className='flex gap-3'>
                <img src='assets/hero/hero1.png' className='w-12 h-12 rounded-full' />
                <div className='flex flex-col pt-1'>
                    <h2 className='font-bold'>Satyam</h2>
                    <p className='subtext'>Full Stack Developer</p>
                </div>
            </div>

            <div className='flex items-center justify-around pr-5 gap-7'>
                <a
                    href="/assets/Resume-4.pdf"
                    download="satyam_resume.pdf"
                    className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-royal to-lavender text-white font-light shadow-md hover:from-fuchsia hover:to-orange hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                    Download CV
                    <Download className="w-5 h-5" />
                    
                </a>

                <div className='flex gap-4'>
                    {mySocials.map((social, idx) => (
                        <a href={social.href} key={idx}>
                            <img src={social.icon} className="w-5 h-5" alt={social.name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCard