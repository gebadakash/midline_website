import PageHeader from "../Components/PageHeader/PageHeader"
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
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
