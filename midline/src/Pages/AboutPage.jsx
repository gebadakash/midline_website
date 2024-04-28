import React, { Suspense, useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const AboutSection = React.lazy(()=> import("../Components/AboutComponents/AboutSection"));
const TimelineComponent = React.lazy(()=> import("../Components/AboutComponents/TimelineComponent"));
const CounterComponent = React.lazy(()=> import("../Components/AboutComponents/CounterComponent"));


const AboutPage = () => {

  const {updateAboutPage} = useGlobalContext();


  useEffect(()=> updateAboutPage(), []);


  return (
    <>
    <Suspense>
      <PageHeader/>
      <AboutSection/>
      <CounterComponent/>
      <TimelineComponent/>
    </Suspense>
    </>
  )
}

export default AboutPage