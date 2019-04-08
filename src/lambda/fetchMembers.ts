import axios from 'axios';
import {format} from 'date-fns';

exports.handler = async (event, context, callback) => {
  // TODO- Convert to environment variable.
  const MEETUP_API_MEMBERS_URL =
    'http://api.meetup.com/long-island-javascript-group/members';
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers":
      //     "Origin, X-Requested-With, Content-Type,Accept",
      // },
      body: JSON.stringify(body),
    });
  };

  const getData = async () => {
    try {
      const result = await axios.get(MEETUP_API_MEMBERS_URL);
      const { data } = result;
      const thumbnails = data.map((member) => {
        return {thumbnail: member.photo ? member.photo.thumb_link : ''};
      }).filter(({thumbnail}) => !!thumbnail.length);

      send(thumbnails);
    } catch (error) {
      callback(error);
    }
  };

  if (event.httpMethod === 'GET') {
    getData();
  }
};
