import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layout";
import SEO from "../components/seo";

// * Sections
import NextEvent from "../components/sections/next-event";
import AboutGroup from "../components/sections/about-group";
import AboutSite from "../components/sections/about-site";

const IndexPage = () => {
  const [nextEvent, setNextEvent] = useState([]);
  const IS_DEV = false;
  const API_ENDPOINT = IS_DEV ? "http://localhost:9000/" : "/.netlify/lambda/";

  useEffect(() => {
    const fetchMeetupEvents = async () => {
      try {
        const results = await axios.get(`${API_ENDPOINT}fetchNextMeetupEvent`);
        console.log(results.data);
        setNextEvent(results.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeetupEvents();
  }, []);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <NextEvent event={nextEvent} />
      <AboutGroup />
      <AboutSite />
    </Layout>
  );
};

export default IndexPage;
