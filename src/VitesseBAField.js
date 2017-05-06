import React, { PropTypes, Component } from 'react'

export default class VitesseBAField extends Component {

  render() {
    const { Field, FieldName, fieldType, minLength, maxLength, options, path } = this.props.pars;
    if (!Field)
    {
      return (<div></div>);
    }
    else
      return (
        <div>{FieldName}:<input type="text"/></div>
      );
  }
}
