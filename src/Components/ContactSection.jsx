import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactSection.css";

const ContactFooter = () => {
  return (
    <footer className="footer-section py-5" id="contact">
      <div className="container text-center">
        <h3 className="text-white mb-4">Let's Connect</h3>
        <p className="text-light opacity-75 mb-4">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>

        <div className="social-links d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="social-icon github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="social-icon facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="social-icon twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div className="contact-info text-light opacity-50 small mt-5">
          <p>© 2026 | Built with React & Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
