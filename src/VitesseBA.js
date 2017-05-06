import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
//import {_} from './node_modules/underscore'
import {_} from 'underscore'
import VitesseBAFields from './VitesseBAFields'
import extractBAFields from './utilities/extractBAFields'
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
            let x2 = "DDDD";
            let baFields = extractBAFields(data);
            let x = <VitesseBAFields fields={baFields}></VitesseBAFields>;//new VitesseBAFields();
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

