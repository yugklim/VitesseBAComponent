import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
// import VitesseBAFields from './VitesseBAFields'
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
            let x2 = "DDDD"
            let x = <VitesseBAFields field={x2}></VitesseBAFields>;//new VitesseBAFields();
            ReactDOM.render(
              // React.createElement('VitesseBAFields',null,null),
              x,
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
    return (
    <div className="MyComponent">
      <input type='button' value="Rules" onClick={::this.getFields}/>
      <div id="vitesseBAFields"></div>
    </div>);
  }
}

class VitesseBAFields extends Component {

  render() {
    const { field, fields } = this.props;
    // if (!fields)
    // {
    //   return (<div></div>);
    // }
    // else
    return (
      <div>
        { field }
      </div>);
  }
}
