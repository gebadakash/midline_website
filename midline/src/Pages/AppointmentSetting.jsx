import React, { Suspense, useEffect } from "react";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const Excellence = React.lazy(()=> import("../Components/ServicesComponents/Excellence"));
const Service = React.lazy(()=> import("../Components/Service/Service"));
const Contact = React.lazy(()=> import("../Components/HomeComponents/Contact"));
const useGlobalContext = React.lazy(()=> import ("../Components/Context/context"));


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
    <Suspense>
      <PageHeader/> 
      <Excellence/>  
      <Service serviceItems={AppointmentServices}/> 
      <Contact/>
    </Suspense>
    </>
  )
}

export default AppointmentSetting
