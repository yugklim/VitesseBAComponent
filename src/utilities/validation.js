var _ = require('lodash')

function getValidators(fields, form) {
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

function getFormFields(fields) {
  let retVal = {};
  _.forEach(fields, (field) => {
    retVal[field.Field] = getFormField(field)
  })
  return retVal;
}

function getFormField(field) {
  return {
    label: field.FieldName + lengthInformation(field),
    placeholder: `Insert ${field.FieldName}`,
    rules: validationRules(field),
    options: {
      validateOnChange: true
    }
  }
}

function lengthInformation(field) {
  if (!field) {
    return '';
  }

  if (field.MinimumLength && !field.MaximumLength) {
    return ` minimum ${field.MinimumLength} symbols`;
  }
  else if (!field.MinimumLength && field.MaximumLength) {
    return ` maximum ${field.MaximumLength} symbols`;
  }
  else if (field.MinimumLength && field.MaximumLength && (field.MinimumLength != field.MaximumLength)) {
    return ` (${field.MinimumLength}-${field.MaximumLength} symbols)`;
  }
  else if (field.MinimumLength == field.MaximumLength) {
    return ` (${field.MinimumLength} symbols)`;
  }

  return '';
}

function validationRules(field) {
  let presenceRules = {
      required:  field.Options === 'Mandatory',
      alpha_num: field.FieldType === 'AlphaNumeric' || field.FieldType === 'ExtendedAlphaNumeric',
      numeric:   field.FieldType === 'Numeric'
  }

  let minMaxRules = {
      min:       field.MinimumLength,
      max:       field.MaximumLength
  }

  let retVal = [];
  for (var key in presenceRules){
    if (presenceRules[key]) {
      retVal.push(`${key}`);
    }
  }

  if (presenceRules.alpha_num === true){
    for (var key in minMaxRules){
      if(minMaxRules[key]) {
        retVal.push(`${key}:${minMaxRules[key]}`);
      }
    }
  }
  else if (presenceRules.numeric === true && (minMaxRules.min || minMaxRules.max)){
      let min = minMaxRules.min || 0;
      let max = minMaxRules.max || Number.MAX_SAFE_INTEGER;
      retVal.push(`regex:/^[0-9]{${min},${max}}$/`);
  }

  return retVal;
}

exports.getFormFields = getFormFields;
exports.getValidators = getValidators;
exports.validationRules = validationRules;

