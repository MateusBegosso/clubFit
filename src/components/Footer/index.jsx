import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <hr />
      <div className="footer__social">
        <div className="footer__social-images">
          <a href="https://github.com/MateusBegosso" target="_blank">
            <img src={Github} alt="Github logo" />
          </a>
          <a href="https://www.linkedin.com/in/mateus-begosso" target="_blank">
            <img src={LinkedIn} alt="Linkedin logo" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="Logo da academia" />
        </div>
      </div>

      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </section>
  );
};

export default Footer;
