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
                    <div ref={grid2ref} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            Code. Debug. Repeat.
                        </p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text={"Test"} containerRef={grid2ref} />
                        <Card style={{ rotate: "30deg", top: "60%", left: "45%" }} text={"Hello"} containerRef={grid2ref} />
                        <Card style={{ rotate: "-75deg", top: "60%", left: "0%" }} text={"Hii"} containerRef={grid2ref} />
                        <Card style={{ rotate: "70deg", bottom: "30%", left: "70%" }} text={"Design"} containerRef={grid2ref} />
                        <Card style={{ rotate: "7deg", top: "10%", left: "50%" }} text={"Lol"} containerRef={grid2ref} />
                        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="/assets/websitelogos/react.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="/assets/websitelogos/nextjs1.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="/assets/websitelogos/Node.js.png" containerRef={grid2ref} />

                        <Card style={{ rotate: "40deg", top: "10%", left: "40%" }} image="/assets/websitelogos/typescript.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "-5deg", top: "50%", left: "35%" }} image="/assets/websitelogos/MongoDB.png" containerRef={grid2ref} />
                        <Card style={{ rotate: "85deg", top: "15%", left: "80%" }} image="/assets/websitelogos/Docker.png" containerRef={grid2ref} />
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