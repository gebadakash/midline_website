import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./AboutSection.css";

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


      return (
        <div className="container-fluid py-5  mt-c mt-in"  data-aos="fade-up" data-aos-delay="500"   style={{ marginTop: "-100px", visibility: "visible"}}>
          <div className="container py-5 mt-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title position-relative pb-3 mb-2">
                  <h2 className="mb-0 pb-0">About Us</h2>
                </div>
                <p className="mb-4" style={{ textAlign: "justify", wordSpacing: "-2px" }}>We help pay per call and pay per click sector build robust practices and all businesses to enable their customers through our call centre and digital services. Headquartered in Nagpur and operating out of multiple delivery clients across Asia and America, we are one of India’s most promising call centre and digital marketing player handling in excess of a huge transactions every day through our offerings.</p>
                <p className="mb-4" style={{ textAlign: "justify", wordSpacing: "-2px" }}>We are servicing businesses of all sizes, with experience in managing customer, we expertly steer our clients through their transformation, empower businesses with nimble solutions that offer scale and deliver unprecedented levels of performance through our partnership driven approach. The growth of calls tech media is spurred by the spirit of individuals who zeal for keeping us ahead of the rest, and constantly rise to the challenges.</p>
                <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeIn" }}>
                  <div className="bg-secondary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-telephone-fill text-white p-2" style={{fontSize:"30px"}}></i>
                  </div>
                  <div className="ps-4">
                                <h4 className="mb-2 text-dark">Call to ask any question</h4>
                                <h5 className="text-dark mb-0"> +91 8830826434 </h5>
                            </div>
                </div>
                <NavLink to="/contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s" style={{ visibility: "visible", animationDelay: "0.9s", animationName: "zoomIn" }}>Contact Us</NavLink>
              </div>
              <div className="col-lg-5 mt-sc" style={{ minHeight: "500px" }}>
                <div className="position-relative imageSection h-100">
                  <img alt="About us" className="position-absolute w-100 h-100 rounded"  data-aos="fade-up" src="images/about-2.jpg" style={{ objectFit: "contain", visibility: "visible"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AboutSection
