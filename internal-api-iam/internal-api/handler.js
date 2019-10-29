'use strict';

async function main(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'This is a response from an internal API'}),
  };
}

module.exports = {
  main,
};
