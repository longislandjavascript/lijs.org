import React from "react";
import { Button } from "../common";
import githubIcon from "../../images/meetup-icon.svg";

export interface GithubButtonProps {}

const GithubButton: React.SFC<GithubButtonProps> = () => {
  return (
    <Button>
      <a
        href="https://www.meetup.com/long-island-javascript-group/"
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
          <div>Visit our</div>

          <img
            src={githubIcon}
            height="25px"
            style={{ margin: "-20px 10px" }}
          />
          <div>Page</div>
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
