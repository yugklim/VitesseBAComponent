import {validationRules} from '../../../src/utilities/validation'

describe('validationRules tests', () => {

  it('returns required|alpha_num when Options: Mandatory, Type: AlphaNumeric', () => {
    let field = { Options: 'Mandatory', Type: 'AlphaNumeric'};
    let expected = 'required|alpha_num';
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns alpha_num when Options: Optional, Type: AlphaNumeric', () => {
    let field = { Options: 'Optional', Type: 'AlphaNumeric'};
    let expected = 'alpha_num';
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns required|alpha_num when Options: Mandatory, Type: ExtendedAlphaNumeric', () => {
    let field = { Options: 'Mandatory', Type: 'ExtendedAlphaNumeric'};
    let expected = 'required|alpha_num';
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns alpha_num when Options: Optional, Type: ExtendedAlphaNumeric', () => {
    let field = { Options: 'Optional', Type: 'ExtendedAlphaNumeric'};
    let expected = 'alpha_num';
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

})
