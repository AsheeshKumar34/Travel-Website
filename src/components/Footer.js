import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Servies</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Servies</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Servies</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Servies</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
            </Link>
          </div>
          <small className="website-rights">TRVL@2020</small>
          <div className="social-icons">
            <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
              <i className="fa fa-facebook-f"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram ">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Youtube" className="social-icon-link youtube ">
              <i className="fa fa-youtube"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter" className="social-icon-link twitter ">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Linkedin" className="social-icon-link linkedin ">
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
