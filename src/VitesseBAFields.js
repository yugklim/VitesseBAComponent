import React, { PropTypes, Component } from 'react'
//import './VitesseBA.less';

export default class VitesseBAFields extends Component {

  render() {
    const { field } = this.props;
    return (
      <div>
        {field}
      </div>);
  }
}