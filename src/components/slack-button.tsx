import React from "react";
import { Button } from "./common";
import slackIcon from "../images/slack-icon.svg";

export interface SlackButtonProps {}

const GithubButton: React.FC<SlackButtonProps> = () => {
  return (
    <Button>
      <a
        href="https://publicslack.com/slacks/https-lijs-group-slack-com/invites/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>Join us on </div>

          <img
            src={slackIcon}
            height="65px"
            style={{ padding: "-50px", margin: "-80px 0px" }}
          />
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
