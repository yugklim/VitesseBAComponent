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

const VitesseBAField =
  ({ pars }) =>
{
  if (!pars.Field)
    {
      return (<div></div>);
    }
    else
      return (
        <div>{pars.FieldName}:<input type="text"/></div>
      );
};

export default VitesseBAField
