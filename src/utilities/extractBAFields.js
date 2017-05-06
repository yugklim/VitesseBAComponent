/**
 * Created by eklimenko on 5/6/2017.
 */
import {_} from 'underscore'

export default function extractBAFields(data) {
  let paths = _.filter(data, (chunk) =>{
    if (chunk.Path && chunk.Path.includes('request.Recipient.Account')) {
        return chunk.Path;
    }
  });
  return paths;
  //return _.filter(data, (value, index, list) => {return 'ss'});
}
