import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import { useGlobalContext } from "../Components/context";
import Excellence from "../Components/ServicesComponents/Excellence";
import Service from "../Components/Service";
import Contact from "../Components/HomeComponents/Contact";

const AppointmentSetting = () => {


  const AppointmentServices = [
    {
        text: "Connecting Salespeople and Leads: Appointment setting bridges the gap between salespeople and potential customers (prospects) by scheduling meetings."
    },
    {
        text: "Progressing Through the Sales Funnel: By securing appointments, appointment setting helps move leads further along the sales process toward a potential sale."
    },
    {
        text: "Key for Sales & Marketing: Appointment setting is pivotal for industries relying on personal interaction for closing deals."

    },

    {
      text: "Face-to-Face Interaction: Appointment setting is particularly valuable in industries where in-person meetings or consultations are important for securing sales."
    },


];


  const {AppointmentSetting} = useGlobalContext();

  useEffect(()=> AppointmentSetting(), []);

  return (
    <>
      <PageHeader/> 
      <Excellence/>  
      <Service serviceItems={AppointmentServices}/> 
      <Contact/>
    </>
  )
}

export default AppointmentSetting
