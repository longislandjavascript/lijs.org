const axios = require("axios");

exports.handler = async (event, context, callback) => {
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        // "https://jsonplaceholder.typicode.com/todos/1"
        "http://api.meetup.com/long-island-javascript-group/members"
      );
      send(res.data);
    } catch (error) {
      send(error.message);
    }
  };

  if (event.httpMethod === "GET") {
    getData();
  }
};
