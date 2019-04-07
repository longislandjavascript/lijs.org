import React from 'react';
import { Button } from '../common';
const meetupIcon = require('../../images/meetup-icon.svg');

const GithubButton = () => {
  return (
    <Button>
      <a
        href="https://www.meetup.com/long-island-javascript-group/"
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
          <div>Visit us on</div>

          <img
            src={meetupIcon}
            height="28px"
            style={{ margin: '-20px 10px' }}
          />
        </div>
      </a>
    </Button>
  );
};

export default GithubButton;
