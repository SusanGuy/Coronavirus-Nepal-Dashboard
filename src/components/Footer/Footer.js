import React from "react";
import * as Icon from "react-feather";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <footer className="fadeInUp" style={{ animationDelay: "2s" }}>
        <h5>{"We stand with everyone fighting on the frontlines"}</h5>

        <div className="link">Contributors:</div>

        <a
          href="https://github.com/sushantbaskota2"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>{"Github: Sushant Baskota"}</span>
        </a>
        <a
          href="https://github.com/SusanGuy"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>{"Github: Susan Subedi"}</span>
        </a>

        <a
          href="https://twitter.com/sushant_messi"
          target="_blank"
          rel="noopener noreferrer"
          className="button twitter"
          style={{ justifyContent: "center" }}
        >
          <Icon.Twitter />
          <span>{"Join Sushant on Twitter"}</span>
        </a>
        <a
          href="https://twitter.com/susanforchange"
          target="_blank"
          rel="noopener noreferrer"
          className="button twitter"
          style={{ justifyContent: "center" }}
        >
          <Icon.Twitter />
          <span>{"Join Susan on Twitter"}</span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
