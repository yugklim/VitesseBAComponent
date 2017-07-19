import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import VitesseBAFields from './VitesseBAFields'
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
var getFormFields = require('./utilities/validation').getFormFields
var extractBAFields = require('./utilities/extractBAChunks').extractBAChunks
import { StyleRoot } from 'radium';


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

// var styles = {
//   base: {
//     'color': '#0074d9',
//     // Adding interactive state couldn't be easier! Add a special key to your
//     // style object (:hover, :focus, :active, or @media) with the additional rules.
//     ':hover': {
//       //background: color('#0074d9').lighten(0.2).hexString()
//     }
//   }
// };


export default class VitesseBA extends Component {

  getFields () {
    //let countryCurrency = this.props.countryCurrency;
    //fetch(`/getFields/${countryCurrency}`,
    //fetch('https://staging-api.vitessepsp.com/api/rules/RU/RUB',
    fetch(`${this.props.url}${this.props.countryCurrency}`,
      {
        method: 'get'
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {

            let baFields = extractBAFields(data);

            const plugins = { dvr: validatorjs };
            const form = new LoginForm({ fields: getFormFields(baFields) }, { plugins });

            let pageStyle = {};

            ReactDOM.render(
              // React.createElement('VitesseBAFields',null,null),
              <StyleRoot style={pageStyle}>
                <div>
                <VitesseBAFields fields={baFields} form={form}></VitesseBAFields>
                </div>
              </StyleRoot>,
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
    ::this.getFields();
    return (
      <div>
        <div id='vitesseBAFields'></div>
      </div>);
  }
}



