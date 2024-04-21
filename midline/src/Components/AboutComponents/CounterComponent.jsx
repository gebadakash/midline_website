import "./Counter.css";

const CounterComponent = () => {
  const counters = [
    { number: `3+`, label: 'Years Experience' },
    { number: `70+`, label: 'Expert Worker' },
    { number: `9+`, label: 'Happy Clients' },
    { number: `250+`, label: 'Best Calling Service' }
  ];

  return (
    <div className="container-fluid py-5 counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-0  pt-0 pt-lg-5 pr-lg-5">
            <div data-aos="fade-up" data-aos-duration="2000" className="aos-init aos-animate">
            <div className="section-title position-relative pb-3 mb-2">
                  <h2 className="mb-0 pb-0">Our Story</h2>
                </div>
              <center><h2 className="mb-4 head">Welcome to MIDLINE Media Solution </h2></center>
              <p style={{ color: 'black', textAlign:"justify",paddingLeft:"30px"}}>Midline media solution founded in 2020. Over the years, we have grown into a versatile and forward-thinking organization, dedicated to empowering businesses across various industries. Our team comprises talented professionals from diverse backgrounds, allowing us to offer comprehensive solutions designed to meet the unique needs of our clients.</p>
              <div className="row" style={{paddingLeft:"30px"}}>
                {counters.map((counter, index) => (
                  <div className="col-sm-6 mb-4" key={index}>
                    <h1 className="text-secondary" data-toggle="counter-up">{counter.number}</h1>
                    <h5 className="font-weight-bold">{counter.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5" id="Experience" data-aos="flip-right" >
            <div className="d-flex flex-column align-items-center justify-content-center spectrum-background h-100 py-5 px-3 count">
              <div data-aos="fade-up" data-aos-duration="2000" className="aos-init aos-animate">
                <i className="bi bi-award text-white mb-5" style={{fontSize:"60px"}}></i>
                <h1 className="display-1 text-white mb-3">3+</h1>
                <h1 className="text-white m-0">Years Experience</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
