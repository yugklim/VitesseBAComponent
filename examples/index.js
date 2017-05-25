import React from 'react'
import { render } from 'react-dom'
//import ReactDOM from 'react-dom'
import  VitesseBA  from '../src/VitesseBA.js'

// const VitesseBA = ({}) => <div>AAAA</div>;
// const VitesseBAX = ({}) => (
// {
//   $$typeof: Symbol.for('react.element'),
//   type: VitesseBA,
//   props: {}
// }
// )

//const Button = ({ color, children }) => <button style={{ background: color }}>{children}</button>;

// ReactDOM.render({
//   $$typeof: Symbol.for('react.element'),
//   type: Button,
//   props: {
//     children: 'OK!',
//     color: 'blue'
//   }
// }, document.getElementById('vitesseBA'));

render({
    $$typeof: Symbol.for('react.element'),
    type: VitesseBA
  },  document.getElementById('vitesseBA'));
//render({type: VitesseBA},  document.getElementById('vitesseBA'));
//render(<VitesseBA></VitesseBA>,  document.getElementById('vitesseBA'));
