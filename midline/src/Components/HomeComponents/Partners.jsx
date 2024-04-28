import "./Partners.css";
import client4 from "../../assets/images/client-4.png";
import client1 from "../../assets/images/client-1.jpg";
import client2 from "../../assets/images/client-2.jpg";
import client3 from "../../assets/images/client-3.jpg";

const Partners = () => {
  const partnersData = [
    { name: "VIP Response", imgSrc: `${client1}` },
    { name: "Digital Media Solutions", imgSrc: `${client3}` },
    { name: "Jenlin System", imgSrc: `${client2}` },
    { name: "clickDealer", imgSrc: `${client4}` },
  ];

  return (
    <>
      <div className="container section-padding-80-50">
        <div className="container" data-aos="flip-up" data-aos-duration="500">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading text-center wow fadeInUp"
                data-wow-delay="100ms"
              >
                <br />
                <br />
                <br />
                <br />
                <h2 style={{ marginLeft: "-1%" }} className="mb-5">
                  Our Partners
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {partnersData.map((partner, index) => (
              <div key={index} className="col-md-6 col-xl-3">
                <div
                  className="team-content-area text-center mb-30 wow fadeInUp"
                  data-wow-delay={`${100 + index * 200}ms`}
                  style={{
                    height: "361px",
                    visibility: "visible",
                    animationDelay: "300ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="member-thumb">
                    <img src={partner.imgSrc} alt="" className="img-1" />
                  </div>
                  <h5>{partner.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
