import { useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";
import axios from 'axios';
import {toast} from 'react-toastify';
import formImage from "../../assets/images/c2c_bg1.jpg";


const OptimiseSection = () => {

    
    const [formData, setFormData] = useState({

        username:'',
        email:'',
        contact:'',
        work:'',
        message:''

})


const handleChange = e =>{
        
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleSubmit = async e =>{

    e.preventDefault();
    try {
        await axios.post('https://midlinesmedia.com/backend/save', formData);
        setFormData({
            username:'',
            email:'',
            contact:'',
            work:'',
            message:''
        });
        toast.success('Data submitted sucessfully ! our Team Reach You soon..');
      } catch (error) {
        console.error('Registration failed:', error);
        toast.error('Something went wrong !');
      }
}


return (
    <div className="container-fluid bg-registration py-5 mt-5 mb-5" id="call" style={{marginTop: '-100px', backgroundImage: `url(${formImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="container-fluid py-5" data-aos="fade-up" data-aos-delay="100">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="section-title position-relative pb-3 mb-5" style={{marginTop: '-40px'}}>
                            <h1 className="mb-0 text-white">CONTACT US FOR PROJECTS</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4  text-white"><i className="bi bi-reply-fill me-2"></i>Reply within 24 hours</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4  text-white"><i className="bi bi-telephone-fill me-2"></i>24 hrs support</h5>
                            </div>
                        </div>
                        <p className="mb-4 text-white" style={{textAlign: 'justify'}}>Midline, a premier provider of business process outsourcing solutions, is dedicated to streamlining operations and enhancing customer satisfaction. With a commitment to excellence, we offer a range of tailored services designed to optimize efficiency and drive growth for our clients. Our comprehensive approach combines cutting-edge technology, industry expertise, and a customer-centric focus to deliver measurable results. Partner with Midline and experience the difference in your business operations.</p>
                        <p className="mb-4 text-white" style={{textAlign: 'justify'}}>With a proven track record of success, Midline stands as a beacon of innovation in the realm of business process outsourcing. Our team of dedicated professionals is committed to not just meeting but exceeding the expectations of our clients. By leveraging state-of-the-art tools and methodologies, we empower businesses to thrive in an increasingly competitive landscape. From back-office support to customer care solutions, we tailor our offerings to address the unique needs of each client, ensuring maximum impact and sustainable growth. Trust Midline to be your partner in progress, and together, we'll unlock new possibilities for your business.</p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-telephone-fill text-danger border p-2 me-2" style={{fontSize:"30px"}}></i>
                            </div>
                            <div className="ps-4">
                                <h4 className="mb-2 text-white">Call to ask any question</h4>
                                <h5 className="text-white mb-0"> +91 8830826434 </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="rounded h-100 d-flex align-items-center p-5 wow zoomIn c1" data-wow-delay="0.9s" style={{padding: '17px !important', backgroundColor:"rgb(91, 85, 85)"}}>
                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-0 text-white text-center">Get in Touch</h1>
                                <p></p>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" name="username" placeholder="Your Name" value={formData.username} onChange={handleChange} style={{height: '55px'}} required />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={{height: '55px'}} required />
                                    </div>
                                    
                                     <div className="col-12">
                                        <input type="text" className="form-control bg-light border-0" name="contact" placeholder="Your Number" value={formData.contact} onChange={handleChange} style={{height: '55px'}} required />
                                    </div>
                                    <div className="col-12">
                                        <select className="form-select bg-light border-0" value={formData.work} onChange={handleChange} name="work" style={{height: '55px'}}>
                                            <option selected>Select A Option</option>
                                            <option value="Staffing">About Staffing</option>
                                            <option value="Project">About Project</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows="3" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-danger w-100 py-3" name="submit" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default OptimiseSection
