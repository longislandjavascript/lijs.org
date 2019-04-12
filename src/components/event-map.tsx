import React from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  /* filter: grayscale(100%); */

  @media only screen and (max-width: 600px) {
    width: 100%;
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
