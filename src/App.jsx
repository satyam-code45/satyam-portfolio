import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { DotPattern } from "./components/magicui/dot-pattern"
import Projects from "./components/Projects/Projects"
import Skill from "./components/skills/Skill"
import { cn } from "./lib/utils"

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <About />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App