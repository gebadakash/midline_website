import React, { Suspense, useEffect } from "react";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
import { useGlobalContext } from "../Components/Context/context";
const ProjectDetails = React.lazy(()=> import ("../Components/ProjectsComponents/ProjectDetails"));
const OptimiseSection = React.lazy(()=> import("../Components/ProjectsComponents/OptimiseSection"));

const FinalExpense = () => {

    const {FinalExpense} = useGlobalContext();


    useEffect(()=> FinalExpense(), []);


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

export default FinalExpense
