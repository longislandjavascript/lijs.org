import React from "react";
import { Button } from "../common";
import githubIcon from "../../images/github-icon.svg";

export interface GithubButtonProps {}

const GithubButton: React.SFC<GithubButtonProps> = () => {
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
            justifyContent: "center",
          }}
        >
          <div>Visit us on </div>

          <img
            src={githubIcon}
            height="18px"
            style={{ margin: "-20px 10px" }}
          />
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
