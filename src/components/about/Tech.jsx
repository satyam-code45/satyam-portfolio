import { Marquee } from "../magicui/marquee"

const Tech = () => {
  return (
    <div className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:insert-y-10 lg:scale-[2.5]'>
      <Marquee>
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind CSS</span>
      </Marquee>
    </div>
  )
}

export default Tech