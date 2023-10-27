import React from "react";
import icon_1 from "../../assets/images/icon-1.svg";
import icon_2 from "../../assets/images/icon-2.svg";
import icon_3 from "../../assets/images/icon-3.svg";
import icon_4 from "../../assets/images/icon-4.svg";
import icon_5 from "../../assets/images/icon-5.svg";
import icon_6 from "../../assets/images/icon-6.svg";
import icon_7 from "../../assets/images/icon-7.svg";
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className="wrapper">
        <div className="footer-section">
          <div className="social-media">
            <a href="#f">
              <img src={icon_1} alt="facebook-icon" />
            </a>
            <a href="#i">
              <img src={icon_2} alt="instagram-icon" />
            </a>
            <a href="#t">
              <img src={icon_3} alt="twitter-icon" />
            </a>
            <a href="#p">
              <img src={icon_4} alt="pinterest-icon" />
            </a>
            <a href="#tk">
              <img src={icon_5} alt="tiktok-icon" />
            </a>
            <a href="#w">
              <img src={icon_6} alt="whatsapp-icon" />
            </a>
            <a href="#y">
              <img src={icon_7} alt="youtube-icon" />
            </a>
          </div>
          <p>© Start, 2022. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
