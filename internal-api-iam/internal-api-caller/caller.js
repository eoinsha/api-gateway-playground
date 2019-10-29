'use strict';

const AWS = require('aws-sdk');
const signedAxios = require('aws-signed-axios');

const ssm = new AWS.SSM();

async function main(event, context) {
  const {
    Parameter: {Value: url},
  } = await ssm
    .getParameter({
      Name: `/${process.env.STAGE}/internal-api/url`,
    })
    .promise();

  console.log({url}, 'Internal API URL');

  try {
    const {data: result} = await signedAxios({
      method: 'GET',
      url,
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
