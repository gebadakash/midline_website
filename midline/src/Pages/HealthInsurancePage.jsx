import React, { Suspense, useEffect } from "react";
const useGlobalContext = React.lazy(()=> import ("../Components/Context/context"));
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const ProjectDetails = React.lazy(()=> import ("../Components/ProjectsComponents/ProjectDetails"));
const OptimiseSection = React.lazy(()=> import("../Components/ProjectsComponents/OptimiseSection"));

const HealthInsurancePage = () => {

  const {HealthInsurancePPC} = useGlobalContext();

  useEffect(()=> HealthInsurancePPC(), []);

  return (
    <>
    <Suspense>
      <PageHeader/>
      <ProjectDetails/>
      <OptimiseSection/>
    </Suspense>
    </>
  )
}

export default HealthInsurancePage