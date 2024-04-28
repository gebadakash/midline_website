import "./ServiceSection.css";
import { GoBriefcase } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { BiBullseye } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const ServiceSection = () => {

  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);


  const servicesData = [
    {
      icon: (
        <GoBriefcase
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Appointment setting",
      description:
        "Appointment setting, cold calling, and chat support are crucial components of our customer engagement strategy. we streamline the process of connecting with potential clients, ensuring efficient utilization of resources and time",
      Link:"/appointmentSetting"
    },
    {
      icon: (
        <BiGitRepoForked
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Lead generation",
      description:
        "Click to call lead generation is a tactic used in inbound marketing strategies. It involves using a dedicated Facebook call capture/tracking phone number to generate leads from Facebook Ads.",
      Link:"/"
    },
    {
      icon: (
        <BiBullseye
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Cold calling",
      description:
        "Cold calling serves as a proactive approach to reaching out to prospects, allowing us to initiate meaningful conversations and establish rapport, ultimately paving the way for fostering long-lasting client relationships.",
      Link:"/ColdCalling"
    },
    {
      icon: (
        <CgWebsite
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Chat support",
      description:
        "Chat support serves as an invaluable resource for addressing customer queries promptly, providing real-time assistance, and nurturing positive customer relationships, thereby enhancing overall satisfaction and retention.",
      Link:"/"
    },
    {
      icon: (
        <AiOutlineCustomerService
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Customer service",
      description:
        "Customer service involves providing assistance and support to customers before, during, and after their purchase, ensuring their satisfaction and fostering long-term relationships.",
      Link:"/customerservice"
    },
    {
      icon: (
        <IoBarChartSharp
          style={{ float: "left", color: "#e03a3c", fontSize: "40px" }}
        />
      ),
      title: "Sales",
      description:
        "Sales refers to the process of persuading, convincing, and ultimately securing commitments from potential customers to purchase products or services offered by a business.",
      Link:"/sales"
    },
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Empowering Your Journey: Explore Our Comprehensive Range of
            Services.
          </p>
        </div>

        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-6 mt-4 mt-md-0">
              <div
                className="icon-box"
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                {service.icon}
                <h4>
                  <NavLink className="navlink" to={service.Link}>{service.title}</NavLink>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
