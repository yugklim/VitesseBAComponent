import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import VitesseBAField from './VitesseBAField'
import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react';
import validatorjs from 'validatorjs';
import { getValidators, getFormFields, getFormFields2 } from './utilities/validation'



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

          <button type="submit" onClick={form.onSubmit}>Submit</button>
          <button type="button" onClick={form.onReset}>Reset</button>
          <button type="button" onClick={form.onClear}>Clear</button>

          <p>{form.error}</p>
        </form>);
    }
  });

export default VitesseBAFields
