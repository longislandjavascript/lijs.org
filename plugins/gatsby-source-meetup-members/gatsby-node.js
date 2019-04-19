const axios = require('axios');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  // Helper function that processes a photo to match Gatsby's node structure
  const processData = member => {
    const nodeId = createNodeId(member.id.toString());
    const nodeContent = JSON.stringify(member);
    const nodeData = Object.assign({}, member, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MeetupMember`,
        content: nodeContent,
        contentDigest: createContentDigest(member),
      },
    });

    return nodeData;
  };

  // Join apiOptions with the Pixabay API URL
  const { MEETUP_API_MEMBERS_URL } = process.env;

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    axios
      .get(MEETUP_API_MEMBERS_URL)
      // Parse the response as JSON
      .then(({ data }) => {
        // For each query result (or 'hit')
        data.forEach(member => {
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(processData(member));
        });
      })
  );
};
