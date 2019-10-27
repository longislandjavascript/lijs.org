import { useStaticQuery, graphql } from "gatsby";

const useCoverImage = () => {
  const img = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "lijs-cover.jpeg" }) {
        childImageSharp {
          fluid(
            quality: 90
            maxWidth: 1920
            duotone: { highlight: "#000000", shadow: "#000000", opacity: 50 }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return img.bg.childImageSharp.fluid;
};

export { useCoverImage };
