import _ from 'lodash'

export default function extractBAChunks(data) {
  return _.filter(data, (chunk) => chunk.Path && chunk.Path.includes('request.Recipient.Account'));
}
