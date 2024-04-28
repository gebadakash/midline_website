import React, { Suspense, useEffect } from "react";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const ProjectDetails = React.lazy(()=> import("../Components/ProjectsComponents/ProjectDetails"));
const OptimiseSection = React.lazy(()=> import ("../Components/ProjectsComponents/OptimiseSection"));
const useGlobalContext = React.lazy(()=> import ("../Components/Context/context"));


const B2bGeneration = () => {

  const {B2BLeadGeneration} = useGlobalContext();


  useEffect(()=> B2BLeadGeneration(), []);


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

export default B2bGeneration
