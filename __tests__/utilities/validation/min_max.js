import {validationRules} from '../../../src/utilities/validation'

describe('min max validationRules tests', () => {

  it('returns min:3|max:5 when MinimumLength: 3, MaximumLength: 5', () => {
    let field = { FieldType: 'AlphaNumeric', MinimumLength: 3, MaximumLength: 5 };
    let expected = ['alpha_num', 'min:3', 'max:5'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

  it('returns required|numeric|min:3|max:5 when Options: Mandatory, FieldType: Numeric, MinimumLength: 3, MaximumLength: 5', () => {
    let field = { Options: 'Mandatory', FieldType: 'Numeric', MinimumLength: 3, MaximumLength: 5};
    let expected = ['required', 'numeric', 'regex:/^[0-9]{3,5}$/'];
    let output = validationRules(field);
    expect(output).toEqual(expected);
  });

})
