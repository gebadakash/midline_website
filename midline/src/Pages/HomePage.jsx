// import TeamSection from "../Components/HomeComponents/TeamSection"
// import Projects from "../Components/HomeComponents/Projects"
import React, { Suspense } from "react"
const CarouselSection = React.lazy(()=> import ("../Components/HomeComponents/CarouselSection"));
const AboutSection = React.lazy(()=> import ("../Components/HomeComponents/AboutSection"));
const ServiceSection = React.lazy(()=> import ("../Components/HomeComponents/ServiceSection"));
const Partners = React.lazy(()=> import ("../Components/HomeComponents/Partners"));
const CountsSection = React.lazy(()=> import ("../Components/HomeComponents/CountsSection"));
const Cards = React.lazy(()=> import("../Components/HomeComponents/Cards"));
const Contact = React.lazy(()=> import("../Components/HomeComponents/Contact"));

const Home = () => {
  return (
    <>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <CarouselSection/>
          <AboutSection/>
          <CountsSection/>
          {/* <Projects/> */}
          <ServiceSection/>
          <Cards/>
          {/* <TeamSection/> */}
          <Contact/>
          <Partners/>
        </Suspense>
    </>
  )
}

export default Home