import PageHeader from "../Components/PageHeader";
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/context"
import OptimiseSection from "../Components/ProjectsComponents/OptimiseSection";

const MedicareSupplement = () => {

  const {MedicareSupplementAdvantage} = useGlobalContext();


  useEffect(()=> MedicareSupplementAdvantage(), []);


  return (
    <>
      <PageHeader/>
      <ProjectDetails/>
      <OptimiseSection/>
    </>
  )
}

export default MedicareSupplement
