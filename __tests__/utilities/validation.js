import {validationRules} from '../../src/utilities/validation'

describe('validationRules tests', () => {

  let field = { Options: 'Mandatory', Type: 'Numeric'};
  let expected = 'required|numeric';

  let output = validationRules(field);

  it('returns required|numeric when Options: Mandatory, Type: Numeric', () => {
    expect(output).toEqual(expected);
  });

})
