import React, { PropTypes, Component } from 'react'


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



const VitesseBAField = ({ pars, validator, idx, form }) =>
{
    if (!pars.Field)
      {
        return (<div></div>);
      }
    else {
      let field = pars.Field;
      return validator?
        (
        <div>
          <label htmlFor={validator.id} >
            {validator.label}
          </label>
          <input {...validator.bind} />
          <p >{validator.error}</p>

        </div>
      ):
      (<div>
        <label htmlFor={field} >
          {pars.FieldName}
        </label>
        <input id={field} />
      </div>)
    };
};

exports.VitesseBAField = VitesseBAField;
