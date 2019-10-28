import React from "react";
import { Layout, SEO } from "../components/common";
// Sections
import CoverSection from "../components/sections/cover-section";
import UpcomingEventSection from "../components/sections/upcoming-event-section";
import SponsorsSection from "../components/sections/sponsors-section";
import FAQSection from "../components/sections/faqs-section";
// Waves
import WaveSectionTransition from "../../static/svgs/WaveGroup.svg";

const App = () => (
  <Layout>
    <SEO />
    <CoverSection />
    <UpcomingEventSection />
    <SponsorsSection />
    <img
      src={WaveSectionTransition}
      alt="wave section transition graphic"
      style={{ width: "100%" }}
    />
    <FAQSection />
  </Layout>
);

export default App;
