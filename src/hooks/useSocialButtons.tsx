/*
 Fetch the social icons from /images via Graphql and return an
 array of objects with image and link url.
*/
import { useStaticQuery, graphql } from "gatsby";

const useSocialButtons = () => {
  const images = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github-icon.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      meetup: file(relativePath: { eq: "meetup-icon.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      slack: file(relativePath: { eq: "slack-icon.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return [
    {
      src: images.github.childImageSharp.fixed,
      link: "https://github.com/lijs-meetup/lijs.org",
    },
    {
      src: images.meetup.childImageSharp.fixed,
      link: "https://www.meetup.com/long-island-javascript-group/",
    },
    {
      src: images.slack.childImageSharp.fixed,
      link: "https://lijs-group.slack.com/",
    },
  ];
};

export { useSocialButtons };
