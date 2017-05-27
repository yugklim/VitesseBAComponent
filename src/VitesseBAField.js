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



const VitesseBAField = ({ pars, binds, idx, form }) =>
{
    if (!pars.Field)
      {
        return (<div></div>);
      }
    else {
      let x = pars.Field;
      let y = form.$(x);
      return (
        <div>
          <label htmlFor={binds[x].id} >
            {binds[x].label}
          </label>
          <input {...binds[x].bind} />
          <p >{binds[x].error}</p>

        </div>
      )};
};

export default VitesseBAField
