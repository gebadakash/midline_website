import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import "./TeamSection.css";
const TeamSection = () => {
  const teamMembers = [
    { name: 'Mr. Komal Kumbhare', role: 'Chief Executive Officer', imgSrc: 'images/founderimg.png' },
  ];

  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Meet our Chief Executive Officer</h2>
          <p>Leading with vision and passion, our CEO guides us toward excellence, shaping the future of our company with brilliance.</p>
        </div>

        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch member-item">
              <div className="member" data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="member-img">
                  <img src={member.imgSrc} className="img-fluid" alt={member.name} />
                  <div className="social mb-2 d-flex justify-content-center">
                    <a className='me-2' href="#"><FiTwitter/></a>
                    <a className='me-2' href="#"><FiFacebook/></a>
                    <a className='me-2' href="#"><FiInstagram/></a>
                    <a className='me-2' href="#"><FiLinkedin/></a>
                  </div>
                </div>
                <div className="member-info" style={{position: "relative", left: "50px"}}>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
