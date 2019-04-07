import * as React from "react";
import Map from "../components/Map";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px", padding: "30px" }}>
      <h2>About Our Group</h2>
      <p>
        <span style={{ color: "steelblue", fontWeight: "bold" }}>
          Long Island JavaScript Group
        </span>{" "}
        is a space for JavaScript enthusiasts or newcomers interested in
        learning the language.
      </p>
      <b>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </b>
      <Map />
    </div>
  );
};

export default About;
