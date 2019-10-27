import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import TitleSection from "../components/sections/title-section";
import UpcomingEventSection from "../components/sections/upcoming-event-section";
import FAQSection from "../components/sections/faqs-section";
import SponsorsSection from "../components/sections/sponsors-section";

const App = () => (
  <Layout>
    <SEO />
    <TitleSection />
    <UpcomingEventSection />
    <SponsorsSection />
    <FAQSection />
  </Layout>
);

export default App;
