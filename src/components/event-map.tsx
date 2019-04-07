import React from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

interface EventMapProps {
  src?: string;
}
const Map: React.FC<EventMapProps> = ({
  src = 'https://snazzymaps.com/embed/146447',
}) => {
  return (
    <MapWrapper>
      <iframe
        src={src}
        width="100%"
        height="500px"
        style={{ border: 'none' }}
      />
    </MapWrapper>
  );
};

export default Map;
