import React, { Suspense, useEffect } from "react";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const useGlobalContext = React.lazy(()=> import ("../Components/Context/context"));
const Excellence = React.lazy(()=> import("../Components/ServicesComponents/Excellence"));
const Service = React.lazy(()=> import("../Components/Service/Service"));
const Contact = React.lazy(()=> import("../Components/HomeComponents/Contact"));

const Sales = () => {

  const salesInfo = [
    {
        text: "Sales Process: Sales is the process of persuading potential customers to buy a company's products or services."
    },
    {
        text: "Sales Activities: Salespeople identify leads, attract interest, present, handle objections, and close deals to achieve goals."
    },
    {
        text: "Service Channels: Customer support spans face-to-face, phone, email, live chat, social media, and self-service options."

    },

    {
      text: "Customer Service Benefits: Prioritizing exceptional service yields higher satisfaction, increased loyalty, and positive referrals, driving long-term success."
    },


];


  const {sales} = useGlobalContext();

  useEffect(()=> sales(), []);

  return (
    <>
    <Suspense>
         <PageHeader/> 
         <Excellence/>
         <Service serviceItems={salesInfo}/>   
         <Contact/>
    </Suspense>
    </>
  )
}

export default Sales
