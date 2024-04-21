import { BsWhatsapp } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import chatbot from "../../public/images/chatbot.gif";
import "./FixedButtons.css"; 
import "./FixedButtons.css";
import { useState } from "react";
import ChatBot from "react-simple-chatbot";

const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our Midline Services",
      trigger: "Ask Name",
    },

    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },

    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },

    {
      id: "Name",
      message: "Hi {previousValue}, Please Select your issue",
      trigger: "ServiceOptions",
    },

    {
      id: "ServiceOptions",
      options: [
        { value: "ChatSupport", label: "Chat Support", trigger: "ChatSupport" },
        { value: "ColdCalling", label: "Cold Calling", trigger: "ColdCalling" },
        { value: "AppointmentSetting", label: "Appointment Setting", trigger: "AppointmentSetting" },
      ],
    },

    {
      id: "ChatSupport",
      message: "Thanks for telling us ! Please provide your contact number so we can reach out to you.",
      trigger: "ProvideContact",
    },

    {
      id: "ColdCalling",
      message: "Thanks for telling us ! Please provide your contact number so we can reach out to you.",
      trigger: "ProvideContact",
    },

    {
      id: "AppointmentSetting",
      message: "Thanks for telling us ! Please provide your contact number so we can reach out to you.",
      trigger: "ProvideContact",
    },

    {
      id: "ProvideContact",
      user: true,
      validator: (value) => {
        if (/^\d{10}$/.test(value)) {
          return true;
        } else {
          return "Please enter a valid 10-digit contact number.";
        }
      },
      trigger: "ThankYou",
    },

    {
      id: "ThankYou",
      message: "Thank you! We will contact you shortly.",
      end: true,
    },


  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=+918956101181&text=Hello");
  };

  const handleCallClick = () => {
    window.location.href = "tel: +918956101181";
  };

  return (
    <div>
      {/* WhatsApp button */}
      <button className="fixed-btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <BsWhatsapp />
      </button>
      {/* Call button */}
      <button className="fixed-btn call-btn" onClick={handleCallClick}>
        <BiSolidPhoneCall />
      </button>

      <button onClick={toggleChat} className="fixed-btn Chat-btn">
        <img src={chatbot} style={{width:"100px", bottom:"50px"}}/>
      </button>

      {isOpen && (
        <ChatBot
          headerTitle="Chat Support"
          floating
          opened={isOpen}
          steps={steps}
          toggleFloating={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default FixedButtons;
