import {validationRules} from '../validation'
import _ from 'lodash'
//TODO: to get rid of
let field = { FieldType: 'AlphaNumeric', MinimumLength: 3, MaximumLength: 5 };
let expected = ['alpha_num', 'min:3', 'max:5'];
let output = validationRules(field);

_.isEqual(expected, output)
