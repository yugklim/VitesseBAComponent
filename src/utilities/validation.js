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
  let presenceRules = {
      required:  field.Options === 'Mandatory',
      alpha_num: field.Type === 'AlphaNumeric' || field.Type === 'ExtendedAlphaNumeric',
      numeric:   field.Type === 'Numeric',

  }

  let valueRules = {
      min:       field.MinimumLength,
      max:       field.MaximumLength
  }

  let retVal = '';
  for (var key in presenceRules){
    retVal += `${presenceRules[key]?`${key}|`:''}`;
  }

  for (var key in valueRules){
    retVal += `${valueRules[key]?`${key}:${valueRules[key]}|`:''}`;
  }

  if (_.endsWith(retVal, '|') === true) {
    retVal = retVal.substring(0, retVal.length-1)
  }

  return retVal;
}

