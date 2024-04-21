import { useEffect } from "react";
import "./CountSection.css";
import { IoHappyOutline, IoDocumentTextOutline, IoHeadsetOutline, IoPeopleOutline } from 'react-icons/io5';

const CountBox = ({ icon, count, text }) => {
  
  const iconStyle = {
    position: 'absolute',
    width: '54px',
    height: '54px',
    top: '-27px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '24px',
    background: '#fff',
    color: '#e03a3c',
    borderRadius: '50px',
    border: '2px solid #fff',
    boxShadow: '0px 2px 25px rgba(0, 0, 0, 0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  useEffect(() => {
    const countUp = () => {
      const counters = document.querySelectorAll('.count');
      const speed = 12000;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;
          const increment = target / speed;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target + '+';
          }
        };

        updateCount();
      });
    };

    countUp();
},[]);

  return (
    <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-duration="2000">
      <div className="count-box">
        {/* Applied inline style to the icon */}
        <div style={iconStyle}>
          {icon}
        </div>
        <span className="purecounter count" data-count={count}>0</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CountsSection = () => {
  const countsData = [
    { icon: <IoHappyOutline />, count: 232, text: 'Happy Clients' },
    { icon: <IoDocumentTextOutline />, count: 521, text: 'Projects' },
    { icon: <IoHeadsetOutline />, count: 1463, text: 'Hours Of Support' },
    { icon: <IoPeopleOutline />, count: 15, text: 'Hard Workers' },
  ];

  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          {countsData.map((count, index) => (
            <CountBox key={index} icon={count.icon} count={count.count} text={count.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
