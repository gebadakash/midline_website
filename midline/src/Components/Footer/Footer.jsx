import "./Footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/midlineLogo1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect} from "react";

const Footer = () => {


  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = document.querySelectorAll(".navlink");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  // Footer data
  const footerData = [
    {
      title: "Short Link",
      links: [
        { text: "About us", to: "/about" },
        { text: "Contact us", to: "/contact" },
        { text: "Our Services", to: "/service" },
        { text: "Our Projects", href: "#tabs" },
        { text: "Latest Blog", to: "/" },
      ],
    },
  ];

  return (
    <div
      className="container-fluid footer wow fadeIn"
    >
      <div
        className="container pt-5 pb-4"
      >
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <a href="#" style={{ textDecoration: "none" }}>
              {/* <h1 className="text-white fw-bold d-block mb-0">
                MID<span className="text-secondary">LINE</span>{" "}
              </h1>
              <h5 className="text-white d-block mt-0">Media Solution </h5> */}
              <img
                src={Logo}
                style={{ width: "220px", position: "relative", right: "30px" }}
              />
            </a>
            <p className="mt-2 text-light" style={{ textAlign: "left" }}>
              Midline is a leading provider of business process outsourcing
              solutions, aimed at helping businesses streamline their operations
              while ensuring customer satisfaction.
            </p>

            <div className="d-flex hightech-link">
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
              <a
                href=""
                className="btn-light nav-fill btn btn-square rounded-circle me-0"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
              </a>
            </div>
          </div>
          {footerData.map((column, index) => (
            <div key={index} className="col-lg-2 col-md-6 titleDiv footer-top">
              <h4
                className="h3 text-white title "
                style={{ textDecoration: "none" }}
              >
                {column.title}
              </h4>
              <div className="mt-4 d-flex flex-column contact-link">
                {column.links.map((link, linkIndex) => (
                  <NavLink
                    key={linkIndex}
                    to={link.to}
                    href={link.href}
                    className="mb-2 text-white navlink"
                    style={{ textDecoration: "none" }}
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-white me-2"
                    />
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="col-lg-3 col-md-6 titleDiv footer-top">
            <h4
              href="#"
              className="h3 text-white title"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </h4>
            <div className="text-white mt-4 d-flex flex-column">
              <a
                href="https://maps.app.goo.gl/xCbT4taYUpmGdZXF7"
                className="pb-3 text-light border-bottom border-secondary"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-white me-2"
                />{" "}
                Opposite Bank of Baroda, Ward{" "}
                <p className="mb-0 ms-4">Number 3, Parsodi, Trimurtee Nagar,</p>
                <p className="ms-4">Nagpur, Maharashtra 440022</p>
              </a>
              <a
                href="tel: +918956101181"
                className="py-3 text-light border-bottom border-secondary"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-white me-2 fa-flip-horizontal"
                />{" "}
                +91 8830826434
              </a>
              <a
                href="mailto:sales@midlinemedia.com"
                className="py-3 text-light border-bottom border-secondary"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white me-2"
                />{" "}
                sales@midlinemedia.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter titleDiv footer-top">
            <h4 className="text-white title">Join Our Newsletter</h4>
            <p className="text-white">
              Catch the latest updates and exclusive offers straight to your
              inbox. Sign up for our newsletter today!
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        <hr className="text-light mt-5 mb-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light">
              <span
                className="me-2"
                style={{ textDecoration: "none", color: "#e03a3c" }}
              >
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="text-white me-2"
                />
                Midline Media Solution
              </span>
              all right are reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
