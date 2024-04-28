import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
import PageHeader from "../Components/PageHeader/PageHeader"
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import OptimiseSection from "../Components/ProjectsComponents/OptimiseSection";


const HealthInsurancePage = () => {

  const {HealthInsurancePPC} = useGlobalContext();

  useEffect(()=> HealthInsurancePPC(), []);

  return (
    <>
      <PageHeader/>
      <ProjectDetails/>
      <OptimiseSection/>
    </>
  )
}

export default HealthInsurancePage