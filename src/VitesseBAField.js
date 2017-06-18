import React from 'react'
import InputMask from 'react-input-mask';
var _ = require('lodash')
import PropTypes from 'prop-types';

// export default class VitesseBAField extends Component {
//
//   render() {
//     const { Field, FieldName, fieldType, minLength, maxLength, options, path } = this.props.pars;
//     if (!Field)
//     {
//       return (<div></div>);
//     }
//     else
//       return (
//         <div>{FieldName}:<input type="text"/></div>
//       );
//   }
// }

//const Button = ({ color, children }) => <button style={{ background: color }}>{children}</button>;



const VitesseBAField = ({ pars, validator }) =>
{
    if (!pars.Field)
      {
        return (<div></div>);
      }
    else {
      let field = pars.Field;
      let fieldType = pars.FieldType;
      switch (fieldType)
      {
        case 'Numeric':
          var maskChar = '9';
          break;
        case 'AlphaNumeric':
          maskChar = 'a';
          break;
        case 'ExtendedAlphaNumeric':
          maskChar = 'a';
          break;
        default:
          maskChar = '*';
      }

      let maxLength = parseInt(pars.MaximumLength);

      if (maxLength > 0){
        var mask = _.repeat(maskChar, maxLength);
      }

      return validator?
        (
        <div>
          <label htmlFor={validator.id} >
            {validator.label}
          </label>
          {/*<MaskedInput {...validator.bind} mask='111111111' placeholderChar=' ' />*/}
          <InputMask {...validator.bind} mask={mask} maskChar={null} />
          <p >{validator.error}</p>

        </div>
      ):
      (<div>
        <label htmlFor={field} >
          {pars.FieldName}
        </label>
        <input id={field} />
      </div>)
    }
};

VitesseBAField.propTypes = {
  pars: PropTypes.shape({
    Field: PropTypes.string.isRequired ,
    FieldType: PropTypes.string.isRequired ,
    FieldName: PropTypes.string.isRequired
  }),
  validator: PropTypes.object
};

exports.VitesseBAField = VitesseBAField;
