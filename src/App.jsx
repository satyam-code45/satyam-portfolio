import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import { DotPattern } from "./components/magicui/dot-pattern"
import { Meteors } from "./components/magicui/meteors"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/Projects/Projects"
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

      {/* <Navbar /> */}
      {/* <Hero /> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App