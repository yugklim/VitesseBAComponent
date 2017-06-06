var extractBAChunks = require('../../src/utilities/extractBAChunks').extractBAChunks

describe('ExtractBAChunks utility', () => {

  let input = [{a:1}, {b:1}, {'Path':'request.Recipient.Account'}];
  let expected = [{'Path':'request.Recipient.Account'}];

  let output = extractBAChunks(input);

  it('returns the chunks with the request.Recipient.Account only', () => {
    expect(output).toEqual(expected);
  });

})
