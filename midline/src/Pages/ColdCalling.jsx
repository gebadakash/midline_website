import React, { Suspense, useEffect } from "react";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const useGlobalContext = React.lazy(()=> import ("../Components/Context/context"));
const Excellence = React.lazy(()=> import("../Components/ServicesComponents/Excellence"));
const Service = React.lazy(()=> import("../Components/Service/Service"));
const GraphicsData = React.lazy(()=> import("../Components/ServicesComponents/GraphicsData"));

const ColdCalling = () => {

  const ColdCalling = [
    {
        text: "Prospecting: This is the initial stage of planning. Salespeople actively identify prospective clients who are a good fit for the company's product."
    },
    {
        text: "Qualification & Initiation: The salesman initiates contact with the prospect to introduce themselves, their business, and the purpose of doing so."
    },
    {
        text: "Processing Orders and Returns: Customer service representatives assist customers with placing orders, tracking shipments,and processing returns or exchanges."

    },

    {
      text: "Value Proposition: The main idea behind the call is that the salesperson directly addresses the company's specific needs and clear benefits of their solution."
    },

    {
      text: "Managing Objections: Potential customers frequently have queries or worries. It is important to prepare well for common objections and have responses ready."
    },

];

  const {coldCalling} = useGlobalContext();

  useEffect(()=> coldCalling(), []);

  return (
    <>
    <Suspense>
      <PageHeader/> 
      <Excellence/>
      <Service serviceItems={ColdCalling}/>
      <GraphicsData/>
    </Suspense>
    </>
  )
}

export default ColdCalling
