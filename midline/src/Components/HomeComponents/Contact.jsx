import { BsEnvelope } from 'react-icons/bs';
import { BiPhoneCall } from "react-icons/bi";
import { MdShareLocation } from "react-icons/md";
import { toast } from 'react-toastify';
import "./Contact.css";
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const[contact, setContact] = useState({

    username:"",
    email:"",
    subject:"",
    message:"",

  });

  const handleInput = (e) => {

    const name = e.target.name;

    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
      
    });


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { username, email, subject, message } = contact;
  
    try {
      const result = await axios.post('http://localhost:3001/save', { username, email, subject, message });
      console.log(result);
      toast.success("Thanks for choosing us! Our team will contact you soon.");
      setContact({
        username: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  }
  

  return (
    <section id="contact" className="contact">
      <div className="container aos-animate" data-aos="zoom-out-left" data-aos-duration="2000">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact us for any inquiries or assistance. We're here to help you navigate through any challenges and provide the support you need for a smooth experience.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <MdShareLocation style={{fontSize:"52px", color:"#e03a3c"}}/>
                  <h3>Our Address</h3>
                  <p>Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <BsEnvelope style={{fontSize:"52px", color:"#e03a3c"}}/>
                  <h3>Email Us</h3>
                  <p>sales@midlinemedia.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <BiPhoneCall style={{fontSize:"52px", color:"#e03a3c"}}/>
                  <h3>Call Us</h3>
                  <p>+91 8830826434</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="username" className="form-control" id="name" placeholder="Your Name" value={contact.username} onChange={handleInput} required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={contact.email} onChange={handleInput} required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={contact.subject} onChange={handleInput} required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="8" placeholder="Message" value={contact.message} onChange={handleInput} required></textarea>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
