import { useEffect } from "react";
import PageHeader from "../Components/PageHeader"
import { useGlobalContext } from "../Components/context"
import Excellence from "../Components/ServicesComponents/Excellence";
import Service from "../Components/Service";
import Contact from "../Components/HomeComponents/Contact";
import GraphicsData from "../Components/ServicesComponents/GraphicsData";

const CustomerService = () => {

  const CustomerServices = [
    {
        text: "Resolving Customer Issues: Representatives address and resolve customer complaints and concerns promptly and effectively, aiming for a satisfactory outcome."
    },
    {
        text: "Providing Support: Customer service teams offer support and guidance to customers who encounter difficulties with products or services."
    },
    {
        text: "Processing Orders and Returns: Customer service representatives assist customers with placing orders, tracking shipments,and processing returns or exchanges."

    },

    {
      text: "Relationship Building: Effective customer service extends beyond issue resolution.fostering loyalty, repeat business, and referrals."
    },

    {
      text: "Gathering Feedback: Customer service teams often gather feedback from customers about their experiences with services,and interactions with the company."
    },

    {
      text: "Maintaining Professionalism: Customer service representatives are expected to maintain a professional manner, even in challenging situations."
    },


];

    const {CustomerService} = useGlobalContext();

    useEffect(()=>  CustomerService(), []);

    
  return (
    <>
     <PageHeader/> 
     <Excellence/>
     <Service serviceItems={CustomerServices}/>
     <GraphicsData/>
     <Contact/>
    </>
  )
}

export default CustomerService
