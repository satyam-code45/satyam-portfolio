import { useRef } from 'react'
import Card from './Card'
import { Globe } from './Globe'
import Tech from './Tech'
import TopCard from './TopCard'

const About = () => {

    const grid2ref = useRef()
    return (
        <section className='c-space section-spacing'>
            <TopCard />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* Grid-1 */}
                <div className='flex items-end grid-default-color grid-1 relative'>
                    <div className='hidden sm:block'><Tech /></div>
                    <div className='z-10 w-full'>
                        <p className='headtext font-extrabold'>Hi, I'm Satyam</p>
                        <p className='font-bold sm:font-normal bg-primary/20 sm:bg-none text-neutral-400 text-sm md:text-base text-pretty p-2 sm:p-0'>
                            Full-Stack Developer 👨‍💻 crafting code with care — exploring DevOps ⚙️, Web3 🔗, and Generative AI 🤖. Always building, always evolving.
                        </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>
                {/* Grid-2 */}
                <div className='grid-default-color grid-2'>
                    <div ref={grid2ref} className='flex items-center justify-center w-full h-full relative'>
                        <p className='flex items-end text-2xl sm:text-5xl text-gray-500'>
                            Code. Debug. Repeat.
                        </p>
                        {/* Text cards with adjusted positions for mobile */}
                        <Card style={{ rotate: "75deg", top: "20%", left: "15%", scale: "0.8" }} text={"Test"} containerRef={grid2ref} />
                        <Card style={{ rotate: "30deg", top: "50%", left: "40%", scale: "0.8" }} text={"Hello"} containerRef={grid2ref} />
                        <Card style={{ rotate: "-75deg", top: "45%", left: "5%", scale: "0.8" }} text={"Hii"} containerRef={grid2ref} />
                        <Card style={{ rotate: "70deg", top: "60%", left: "60%", scale: "0.8" }} text={"Design"} containerRef={grid2ref} />
                        <Card style={{ rotate: "7deg", top: "15%", left: "45%", scale: "0.8" }} text={"Dev"} containerRef={grid2ref} />
                        
                        {/* Tech logos with adjusted positions for mobile */}
                        <Card style={{ rotate: "30deg", top: "65%", left: "75%", scale: "0.9" }} image="/assets/websitelogos/react.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-45deg", top: "75%", left: "25%", scale: "0.9" }} image="/assets/websitelogos/nextjs1.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-45deg", top: "10%", left: "10%", scale: "0.9" }} image="/assets/websitelogos/Node.js.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "40deg", top: "5%", left: "35%", scale: "0.9" }} image="/assets/websitelogos/typescript.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-5deg", top: "40%", left: "30%", scale: "0.9" }} image="/assets/websitelogos/MongoDB.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "85deg", top: "25%", left: "70%", scale: "0.9" }} image="/assets/websitelogos/Docker.png" containerRef={grid2ref} />
                    </div>
                </div>
                {/* Grid-3 */}
                <div className='grid-black-color grid-3'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Time Zone</p>
                        <p className='subtext'>
                            Based on Earth 🌍 — open to remote work across time zones!
                        </p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>
    
            </div>
        </section>
    )
}

export default About