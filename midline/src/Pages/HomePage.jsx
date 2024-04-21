import AboutSection from "../Components/HomeComponents/AboutSection"
import CarouselSection from "../Components/HomeComponents/CarouselSection"
import TeamSection from "../Components/HomeComponents/TeamSection"
import Projects from "../Components/HomeComponents/Projects"
import ServiceSection from "../Components/HomeComponents/ServiceSection"
import Partners from "../Components/HomeComponents/Partners"
import CountsSection from "../Components/HomeComponents/CountsSection"
import Cards from "../Components/HomeComponents/Cards"
import Contact from "../Components/HomeComponents/Contact"


const Home = () => {
  return (
    <>
        <CarouselSection/>
        <AboutSection/>
        <CountsSection/>
        <Projects/>
        <ServiceSection/>
        <Cards/>
        <TeamSection/>
        <Contact/>
        <Partners/>
    </>
  )
}

export default Home