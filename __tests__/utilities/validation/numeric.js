import {validationRules} from '../../../src/utilities/validation'

describe('numeric validationRules tests', () => {

  it('returns required|numeric when Options: Mandatory, Type: Numeric', () => {
    let field = { Options: 'Mandatory', Type: 'Numeric'};
    let expected = ['required', 'numeric'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns numeric when Options: Optional, Type: Numeric', () => {
    let field = { Options: 'Optional', Type: 'Numeric'};
    let expected = 'numeric';
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

})
