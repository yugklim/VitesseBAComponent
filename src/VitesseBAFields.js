import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
//import './VitesseBA.less';

export default class VitesseBAFields extends Component {

  render() {
    const { field, fields } = this.props;
    if (!fields)
    {
      return (<div>No BA Fields</div>);
    }
    else
      return (
        <div>
          {
            fields.map(function (val, idx) {
              return (<div>1</div>);
            })
          }
        </div>);
  }
}
