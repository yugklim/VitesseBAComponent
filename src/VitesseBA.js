import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
//import {_} from './node_modules/underscore'
import {_} from 'underscore'
import VitesseBAFields from './VitesseBAFields'
import extractBAFields from './utilities/extractBAChunks'
//import './VitesseBA.less';


import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react';
import validatorjs from 'validatorjs';

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
}



const plugins = { dvr: validatorjs };
const form = new LoginForm({ fields: fields2 }, { plugins });

export default class VitesseBA extends Component {

  getFields (e) {
    fetch(`/getFields`,
      {
        method: 'get',
      }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          let baFields = extractBAFields(data);
          ReactDOM.render(
            // React.createElement('VitesseBAFields',null,null),
            <VitesseBAFields fields={baFields} form={form}></VitesseBAFields>,
            document.getElementById('vitesseBAFields')
          );

        });
      } else {
        console.error('Network error - ' + response);
      }
    }).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="MyComponent">
        <input type='button' value="Rules" onClick={::this.getFields}/>
        <div id="vitesseBAFields"></div>
      </div>);
  }
}

