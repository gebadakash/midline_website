// import servicesData from "./data.js";
const servicesData = [
    {
      title: "Automatic Call Distributors (ACD)",
      imageSrc: "images/GD3.png",
      description: `ACD systems route incoming calls to the most appropriate agent based on factors like availability, skills, or priority.
      Automatic Call Distributors (ACDs) efficiently route incoming calls,
      Sorting them swiftly to the right agent's halls.
      With algorithms keen and queues that adjust,
      They streamline contact centers, reducing customer fuss.`,
   
    },
    {
      title: "Interactive Voice Response (IVR)",
      imageSrc: "images/GD5.png",
      description: `IVR systems allow callers to interact with a computerized voice system to route their calls or perform certain tasks (like checking account balances) without needing to speak to an agent.
      Interactive Voice Response (IVR) systems greet callers at first ring,
      Guiding them through options with a robotic, yet friendly ping.
      Press one for support, two for sales, they efficiently direct,
      Empowering callers with choices, a service they'll respect.`,
     
    },
    // Add other service items here in a similar format
    {
      title: "Customer Relationship Management (CRM)",
      imageSrc: "images/GD4.png",
      description: `CRM systems store and manage customer data, interactions, and history, enabling agents to provide personalized service and track customer issues.
      Customer Relationship Management (CRM) tracks every interaction,
      From emails to calls, ensuring no satisfaction distraction.
      With data at fingertips, agents offer personalized care,
      Building loyalty and trust, a relationship beyond compare.`,
  
    },
    // Add other service items here in a similar format
    {
      title: "Computer Telephony Integration (CTI)",
      imageSrc: "images/GD6.png",
      description: `CTI integrates phone systems with computer systems, enabling features like screen-pop, which displays customer information when a call is received, and click-to-dial functionality.Computer Telephony Integration (CTI) bridges the gap between voice and screen,
      Syncing calls with data, making workflows keen.
      With caller info popping up as the phone begins to ring,
      Efficiency soars high, enhancing every customer interaction's wing.`,
  
    },
    // Add other service items here in a similar format
    {
      title: "Predictive Dialers",
      imageSrc: "images/GD7.png",
      description: `Predictive dialers automatically dial multiple numbers simultaneously and connect answered calls to available agents, increasing agent productivity by reducing downtime between calls.
      Predictive Dialers anticipate the next call to make,
      Dialing numbers swiftly, for efficiency's sake.
      With algorithms predicting agent availability and pace,
      Productivity rises, in the telemarketing race.`,
   
    },
    // Add other service items here in a similar format
    {
      title: "Speech Analytics",
      imageSrc: "images/GD8.png",
      description: `Speech analytics software analyzes recorded calls to identify trends, customer sentiment, and areas for improvement in agent performance or customer experience.
      Speech Analytics listens closely to every spoken word,
      Parsing conversations for insights that are preferred.
      With advanced algorithms, patterns and trends it deciphers,
      Unlocking valuable data for business leaders' desires.`,
   
    },
    {
      title: "Multi-channel Support",
      imageSrc: "images/GD9.png",
      description: `With the rise of digital communication channels, call centers often integrate technologies for handling emails, live chat, social media messages, and SMS alongside traditional phone calls.
      Multi-channel Support embraces diverse communication lanes,
      From chat to email, ensuring no inquiry wanes.
      With seamless transitions 'cross platforms, agents swiftly adapt,
      Delivering consistent service, no matter the chat or map.`,
   
    }
  ];
  
  
  const ServiceItem = ({ title, imageSrc, description }) => (
    <div className="col-lg-4 col-md-6" data-aos="flip-left" data-aos-duration="1000">
      <div className="service-item bg-white rounded d-flex flex-column text-center align-items-center justify-content-center shadow p-5" style={{ minHeight: "543px" }}>
        <div>
          <img alt={title} src={imageSrc} style={{ width: "90px", paddingTop: "30px" }} />
        </div>
        <h3 className="mb-3 pt-3 fw-bold text-danger ">{title}</h3>
        <h6 className="m-0" style={{ textAlign: "justify", wordSpacing: "-3px" }}>
          {description}
        </h6>
      </div>
    </div>
  );
  
  const GraphicsData = () => (
    <div className="container-fluid py-5 wow fadeInUp mt-c mt-s" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="mb-0">Technologies We Use</h2>
        </div>
        <div className="row g-5">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default GraphicsData;