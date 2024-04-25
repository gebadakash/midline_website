import "./Header.css";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/midlineLogo1.jpg";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { toast } from 'react-toastify';

const navLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "about" },
  {
    title: "Services",
    to: "services",
    dropdownItems: [
      { title: "Appointment setting", to: "/appointmentSetting" },
      { title: "Customer Service", to: "/customerservice" },
      { title: "Cold calling", to: "/ColdCalling" },
      { title: "Sales", to: "/sales" },
    ],
  },
  {
    title: "Project",
    to: "project",
    dropdownItems: [
      { title: "Health Insurance PPC", to: "/HealthInsurance" },
      { title: "Final Expense", to: "/FinalExpense" },
      { title: "Medicare Supplement", to: "/MedicareSupplement" },
      { title: "B2B Lead Generation", to: "/B2bGeneration" },
    ],
  },
  { title: "Contact", to: "/contact" },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scrolled, setScrolled] = useState(false);

  const handleNavbarToggle = () => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const[formData, setContact] = useState({

    username:"",
    email:"",
    contact:"",
    message:"",

  });

  const handleInput = (e) => {

    const name = e.target.name;

    const value = e.target.value;

    setContact({
      ...formData,
      [name]: value,
      
    });


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { username, email, contact, message } = formData;
  
    try {
      const result = await axios.post('http://localhost:3001/save', { username, email, contact, message });
      console.log(result);
      toast.success("Thanks for choosing us! Our team will contact you soon.");
      setContact({
        username: "",
        email: "",
        contact: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  }



  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark  px-5 py-3 py-lg-0 `}
        style={{ background: "rgb(27, 27, 27)" }}
      >
        <a href="index" className="navbar-brand p-0">
          <img
            className="img-fluid float-right"
            src={Logo}
            width="150px"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {navLinks.map((navItem, index) => (
              <React.Fragment key={index}>
                {navItem.dropdownItems ? (
                  <div className="nav-item dropdown">
                    <NavLink
                      to={navItem.to}
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      onClick={(e) => e.preventDefault()}
                    >
                      {navItem.title}
                    </NavLink>
                    <div
                      className="dropdown-menu m-0"
                      aria-labelledby="navbarDropdown"
                    >
                      {navItem.dropdownItems.map((dropdownItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={dropdownItem.to}
                          onClick={() => {
                            handleNavbarToggle();
                          }}
                          className="dropdown-item"
                        >
                          {dropdownItem.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : navItem.href ? (
                  <a
                    href={navItem.href}
                    target={navItem.target}
                    className="nav-item nav-link"
                    onClick={() => {
                      handleNavbarToggle();
                    }}
                  >
                    {navItem.title}
                  </a>
                ) : (
                  <NavLink
                    exact
                    to={navItem.to}
                    className="nav-item nav-link"
                    onClick={() => {
                      handleNavbarToggle();
                    }}
                  >
                    {navItem.title}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>
          <NavLink
            className="btn btn-danger py-2 px-4 ms-3"
            onClick={handleShow}
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-light">
          <Modal.Title className="text-dark">Quick Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <form onSubmit={handleSubmit} method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example:Rohan Joshi"
                required
                autoFocus
                name="username"
                value={formData.username} onChange={handleInput}
              />
              <Form.Label className="mt-2 text-dark">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                autoFocus
                name="email"
                value={formData.email} onChange={handleInput}
              />
              <Form.Label className="mt-2 text-dark">Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example:+91 666654456"
                required
                autoFocus
                name="contact"
                value={formData.contact} onChange={handleInput}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-dark">Message</Form.Label>
              <Form.Control as="textarea"  name="message" value={formData.message} onChange={handleInput} rows={3} required />
            </Form.Group>
 
            <Modal.Footer className="bg-light">
              <Button variant="danger" type="submit">
                Submit
              </Button>
              <Button className="bg-dark" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
