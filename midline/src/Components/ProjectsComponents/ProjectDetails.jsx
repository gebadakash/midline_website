import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from "../../Components/Context/context";


const ProjectDetails = () => {


    const {ParaTitle,ParaSubtitle,image,ButtonText,para1,para2,benifitsPara} = useGlobalContext();

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
        <div className="container-fluid py-5 " data-aos="fade-up" data-aos-delay="500" style={{ marginTop: '-40px', visibility: 'visible',}}>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-5 mt-c" style={{ minHeight: '500px' }}>
                <div className="position-relative h-100">
                  <img alt="Helath" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={image} style={{ objectFit: 'contain !important', visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }} />
                </div>
                
              </div>
              <div className="col-lg-7 mt-sc">
                <div className="section-title position-relative mb-1">
                  <h2 className="mb-0">{ParaTitle}</h2>
                  <h5 className="fw-bold text-danger text-uppercase mt-3">{ParaSubtitle}</h5>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>{para1}</p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>{para2}</p>
                <h5 className="fw-bold text-danger text-uppercase mt-3">Benifits are as Follows</h5>
                <p className="mb-4" style={{ textAlign: 'justify' }}>{benifitsPara}</p>
                <div className="row g-0 mb-3"></div>
                <NavLink to="/contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>{ButtonText}</NavLink>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProjectDetails
