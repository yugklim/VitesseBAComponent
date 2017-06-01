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
      alpha_num: field.FieldType === 'AlphaNumeric' || field.FieldType === 'ExtendedAlphaNumeric',
      numeric:   field.FieldType === 'Numeric'
  }

  let minMaxRules = {
      min:       field.MinimumLength,
      max:       field.MaximumLength
  }

  let retVal = '';
  for (var key in presenceRules){
    retVal += `${presenceRules[key]?`${key}|`:''}`;
  }

  if (presenceRules.alpa_num === true){
    for (var key in minMaxRules){
      retVal += `${minMaxRules[key]?`${key}:${minMaxRules[key]}|`:''}`;
    }
  }
  else if (presenceRules.numeric === true && (minMaxRules.min || minMaxRules.max)){
      let min = minMaxRules.min || 0;
      let max = minMaxRules.max || Number.MAX_SAFE_INTEGER;
      retVal += `regex:/^[0-9]{${min},${max}}$/`
  }

  if (_.endsWith(retVal, '|') === true) {
    retVal = retVal.substring(0, retVal.length-1)
  }

  //return ['required', 'regex:/^[0-9]{2,4}$/']
  return retVal;
}

