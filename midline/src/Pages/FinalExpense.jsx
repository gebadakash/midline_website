import PageHeader from "../Components/PageHeader";
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/context"
import OptimiseSection from "../Components/ProjectsComponents/OptimiseSection";


const FinalExpense = () => {

    const {FinalExpense} = useGlobalContext();


    useEffect(()=> FinalExpense(), []);


  return (
    <>
      <PageHeader/>
      <ProjectDetails/>
      <OptimiseSection/>
    </>
  )
}

export default FinalExpense
