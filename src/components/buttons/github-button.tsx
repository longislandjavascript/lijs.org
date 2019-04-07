import React from 'react';
import { Button } from '../common';
const githubIcon = require('../../images/github-icon.svg');

const GithubButton = () => {
  return (
    <Button>
      <a
        href="https://github.com/lijs-meetup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>Visit us on </div>

          <img
            src={githubIcon}
            height="18px"
            style={{ margin: '-20px 10px' }}
          />
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
