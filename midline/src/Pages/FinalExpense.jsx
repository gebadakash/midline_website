import PageHeader from "../Components/PageHeader/PageHeader"
import ProjectDetails from "../Components/ProjectsComponents/ProjectDetails";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
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
