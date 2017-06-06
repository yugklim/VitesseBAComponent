var _ = require('lodash')

function extractBAChunks(data) {
  return _.filter(data, (chunk) => chunk.Path && chunk.Path.includes('request.Recipient.Account'));
}

exports.extractBAChunks = extractBAChunks;
