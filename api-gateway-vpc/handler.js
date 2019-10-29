'use strict';

const TIMEOUT = 1500;

function main(event, context, callback) {
  setTimeout(() => {
    callback(null, {body: JSON.stringify({ok: true}), statusCode: 200});
  }, TIMEOUT);
}

module.exports = {
  main,
};
