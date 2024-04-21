import { BiCubeAlt } from 'react-icons/bi';
import { BsChevronRight, BsReceipt, BsImages, BsShield } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import './AboutSection.css';
import { useEffect } from 'react';

const AboutSection = () => {
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


  const iconBoxes = [
    { icon: BsReceipt, title: 'Call Center Management', description: 'Call center management involves overseeing operations, personnel, and technology to optimize customer service delivery and efficiency.' },
    { icon: BiCubeAlt, title: 'Servicing Multiple Domains', description: 'Servicing multiple domains entails managing customer inquiries and support across various industries or areas of expertise within a single call center operation.' },
    { icon: BsImages, title: 'Highly Professional Staff', description: 'Highly professional staff are equipped with exceptional skills, knowledge, and demeanor to deliver outstanding service and represent the organization with excellence.' },
    { icon: BsShield, title: '100% Satisfaction Guarantee', description: 'A 100% satisfaction guarantee assures customers that their experience will meet or exceed expectations, with any concerns promptly addressed to ensure complete satisfaction.' },
  ];

  return (
    <section id="about" className="about section-bg mt-5">
      <div className="container">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch" data-aos="zoom-in" data-aos-duration="1000">
            <div className="content">
              <h3>Expert in Call Center Services</h3>
              <p className='aboutSectionPara'>
              Midline media solution established in early 2020 as a consultant,<br/> has quickly evolved into a dynamic and diversified company. With a team of passionate experts hailing from diverse sectors, we are committed to facilitating the transformation of our client's businesses.
              </p>
              <NavLink to="/about" className="about-btn navlink"><span>About us</span> <BsChevronRight /></NavLink>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {iconBoxes.map((box, index) => (
                  <div key={index} className="col-md-6 icon-box" data-aos="zoom-in" data-aos-duration="1000">
                    <box.icon style={{fontSize:"40px", color:"#e03a3c", marginBottom:"10px"}}/>
                    <h4>{box.title}</h4>
                    <p>{box.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
