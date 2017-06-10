var React = require('react')
var shallow = require('enzyme').shallow
var VitesseBAField = require ('../../src/VitesseBAField').VitesseBAField

function setup() {
  const props = {
    pars: {
      Field: 'Field1',
      FieldName: 'FieldName1'
    }
  }

  const vitesseBAField = shallow(<VitesseBAField {...props}/>)

  return {
    props,
    vitesseBAField
  }
}

describe('VitesseBAField component, without validator', () => {

  it('should render label, input, and no error message', () => {
    const {props, vitesseBAField} = setup();
    let label = vitesseBAField.find('label');//.findWhere(d => d.text() == props.pars.FieldName);
    let input = vitesseBAField.find('input');
    let error = vitesseBAField.find('p');
    expect(label.node).toBeTruthy();
    expect(input.node).toBeTruthy();
    expect(error.node).toBeFalsy();
  });

  it('label should have htmlFor = Field', () => {
    const {props, vitesseBAField} = setup();
    let label = vitesseBAField.find('label');
    let htmlFor = label.node.props.htmlFor;
    expect(htmlFor).toBe(props.pars.Field);
  });

  it('input should have id = Field', () => {
    const {props, vitesseBAField} = setup();
    let input = vitesseBAField.find('input');
    let id = input.node.props.id;
    expect(id).toBe(props.pars.Field);
  });

});

