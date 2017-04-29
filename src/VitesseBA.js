import React, { PropTypes, Component } from 'react'
//import './VitesseBA.less';

export default class VitesseBA extends Component {

  getFields (e) {
    fetch(`/getFields`,
      {
        method: 'get',
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
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
    </div>);
  }
}
