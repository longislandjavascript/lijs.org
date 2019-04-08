import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// * Sections
import AboutGroup from "../components/sections/about-group";
import AboutSite from "../components/sections/about-site";
import NextEvent from "../components/sections/next-event";

const IndexPage = () => {
  const [nextEvent, setNextEvent] = useState({ name: "" });
  const [members, setMembers] = useState([]);
  const [memberCount, setMemberCount] = useState("");
  const [error, setError] = useState({ message: "" });

  // * Proxy
  const API_ENDPOINT = "/.netlify/functions/";

  useEffect(() => {
    const fetchMeetupEvents = async () => {
      try {
        const results = await axios.get(`${API_ENDPOINT}fetchNextMeetupEvent`);
        setNextEvent(results.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMeetupEvents();
  }, []);

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        const results = await axios.get(`${API_ENDPOINT}fetchMemberCount`);
        setMemberCount(results.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMemberCount();
  }, []);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const results = await axios.get(`${API_ENDPOINT}fetchMembers`);
        setMembers(results.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <NextEvent event={nextEvent} />
      <AboutGroup memberCount={memberCount} members={members || []} />
      <AboutSite />
      <h2 style={{ paddingTop: "100px" }}>The End</h2>
    </Layout>
  );
};

export default IndexPage;
