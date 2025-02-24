
import About from "../features/main/About"
import Categories from "../features/main/Categories"
import Footer from "../features/main/Footer"
import Hero from "../features/main/Hero"
import ProjectsMain from "../features/main/ProjectsMain"
import Subscribe from "../features/main/Subscribe"


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Categories />
      <ProjectsMain />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home
