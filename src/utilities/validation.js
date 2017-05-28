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

export function getFormFields2(fields) {
  return {}
}

export function getFormFields() {
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
