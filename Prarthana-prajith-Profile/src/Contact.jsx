import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import "./Section.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Let's Connect</h2>

      <div className="social-icons">

        <a
          href="www.linkedin.com/in/prarthana-prajith-704a6b3a9"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/prarthanaprajith9-sudo"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/918089256057"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a href="tel:+91XXXXXXXXXX">
          <FaPhoneAlt />
        </a>

      </div>
    </section>
  );
}