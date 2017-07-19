// import React from 'react'
// import InputMask from 'react-input-mask';
// var _ = require('lodash')
import Radium from 'radium';
var VitesseBAField = require('./VitesseBAField').VitesseBAField

//
// let getStyles = function() {
//   const status = {
//     notification: '#0074D9',
//     success: '#27AE60',
//     error: '#E74C3C'
//   }
//
//   return {
//     alert: {
//       position: 'relative',
//       width: '100%',
//       padding: '5px',
//       borderRadius: '3px',
//       backgroundColor: status.notification,
//       color: 'white',
//       textAlign: 'center',
//       success: {
//         backgroundColor: status.success
//       },
//       ':hover': {
//         boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
//       },
//       error: {
//         backgroundColor: status.error
//       }
//     }
//   };
// }
//
// const styles = getStyles();

class VitesseBAFieldInherited extends VitesseBAField {
  getStyles() {

    const status = {
      error: 'pink'
    }

    return {
      alert: {
        color: status.error
      }
    };

  }
}

exports.VitesseBAFieldInherited = Radium(VitesseBAFieldInherited);
