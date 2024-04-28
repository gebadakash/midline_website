import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Components/Context/context";



const Excellence = () => {

  const {ParaTitle,ParaSubtitle,para1,image,ButtonText} = useGlobalContext();

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
    <div
      className="container-fluid"
      data-aos="zoom-in"
      data-aos-delay="500" 
      style={{
        visibility: "visible",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="section-title position-relative">
              <h2 className="mb-0">
                {ParaTitle}
              </h2>
              {/* <h5 className="fw-bold text-danger text-uppercase mt-5">{ParaSubtitle}</h5> */}
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              {para1}
            </p>
            <NavLink to="/contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>{ButtonText}</NavLink>
          </div>
          <div className="col-lg-6" style={{ minHeight: "180px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={image}
                style={{
                  objectFit: "cover",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "zoomIn",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excellence
