import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import VitesseBAField from './VitesseBAField'
import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react';
import validatorjs from 'validatorjs';
import getValidators from './utilities/validation'

const fields2 = {
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
class LoginForm extends MobxReactForm {

  onSuccess(form) {
    alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
};
const plugins = { dvr: validatorjs };
const form = new LoginForm({ fields: fields2 }, { plugins });


const VitesseBAFields = observer(
  ({ fields }) =>
  {
    if (!fields)
    {
      return (<div>No BA Fields</div>);
    }
    else {

      // let validators = [];
      // for (let index = 0; index < fields.length; ++index) {
      //   let field = fields[index];
      //   validators[field.Field] = {};
      //   validators[field.Field].bind = form.$(field.Field).bind();
      //   validators[field.Field].id = form.$(field.Field).id;
      //   validators[field.Field].label = form.$(field.Field).label;
      //   validators[field.Field].error = form.$(field.Field).error;
      // }

      let validators = getValidators(fields, form);

      let emBind = form.$('email').bind();

      let x =
        <form>
          <div>
            <label htmlFor={form.$('email').id}>
              {form.$('email').label}
            </label>
            <input {...emBind } />
            <p>{form.$('email').error}</p>
          </div>

          <div>
            <label htmlFor={form.$('password').id}>
              {form.$('password').label}
            </label>
            <input {...form.$('password').bind()} />
            <p>{form.$('password').error}</p>
          </div>

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
        </form>;
      return x;
    }
  });

export default VitesseBAFields
