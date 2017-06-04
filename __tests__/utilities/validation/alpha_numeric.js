import {validationRules} from '../../../src/utilities/validation'

describe('validationRules tests', () => {

  it('returns required|alpha_num when Options: Mandatory, FieldType: AlphaNumeric', () => {
    let field = { Options: 'Mandatory', FieldType: 'AlphaNumeric'};
    let expected = ['required', 'alpha_num'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns alpha_num when Options: Optional, FieldType: AlphaNumeric', () => {
    let field = { Options: 'Optional', FieldType: 'AlphaNumeric'};
    let expected = ['alpha_num'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns required|alpha_num when Options: Mandatory, FieldType: ExtendedAlphaNumeric', () => {
    let field = { Options: 'Mandatory', FieldType: 'ExtendedAlphaNumeric'};
    let expected = ['required', 'alpha_num'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns alpha_num when Options: Optional, FieldType: ExtendedAlphaNumeric', () => {
    let field = { Options: 'Optional', FieldType: 'ExtendedAlphaNumeric'};
    let expected = ['alpha_num'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

})
