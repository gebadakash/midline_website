import { useEffect } from "react";
import PageHeader from "../Components/PageHeader/PageHeader"
import { useGlobalContext } from "../Components/Context/context";
import Excellence from "../Components/ServicesComponents/Excellence";
import Service from "../Components/Service/Service";
import Contact from "../Components/HomeComponents/Contact";

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
         <PageHeader/> 
         <Excellence/>
         <Service serviceItems={salesInfo}/>   
         <Contact/>
    </>
  )
}

export default Sales
