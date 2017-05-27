import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import VitesseBAField from './VitesseBAField'

import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react';
import validatorjs from 'validatorjs';


//import './VitesseBA.less';

// export default class VitesseBAFields extends Component {
//
//   render() {
//     const { field, fields } = this.props;
//     if (!fields)
//     {
//       return (<div>No BA Fields</div>);
//     }
//     else
//       return (
//         <div>
//           {
//             fields.map(function (val, idx) {
//               return (<div>{val.Path} -> <VitesseBAField pars={val}></VitesseBAField></div>);
//             })
//           }
//         </div>);
//   }
// }

const VitesseBAFields = observer(
  ({ fields, form }) =>
  {
    //let b = form.$('email');
    if (!fields)
    {
      return (<div>No BA Fields</div>);
    }
    else {
      let binds = [];

      for (let index = 0; index < fields.length; ++index) {
        let field = fields[index];
        binds[field.Field] = {};
        binds[field.Field].bind = form.$(field.Field).bind();
        binds[field.Field].id = form.$(field.Field).id;
        binds[field.Field].label = form.$(field.Field).label;
        binds[field.Field].error = form.$(field.Field).error;
      }

      let emBind = form.$('email').bind();

      let x =
        <form>
          <div>
            <label htmlFor={form.$('email').id}>
              {form.$('email').label}
            </label>
            <input {...emBind } />
            <p>{form.$('email').error}</p>
          </div>

          <div>
            <label htmlFor={form.$('password').id}>
              {form.$('password').label}
            </label>
            <input {...form.$('password').bind()} />
            <p>{form.$('password').error}</p>
          </div>

          {
            fields.map(function (val, idx) {
              //return (<div>{val.Path} -> <VitesseBAField pars={val} form={form}></VitesseBAField></div>);
              return (<VitesseBAField pars={val} binds={binds} idx={idx} form={form}></VitesseBAField>);
            })
          }

          <button type="submit" onClick={form.onSubmit}>Submit</button>
          <button type="button" onClick={form.onReset}>Reset</button>
          <button type="button" onClick={form.onClear}>Clear</button>

          <p>{form.error}</p>
        </form>;
      return x;
    }
  });

export default VitesseBAFields
