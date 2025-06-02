import { useRef } from 'react'
import Card from './Card'
import { Globe } from './Globe'
import CopyEmail from './CopyEmail'
import Tech from './Tech'
import TopCard from './TopCard'

const About = () => {

    const grid2ref = useRef()
    return (
        <section className='c-space section-spacing'>
            <TopCard />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* Grid-1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    {/* <img
                        src='assets/coding-pov.png'
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:insert-y-10 lg:scale-[2.5]'
                    /> */}
                    <Tech />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Satyam</p>
                        <p className='subtext'>
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
                        <Card style={{rotate: "75deg", top:"30%", left:"20%"}} text={"Test"} containerRef={grid2ref}/>
                        <Card style={{rotate: "30deg", top:"60%", left:"45%"}} text={"Hello"} containerRef={grid2ref}/>
                        <Card style={{rotate: "-75deg", top:"60%", left:"0%"}} text={"Hii"} containerRef={grid2ref}/>
                        <Card style={{rotate: "70deg", bottom:"30%", left:"70%"}} text={"Design"} containerRef={grid2ref}/>
                        <Card  style={{rotate: "7deg", top:"10%", left:"50%"}}  text={"Lol"} containerRef={grid2ref}/>
                        <Card style={{rotate: "30deg", top:"70%", left:"70%"}} image="assets/logos/csharp-pink.png" containerRef={grid2ref}/>
                        <Card style={{rotate: "-45deg", top:"70%", left:"25%"}} image="assets/logos/dotnet-pink.png" containerRef={grid2ref}/>
                        <Card style={{rotate: "-45deg", top:"5%", left:"10%"}} image="assets/logos/blazor-pink.png" containerRef={grid2ref}/>
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
                {/* Grid-4 */}
                {/* <div className='grid-special-color grid-4'>
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='text-center headtext'>
                            Do you want to start a project together?
                        </p>
                        <CopyEmail/>
                    </div>
                </div> */}
                {/* Grid-5 */}
                {/* <div className='grid-default-color grid-5'>
                    <div className='absolute insert-y-0 md:insert-y-9 w-full h-full start-[50%] md:scale-125'>
                        <Tech />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About