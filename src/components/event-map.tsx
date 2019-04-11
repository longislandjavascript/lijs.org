import React from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const { MAP_URL } = process.env;

const Map = () => {
  return (
    <MapWrapper>
      <iframe src={MAP_URL} width="100%" height="450" style={{ border: 0 }} />
    </MapWrapper>
  );
};

export default Map;
