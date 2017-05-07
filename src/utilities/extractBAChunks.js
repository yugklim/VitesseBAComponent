/**
 * Created by eklimenko on 5/6/2017.
 */
import {_} from 'underscore'

export default function extractBAChunks(data) {
  return _.filter(data, (chunk) => chunk.Path && chunk.Path.includes('request.Recipient.Account'));
}
