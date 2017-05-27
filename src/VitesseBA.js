import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
//import {_} from './node_modules/underscore'
import {_} from 'underscore'
import VitesseBAFields from './VitesseBAFields'
import extractBAFields from './utilities/extractBAChunks'
//import './VitesseBA.less';






export default class VitesseBA extends Component {

  getFields (e) {
    fetch(`/getFields`,
      {
        method: 'get',
      }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {

          let baFields = extractBAFields(data);



          ReactDOM.render(
            // React.createElement('VitesseBAFields',null,null),
            <VitesseBAFields fields={baFields}></VitesseBAFields>,
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

