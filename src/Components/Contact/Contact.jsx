import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga in,
          reprehenderit mollitia perspiciatis hic, sint voluptates sunt nostrum
          voluptatibus enim ratione fugiat est dolore minus odit! Consequuntur
          ipsa harum quasi?
        </p>

        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@mickstack.dev{" "}
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +234 7085432567
          </li>
          <li>
            <img src={location_icon} alt="" />
            5 Johnson street ifako-ijaye Lagos <br />
            7899 Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col col2">
        <form>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>Sending</span>
      </div>
    </div>
  );
};

export default Contact;
