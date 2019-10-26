import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

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
      }
    }
  `);

  const event = meetupGroup.next_event;

  const startDateTime = new Date(event.time);
  const endDateTime = new Date(event.time - event.utc_offset);
  const formattedDate = format(startDateTime, "MMMM dd, yyyy");
  const formattedStartTime = format(startDateTime, "h:mm");
  const formattedEndTime = format(endDateTime, "hh:mm b");

  return {
    name: event.name,
    going: event.yes_rsvp_count,
    date: formattedDate,
    startTime: formattedStartTime,
    endTime: formattedEndTime,

    location: {
      name: "LaunchPad Huntington",
      address: "315 Main Street, 2nd Fl",
      city: "Huntington",
      state: "NY",
      zipcode: "11743",
    },
  };
};

export { useMeetupNextEvent };
