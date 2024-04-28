import React, { Suspense } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/Context/context";
const PageHeader = React.lazy(()=> import("../Components/PageHeader/PageHeader"));
const Contact = React.lazy(()=> import("../Components/HomeComponents/Contact"));


const ContactPage = () => {
  const { updateContactPage } = useGlobalContext();

  useEffect(() => {
    updateContactPage();
  }, []); 

  return (
    <>
    <Suspense>
      <PageHeader />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.918221444872!2d79.03522421083778!3d21.11582628047426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c105be93e64b%3A0x633455db6ed2def4!2sELIORA%20TECHNOLOGY%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1713269677574!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Contact />
    </Suspense>
    </>
  );
};

export default ContactPage;
