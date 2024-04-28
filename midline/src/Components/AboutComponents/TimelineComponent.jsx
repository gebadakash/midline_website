import "./TimeLine.css";

const TimelineComponent = () => {
  const timelineData = [
    {
      time: '',
      dotClass: 'fb-bg',
      iconClass: 'fa fa-map-marker',
      title: 'Call Routing',
      description: 'An inbound call from a customer experiencing internet connectivity issues is routed to an agent with technical support skills.',
      badges: ['Efficient Routing', 'Technical Expertise']
    },
    {
      time: '',
      dotClass: 'green-one-bg',
      iconClass: 'fa fa-warning',
      title: 'Initial Interaction',
      description: 'The agent greets the customer, identifies themselves, and asks about the problem.',
      badges:['Engaging Welcome', 'First Impression Mastery']
    },

    {
        time: '',
        dotClass: 'green-one-bg',
        iconClass: 'fa fa-warning',
        title: 'Active Listening',
        description: 'The agent listens patiently as the customer describes their internet issues, allowing them to vent their frustration.',
        badges: ['Attentive Listening', 'Effective Communication']
      },

      {
        time: '',
        dotClass: 'green-one-bg',
        iconClass: 'fa fa-warning',
        title: 'Information Gathering',
        description: 'The agent asks clarifying questions to pinpoint the specific problem (e.g., no internet connection, slow browsing speed).',
        badges: ['Thorough Data Collection', 'Insightful Questioning']
      },

      {
        time: '',
        dotClass: 'green-one-bg',
        iconClass: 'fa fa-warning',
        title: 'Knowledge Base Access',
        description: 'The agent utilizes the internal knowledge base to find troubleshooting steps for the reported issue.',
        badges: ['Resourceful Knowledge Retrieval', 'Information Accessibility']
      },

      {
        time: '',
        dotClass: 'green-one-bg',
        iconClass: 'fa fa-warning',
        title: 'Resolution',
        description: 'The agent guides the customer through the troubleshooting steps, successfully resolving the internet connectivity issue.',
        badges: ['Effective Solutions', 'Issue Resolution Expertise']
      },

      {
        time: '',
        dotClass: 'green-one-bg',
        iconClass: 'fa fa-warning',
        title: 'Wrap-Up',
        description: 'The agent confirms that the internet is now working properly, offers further technical support resources if needed, documents the call details, and thanks the customer for their patience.',
        badges: ['Efficient Closure', 'Closing Remarks Proficiency']
      },

    

  ];

  return (
    <>
    <div className="section-title serviceTitle position-relative pb-3 mb-2 mt-5" style={{display:"flex", justifyContent:"center"}}>
      <h2 className="mb-0 pb-0">Our Process</h2>
    </div>
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div className="timeline-row" key={index}>
          <div className="timeline-time">
            {item.time}
          </div>
          <div className={`timeline-dot ${item.dotClass}`}></div>
          <div className="timeline-content" data-aos="fade-right" data-aos-delay="100">
            <i className={item.iconClass}></i>
            <h4>{item.title}</h4>
            <p style={{textAlign:"justify"}}>{item.description}</p>
            <div>
              {item.badges.map((badge, badgeIndex) => (
                <span className="badge badge-dark me-2" key={badgeIndex}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TimelineComponent;
