import { useStaticQuery, graphql } from "gatsby";

const useMeetupNextEvent = () => {
  const { meetupGroup } = useStaticQuery(graphql`
    query QueryMeetupNextEvent {
      meetupGroup {
        next_event {
          name
          yes_rsvp_count
          time
          utc_offset
        }
        localized_location
        city
        members
      }
    }
  `);

  return meetupGroup.next_event;
};

export { useMeetupNextEvent };
