import { useEffect, useState } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { FaLaptopMedical } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./Projects.css";


const TabContent = ({ id, title, content, imgSrc, Link }) => {

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


  return (
    <div className="tab-pane" id={id} role="tabpanel">
      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
          <h3>{title}</h3>
          {/* <p>{content}</p> */}
          <p className="fst-italic" style={{textAlign:"justify"}}>
            {content}
          </p>
          <NavLink to={Link} className="about-btn navlink"><span>Read More</span></NavLink>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <img src={imgSrc} alt="" className="img-fluid img-project" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const tabsData = [
    {
      id: "tab-1",
      title: "Health Insurance PPC",
      content:
        `To run a successful health insurance campaign, it is important to establish and monitor key performance indicators (KPIs), test for quality assurance, and recognize the audience's needs when creating effective calls to action. Healthcare call centers need to overcome challenges such as understanding insurance and seeking treatment. Best practices for new patients include identifying and documenting goals, starting migration in small steps, providing proper onboarding, and using technology to improve the patient experience..........`,
      imgSrc: "images/tabs-1.jpg",
      Link:"/HealthInsurance"
    },
    {
      id: "tab-2",
      title: "Final Expense",
      content:
        `Click-to-call lead generation is a tactic used in inbound marketing strategies. It involves using a dedicated Facebook call capture/tracking phone number to generate leads from Facebook Ads Business Nucleus offers click-to-call as part of their marketing services. Other effective strategies for lead generation include webinars, SEO, and content marketing.
        The strategies for click-to-call lead generation include creating a new lead generation campaign in Ads Manager and selecting phone as the "lead method" under the ad set settings Using a dedicated Facebook call capture/tracking phone number is also important for generating leads from call-now ad units Business Nucleus offers click-to-call as an effective tactic within their marketing services........`,
      imgSrc: "images/tabs-2.jpg",
      Link:"/FinalExpense"
    },
    {
      id: "tab-3",
      title: "Medicare Supplement",
      content:
        `We run a Medicare supplement and advantage campaign. Custom calling campaigns can be created for live transfer leads, and sales scripts can also be used to effectively sell Medicare insurance and set appointments with potential customers Live transfer sales leads for Medicare supplements are purchased from call center providers and top vendors for Medicare supplements and advantage leads include those that offer call center telesales and custom marketing campaigns........`,
      imgSrc: "images/tabs-3.jpg",
      Link:"/MedicareSupplement"
    },
    {
      id: "tab-4",
      title: "B2B Lead Generation",
      content:
        `B2B lead generation is the process of identifying ideal customers for a product or service and attracting them to buy it. It is an essential activity for businesses that primarily sell to other businesses. Demand generation teams share relevant leads with sales, while sales can gain leads directly through their actions, such as emailing. B2B marketers like us use various inbound marketing strategies to drive prospective customers to their organization organically. Expert-approved B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, and email marketing........`,
        imgSrc: "images/tabs-4.jpg",
        Link:"/B2bGeneration"
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Set the initially active tab
    document.getElementById(`tab-${activeTab + 1}`).classList.add('active', 'show');
  }, []);

  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="zoom-in" data-aos-duration="500">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeIn",
          }}
        >
          <h2>Our Projects</h2>
        </div>
        <ul className="nav nav-tabs row d-flex" role="tablist">
          {tabsData.map(({ id, title }, index) => (
            <li key={index} className="nav-item col-3" role="presentation">
              <a
                className={`nav-link ${index === 0 ? "active show" : ""}`}
                data-bs-toggle="tab"
                data-bs-target={`#${id}`}
                aria-selected={index === 0}
                role="tab"
              >
                {index === 0 && <MdHealthAndSafety style={{paddingRight:"15px", fontSize:"48px"}} />}
                {index === 1 && <BiDollarCircle style={{paddingRight:"15px", fontSize:"48px"}} />}
                {index === 2 && <FaLaptopMedical style={{paddingRight:"15px", fontSize:"48px"}} />}
                {index === 3 && <BiCubeAlt style={{paddingRight:"15px", fontSize:"48px"}} />}
                <h4 className="d-none d-lg-block">{title}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {tabsData.map(({ id, title, content, imgSrc, Link }, index) => (
            <TabContent
              key={index}
              id={id}
              title={title}
              content={content}
              imgSrc={imgSrc}
              Link={Link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
