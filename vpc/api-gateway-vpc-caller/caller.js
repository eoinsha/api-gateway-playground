'use strict';

const axios = require('axios');

async function main(event, context) {
  console.log({event, context}, 'Caller invoked');

  const {VPCE_URL: url, API_DOMAIN: host} = process.env;

  console.log({url, host}, 'Internal API URL and domain');

  try {
    const {data: result} = await axios({
      method: 'GET',
      url,
      headers: {Host: host},
    });
    console.log({result}, 'API response received');
  } catch (err) {
    const data = err.response && err.response.data;
    console.error({err, data}, 'ERR');
    throw err;
  }

  return {ok: true};
}

module.exports = {
  main,
};
