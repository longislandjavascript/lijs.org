import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import TitleSection from "../components/sections/title-section";
import UpcomingEventSection from "../components/sections/upcoming-event-section";
import SponsorsSection from "../components/sections/sponsors-section";
import WaveSectionTransition from "../../static/svgs/WaveGroup.svg";
import FAQSection from "../components/sections/faqs-section";

const App = () => (
  <Layout>
    <SEO />
    <TitleSection />
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
