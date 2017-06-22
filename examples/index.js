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
    let countrySelect;
    let renderVitesseBA = function() {
      let countryCurrency = countrySelect.value;
      const element = <VitesseBA countryCurrency={countryCurrency} ></VitesseBA>;
      render(element,  document.getElementById('vitesseBA'));
    };

    return <div>
    Country:
    <select id="country" onChange={renderVitesseBA} ref={(select) => { countrySelect = select; }}>
      <option>GB/GBP</option>
      <option>GB/EUR</option>
      <option>AU/EUR</option>
      <option>FR/EUR</option>
      <option>FR/PLN</option>
      <option>US/USD</option>
      <option>US/SEK</option>

      <option>PL/PLN</option>
      <option>PL/EUR</option>
      <option>NO/EUR</option>
      <option>NO/NOK</option>
      <option>NO/USD</option>
      <option>SE/EUR</option>
      <option>SE/SEK</option>
      <option>SE/USD</option>
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
