'use strict';

const TIMEOUT = 1500;

function main(event, context, callback) {
  setTimeout(() => {
    callback(null, {ok: true});
  }, TIMEOUT);
}

module.exports = {
  main,
};
