import {validationRules} from '../../../src/utilities/validation'

describe('numeric validationRules tests', () => {

  it('returns required|numeric when Options: Mandatory, FieldType: Numeric', () => {
    let field = { Options: 'Mandatory', FieldType: 'Numeric'};
    let expected = ['required', 'numeric'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns numeric when Options: Optional, FieldType: Numeric', () => {
    let field = { Options: 'Optional', FieldType: 'Numeric'};
    let expected = ['numeric'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

})
