import { useStaticQuery, graphql } from "gatsby";

const useMeetupGroupInfo = () => {
  const { meetupGroup } = useStaticQuery(graphql`
    query QueryMeetupGroup {
      meetupGroup {
        name
        urlname
        untranslated_city
        state
        timezone
        localized_location
        city
        members
        who
      }
    }
  `);

  return meetupGroup;
};

export { useMeetupGroupInfo };
