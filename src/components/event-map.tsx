import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const API_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.029307183241!2d-73.43106468392305!3d40.87123103579451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad+Huntington!5e0!3m2!1sen!2sus!4v1554817711403!5m2!1sen!2sus";

const Map = () => {
  return (
    <MapWrapper>
      <iframe src={API_URL} width="100%" height="450" style={{ border: 0 }} />
    </MapWrapper>
  );
};

export default Map;
