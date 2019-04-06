import * as React from "react";
import { Button } from "./common";
import slackIcon from "../images/slack-icon.svg";

export interface SlackButtonProps {}

const GithubButton: React.FC<SlackButtonProps> = () => {
  return (
    <Button>
      <a
        href="https://github.com/lijs-meetup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            justifyContent: "center",
          }}
        >
          <div>Join us on </div>

          <img
            src={slackIcon}
            height="65px"
            style={{ padding: "-50px", margin: "-50px 5px" }}
          />
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
