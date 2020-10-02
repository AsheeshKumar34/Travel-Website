import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the adventure newsletter to receive our best vacation deals</p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="javascipt:;">How it works</a>
            <a href="javascipt:;">Testimonials</a>
            <a href="javascipt:;">Careers</a>
            <a href="javascipt:;">Investors</a>
            <a href="javascipt:;">Terms of Servies</a>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="javascipt:;">How it works</a>
            <a href="javascipt:;">Testimonials</a>
            <a href="javascipt:;">Careers</a>
            <a href="javascipt:;">Investors</a>
            <a href="javascipt:;">Terms of Servies</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="javascipt:;">How it works</a>
            <a href="javascipt:;">Testimonials</a>
            <a href="javascipt:;">Careers</a>
            <a href="javascipt:;">Investors</a>
            <a href="javascipt:;">Terms of Servies</a>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="javascipt:;">How it works</a>
            <a href="javascipt:;">Testimonials</a>
            <a href="javascipt:;">Careers</a>
            <a href="javascipt:;">Investors</a>
            <a href="javascipt:;">Terms of Servies</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="javascipt:;" className="social-logo"> TRVL</a>
          </div>
          <small className="website-rights">TRVL@2020</small>
          <div className="social-icons">
            <a href="javascipt:;" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="javascipt:;" target="_blank" aria-label="Instagram" className="social-icon-link instagram ">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="javascipt:;" target="_blank" aria-label="Youtube" className="social-icon-link youtube ">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="javascipt:;" target="_blank" aria-label="Twitter" className="social-icon-link twitter ">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="javascipt:;" target="_blank" aria-label="Linkedin" className="social-icon-link linkedin ">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
