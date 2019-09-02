import React from "react";

import "./Footer.sass";
import FooterMenu from "./FooterMenu/FooterMenu";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <FooterMenu />
          <div className="footer-copy">
            <p>@ Copyright 2019</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
