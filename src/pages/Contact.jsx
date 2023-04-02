import React from "react";
import "../css/Contact.css";
const Contact = () => {
  return (
    <div className="ContactForg" id="contact">
      <h5>If you need, Just drop us a line</h5>
      <form action="">
        <div className="form_container">
          <div className="form">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name " />
            <label htmlFor="">Phone number</label>
            <input type="text" placeholder="+250 7908 67645" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="mesasge">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <button>Send message</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
