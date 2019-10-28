'use strict';

const axios = require('axios')

async function main(event, context) {
  console.log({event, context}, 'Caller invoked');
  const url = 'https://internal.codespyre.com/handler'

  const {data: result} = await axios(url);
  console.log({result}, 'API response received');
  return {ok: true};
}

module.exports = {
  main,
};
