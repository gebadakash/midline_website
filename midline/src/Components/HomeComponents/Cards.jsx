import { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [services] = useState([
    {
      title: "Our Mission",
      content:
        "Our vision for cold calling transcends traditional sales tactics. We envision a landscape where every call is an opportunity for authentic connection and meaningful impact. Through empathy, innovation, and a relentless pursuit of excellence, we strive to redefine cold calling as a strategic tool for building lasting relationships and driving sustainable growth. Our vision is to empower businesses to approach cold calling with confidence, knowing that each interaction has the potential to create value and foster trust. Join us in shaping the future of cold calling, where every conversation is a step toward mutual success and prosperity.",
    },
    {
      title: "Our Vision",
      content:
        "Cold calling isn't just about making sales; it is about forging meaningful connections. Our mission is to redefine cold calling as a platform for genuine engagement and mutual success. We are committed to understanding client needs, crafting personalized solutions, and building trust through empathetic communication. Our vision is to empower businesses to approach cold calling with confidence With an individualized approach and an unwavering dedication to excellence, we aim to transform every cold call into an opportunity for growth and partnership. Join us as we redefine the way businesses connect and thrive in today's competitive landscape.",
    },
  ]);

  return (
    <section
      className="container-fluid py-5"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      style={{ visibility: "visible" }}
    >
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow zoomIn"
              data-wow-delay={`0.${3 * (index + 1)}s`}
              style={{
                visibility: "visible",
                animationDelay: `0.${3 * (index + 1)}s`,
                animationName: "zoomIn",
              }}
            >
              <div className="service-item shadow rounded d-flex flex-column align-items-center justify-content-center text-center">
                <h4
                  className="mb-3 text-danger"
                  style={{ fontSize: "30px", fontWeight: "600" }}
                >
                  {service.title}
                </h4>
                <p
                  className="m-0"
                  style={{ textAlign: "justify", wordSpacing: "-2px" }}
                >
                  {service.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
