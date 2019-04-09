const axios = require("axios");
const { format } = require("date-fns");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const getNextEventData = event => {
    const date = format(event.local_date, "MMMM DD, YYYY");
    const time = `${format(event.time, "h:mm")} - ${format(
      event.time + event.duration,
      "h:mm A"
    )}`;
    const rsvps = `${event.yes_rsvp_count} JavaScript Enthusiasts`;

    return {
      name: event.name,
      link: event.link,
      date,
      time,
      rsvps,
      // venue,
      address_street: event.venue.address_1,
      address_city_state: "Huntington, NY 11743",
    };
  };
  const processData = group => {
    const nodeId = createNodeId(group.id.toString());
    const nodeContent = JSON.stringify(group);
    const nodeData = Object.assign({}, group, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MeetupGroup`,
        content: nodeContent,
        contentDigest: createContentDigest(group),
      },
    });

    return nodeData;
  };

  // Join apiOptions with the Pixabay API URL
  const groupUrl = `http://api.meetup.com/long-island-javascript-group/`;
  const nextEventUrl = `http://api.meetup.com/long-island-javascript-group/events?status=upcoming&page=1`;

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    Promise.all([axios.get(groupUrl), axios.get(nextEventUrl)]).then(
      ([groupResults, eventResults]) => {
        const newData = {
          ...groupResults.data,
          next_event: getNextEventData(eventResults.data[0]),
        };
        createNode(processData(newData));
      }
    )
  );
};
