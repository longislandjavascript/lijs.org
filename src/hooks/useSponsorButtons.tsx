/*
 Fetch the social icons from /images via Graphql and return an
 array of objects with image and link url.
*/
import { useStaticQuery, graphql } from "gatsby";

const useSponsorButtons = () => {
  const images = useStaticQuery(graphql`
    query {
      launchpad: file(relativePath: { eq: "launchpad-logo.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      oreilly: file(relativePath: { eq: "oreilly-logo.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return [
    {
      src: images.launchpad.childImageSharp.fixed,
      link: "https://github.com/lijs-meetup/lijs.org",
    },
    {
      src: images.oreilly.childImageSharp.fixed,
      link: "https://www.meetup.com/long-island-javascript-group/",
    },
  ];
};

export { useSponsorButtons };
