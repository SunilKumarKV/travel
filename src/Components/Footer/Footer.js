import React from "react";
import "./footer.css";
import video2 from "../../Assets/video (2).mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  // hook to add a scroll animation......
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <p className="footer-subscription-heading">
              Join the Adventure newsletter to receive the best deals on your
              vacation.
            </p>
            <p className="footer-subscription-text">
              You can unsubscribe at any time.
            </p>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" className="footerIntro flex">
            <div className="logoDiv">
              <a href=" " className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <section className="footer-links">
              <div className="footer-link-wrapper">
                <div className="footer-link-items">
                  <h2>About Us</h2>
                  <a href="/sign-up">How it works</a>
                  <a href="/">Testiminials</a>
                  <a href="/">Careers</a>
                  <a href="/">Investors</a>
                  <a href="/">Terms of Services</a>
                </div>
                <div className="footer-link-items">
                  <h2>Contact Info</h2>
                  <a href="/sign-up">Get Support</a>
                  <a href="/">Careers</a>
                  <a href="/">Be a Partner</a>
                  <a href="/">Be a member</a>
                </div>
                <div className="footer-link-items">
                  <h2>Our Assets</h2>
                  <a href="/sign-up">Submit Videos</a>
                  <a href="/">Ambassadors</a>
                  <a href="/">Agency</a>
                  <a href="/">Influencer</a>
                  <a href="/">Report an issue</a>
                </div>
              </div>
            </section>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />

              <AiOutlineTwitter className="icon" />

              <AiOutlineTwitter className="icon" />

              <AiOutlineTwitter className="icon" />
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - SUNILTECH 2024 </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
