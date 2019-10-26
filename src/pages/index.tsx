import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import TitleSection from "../components/sections/title-section";
import UpcomingEventSection from "../components/sections/upcoming-event-section";

const App = () => (
  <Layout>
    <SEO />
    <TitleSection />
    <UpcomingEventSection />
  </Layout>
);

export default App;
