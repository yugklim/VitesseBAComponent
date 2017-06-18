import React from 'react'
import { observer } from 'mobx-react';
import { getValidators } from './utilities/validation'
var VitesseBAField = require('./VitesseBAField').VitesseBAField
import PropTypes from 'prop-types';

const VitesseBAFields = observer(
  ({ fields, form }) =>
  {
    //form = new LoginForm({ fields: getFormFields2() }, { plugins });
    //form.state.initial.props.values = getFormFields(fields);
    if (!fields)
    {
      return (<div>No BA Fields</div>);
    }
    else {

      let validators = getValidators(fields, form);
      return (
        <form>
          {
            fields.map(function (field, idx) {
              //return (<div>{val.Path} -> <VitesseBAField pars={val} form={form}></VitesseBAField></div>);
              return (<VitesseBAField pars={field} validator={validators[field.Field]} idx={idx} form={form}></VitesseBAField>);
            })
          }

          <button type='submit' onClick={form.onSubmit}>Submit</button>
          <button type='button' onClick={form.onReset}>Reset</button>
          <button type='button' onClick={form.onClear}>Clear</button>

          <p>{form.error}</p>
        </form>);
    }
  });

VitesseBAFields.propTypes = {
  pars: PropTypes.shape({
    Field: PropTypes.string.isRequired ,
    FieldType: PropTypes.string.isRequired ,
    FieldName: PropTypes.string.isRequired
  }),
  form: PropTypes.object
};

export default VitesseBAFields
