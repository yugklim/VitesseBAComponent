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


  const selectorComponent = () => {
    let renderVitesseBA = function() {
      const element = <VitesseBA></VitesseBA>;
      render(element,  document.getElementById('vitesseBA'));
    };

    return <div>
    Country:
    <select id="country" onChange={renderVitesseBA}>
      <option>GB</option>
      <option>AU</option>
      <option>FR</option>
    </select>
    Currency:
    <select id="currency" onChange={renderVitesseBA}>
      <option>GBP</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
  </div>};
  const selector = <selectorComponent></selectorComponent>
    // doesnt work
    //render(selector,  document.getElementById('selector'));
render({
    $$typeof: Symbol.for('react.element'),
    type: selectorComponent
  },  document.getElementById('selector'));




// /renderVitesseBA();
// render({
//     $$typeof: Symbol.for('react.element'),
//     type: VitesseBA
//   },  document.getElementById('vitesseBA'));
//render({type: VitesseBA},  document.getElementById('vitesseBA'));
//render(<VitesseBA></VitesseBA>,  document.getElementById('vitesseBA'));
