import React from "react";
import ALAI from "../../aseets/experts.jpg";
import MAMA from "../../aseets/figama33.jpeg";
import AL from "../../aseets/figma2.jpg";
import partnersData from './partnersData.js'
import "../../css/Contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="container_contact">
        <div className="container_contact_left">
          <h1>We Have Highly Expert & Experienced Tutors</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum{" "}
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="container_contact_right">
          <img src={ALAI} alt="connection failed " />
        </div>
      </div>
      <h1 className="say">What our Student say</h1>
      <div className="blog">
        <div className="div1">
          <div className="subdiv1">
            <img src={AL} alt="connection failure" />
          </div>
          <div className="subdiv1">
            <img src={AL} alt="connection failure"/>
          </div>
        </div>
        <div className="div2">
          <img src={MAMA} alt="connection failed" />
          <h5>NIYIKUNDA lvyinne</h5>
          <h6>niganzealain@gmail.com</h6>
          <p>
            “Love this platform how it give me much exprience of gaing the<br/>
            skills and also by making be one the best in my schools”.
          </p>
        </div>
        <div className="div1">
          <div className="subdiv1">
            <img src={AL} alt="connection failure" />
          </div>
          <div className="subdiv1">
            <img src={AL} alt=" connection failure" />
          </div>
        </div>
      </div>
      <h1 className="say">Our education Partners</h1>
      <div className="Partners">
      {partnersData.map((partner) => (
        <div key={partner.name} className="too_logo">
          <img src={partner.logo} alt={partner.name} />
        </div>
      ))}
    </div>
    </div>
  );
  }
export default Contact;
