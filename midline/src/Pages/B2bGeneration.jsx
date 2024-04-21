import PageHeader from "../Components/PageHeader";
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/context"
import OptimiseSection from "../Components/ProjectsComponents/OptimiseSection";

const B2bGeneration = () => {

  const {B2BLeadGeneration} = useGlobalContext();


  useEffect(()=> B2BLeadGeneration(), []);


  return (
    <>
      <PageHeader/>
      <ProjectDetails/>
      <OptimiseSection/>
    </>
  )
}

export default B2bGeneration
