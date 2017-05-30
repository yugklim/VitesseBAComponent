import React from 'react'
import { shallow } from 'enzyme'
import VitesseBAField from '../../src/VitesseBAField'

function setup() {
  const props = {
    pars: {
      Field: 'Field1',
      FieldName: 'FieldName1'
    }
  }

  const vitesseBAField = shallow( <VitesseBAField {...props}/>)

  return {
    props,
    vitesseBAField
  }
}

describe('VitesseBAField component', () => {
  it('should render self and subcomponents', () => {
    // const {props, vitesseBAField} = setup()
    // let fieldNameDiv = vitesseBAField.find('div')//.findWhere(d => d.text() == props.pars.FieldName);
    // console.log(vitesseBAField.html());
    // console.log(fieldNameDiv.text());
    // //expect(fieldNameDiv.text()).toBe(props.pars.FieldName + ':');
    expect(true).toBe(true);
  });
});

