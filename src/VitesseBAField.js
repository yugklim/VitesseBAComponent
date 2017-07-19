import React, {Component} from 'react'
import InputMask from 'react-input-mask';
var _ = require('lodash')
import PropTypes from 'prop-types';
import Radium from 'radium';

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



// const VitesseBAField = ({ pars, validator }) =>
// {
//     let getStyles = function() {
//       const status = {
//         notification: '#0074D9',
//         success: '#27AE60',
//         error: '#E74C3C'
//       }
//
//       return {
//         alert: {
//           position: 'relative',
//           width: '100%',
//           padding: '5px',
//           borderRadius: '3px',
//           backgroundColor: status.notification,
//           color: 'white',
//           textAlign: 'center',
//           success: {
//             backgroundColor: status.success
//           },
//           ':hover': {
//             boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
//           },
//           error: {
//             backgroundColor: status.error
//           }
//         }
//       };
//     }
//
//     const styles = getStyles();
//
//     if (!pars.Field)
//       {
//         return (<div></div>);
//       }
//     else {
//       let field = pars.Field;
//       let fieldType = pars.FieldType;
//       switch (fieldType)
//       {
//         case 'Numeric':
//           var maskChar = '9';
//           break;
//         case 'AlphaNumeric':
//           maskChar = 'a';
//           break;
//         case 'ExtendedAlphaNumeric':
//           maskChar = 'a';
//           break;
//         default:
//           maskChar = '*';
//       }
//
//       let maxLength = parseInt(pars.MaximumLength);
//
//       if (maxLength > 0){
//         var mask = _.repeat(maskChar, maxLength);
//       }
//
//       return validator?
//         (
//         <div style={[styles.alert]}>
//           <label htmlFor={validator.id} >
//             {validator.label}
//           </label>
//           {/*<MaskedInput {...validator.bind} mask='111111111' placeholderChar=' ' />*/}
//           <InputMask {...validator.bind} mask={mask} maskChar={null} />
//           <p >{validator.error}</p>
//
//         </div>
//       ):
//       (<div>
//         <label htmlFor={field} >
//           {pars.FieldName}
//         </label>
//         <input id={field} />
//       </div>)
//     }
// };


class VitesseBAField  extends Component {
    constructor(props) {
      super(props);
    }

  getStyles() {

    const status = {
      error: 'red'
    }

    return {
      alert: {
        color: status.error
      }
    };

  }

  render() {



    const styles = this.getStyles();


    if (!this.props.pars.Field)
      {
        return (<div></div>);
      }
    else {
      let field = this.props.pars.Field;
      let fieldType = this.props.pars.FieldType;
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

      let maxLength = parseInt(this.props.pars.MaximumLength);

      if (maxLength > 0){
        var mask = _.repeat(maskChar, maxLength);
      }

      return this.props.validator?
        (
        <div>
          <label htmlFor={this.props.validator.id} >
            {this.props.validator.label}
          </label>
          {/*<MaskedInput {...this.props.validator.bind} mask='111111111' placeholderChar=' ' />*/}
          <InputMask {...this.props.validator.bind} mask={mask} maskChar={null} />
          <p style={[styles.alert]}>{this.props.validator.error}</p>

        </div>
      ):
      (<div>
        <label htmlFor={field} >
          {this.props.pars.FieldName}
        </label>
        <input id={field} />
      </div>)
    }
  }
}

VitesseBAField.propTypes = {
  pars: PropTypes.shape({
    Field: PropTypes.string.isRequired ,
    FieldType: PropTypes.string.isRequired ,
    FieldName: PropTypes.string.isRequired
  }),
  validator: PropTypes.object
};

exports.VitesseBAField = Radium(VitesseBAField);


