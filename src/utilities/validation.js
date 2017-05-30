import _ from 'lodash'

export function getValidators(fields, form) {
  let validators = [];
  for (let index = 0; index < fields.length; ++index) {
    let field = fields[index];
    validators[field.Field] = {};
    validators[field.Field].bind = form.$(field.Field).bind();
    validators[field.Field].id = form.$(field.Field).id;
    validators[field.Field].label = form.$(field.Field).label;
    validators[field.Field].error = form.$(field.Field).error;
  }
  return validators;
}

export function getFormFields(fields) {
  let retVal = {};
  _.forEach(fields, (field) => {
    retVal[field.Field] = getFormField(field)
  })
  return retVal;
}

function getFormField(field) {
  return {
    label: field.FieldName,
    placeholder: `Insert ${field.FieldName}`,
    rules: validationRules(field)
      //'required|email|string|between:5,25'
  }
}

export function validationRules(field) {
  let rules = {
      required:  field.Options === 'Mandatory',
      alpha_num: _.some(['AlphaNumeric', 'ExtendedAlphaNumeric'], field.Type),
      numeric:   field.Type === 'Numeric'
  }

  let minLength = field.MinimumLength;
  let maxLength = field.MaximumLength;

  let retVal = '';
  for (var key in rules){
    retVal += `${rules[key]?`${key}|`:''}`;
  }
  if (_.endsWith(retVal, '|') === true) {
    retVal = retVal.substring(0, retVal.length-1)
  }

  // for numeric must be min max
  // if (minLength && maxLength) {
  //   retVal += `between:${minLength},${maxLength}`;
  // }

  return retVal;
}

export function getFormFields2() {
  return {
    email: {
      label: 'email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,25',
    },

    password: {
      label: 'Password',
      placeholder: 'Insert Password',
      rules: 'required|email|string|between:1,25',
    },

    SwiftCode: {
      label: 'SwiftCode',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:1,25',
    },

    AccountNumber: {
      label: 'AccountNumber',
      placeholder: 'Insert Email',
      rules: 'required|string|between:1,25',
    },

    BsbCode: {
      label: 'BsbCode',
      placeholder: 'Insert Email',
      rules: 'required|string|between:1,25',
    },

    PaymentPurpose: {
      label: 'PaymentPurpose',
      placeholder: 'Insert Email',
      rules: 'required|string|between:1,25',
    }
  };
}
