import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import VitesseBAFields from './VitesseBAFields'
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
var getFormFields = require('./utilities/validation').getFormFields
var extractBAFields = require('./utilities/extractBAChunks').extractBAChunks

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

export default class VitesseBA extends Component {

  getFields () {
    fetch('/getFields',
      {
        method: 'get'
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {

            let baFields = extractBAFields(data);

            const plugins = { dvr: validatorjs };
            const form = new LoginForm({ fields: getFormFields(baFields) }, { plugins });

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

