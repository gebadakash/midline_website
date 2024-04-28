import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
import PageHeader from "../Components/PageHeader/PageHeader"
import AboutSection from "../Components/AboutComponents/AboutSection";
import TimelineComponent from "../Components/AboutComponents/TimelineComponent";
import CounterComponent from "../Components/AboutComponents/CounterComponent";


const AboutPage = () => {

  const {updateAboutPage} = useGlobalContext();


  useEffect(()=> updateAboutPage(), []);


  return (
    <>
      <PageHeader/>
      <AboutSection/>
      <CounterComponent/>
      <TimelineComponent/>
    </>
  )
}

export default AboutPage