import { Marquee } from "../magicui/marquee"
import Marquee3D from "./MarqueeAbout"

const Tech = () => {
  return (
    <div className='absolute scale-[1.25] -right-[2rem] -top-[1rem] sm:scale-[1.75] sm:-right-[5rem] md:scale-[3] md:left-50 md:insert-y-10 lg:scale-[2.5] overflow-hidden'>
      <Marquee3D />
    </div>
  )
}

export default Tech