var React = require('react')
var shallow = require('enzyme').shallow
var VitesseBAField = require ('../../src/VitesseBAField').VitesseBAField

function setup() {
  const props = {
    pars: {
      Field: 'Field1',
      FieldName: 'FieldName1'
    },
    validator: { id: 'id', label: 'label', bind: [1,2], error: 'error'}
  }

  const vitesseBAField = shallow(<VitesseBAField {...props}/>)

  return {
    props,
    vitesseBAField
  }
}

describe('VitesseBAField component, validator is present', () => {

  it('should render label, error message', () => {
    const {props, vitesseBAField} = setup();
    let label = vitesseBAField.find('label');//.findWhere(d => d.text() == props.pars.FieldName);
    let input = vitesseBAField.find('input');
    let error = vitesseBAField.find('p');
    expect(label.node).toBeTruthy();
    expect(error.node).toBeTruthy();
  });

  it('label should have htmlFor = validator id', () => {
    const {props, vitesseBAField} = setup();
    let label = vitesseBAField.find('label');
    let htmlFor = label.node.props.htmlFor;
    expect(htmlFor).toBe(props.validator.id);
  });

  it('p should have error message', () => {
    const {props, vitesseBAField} = setup();
    let error = vitesseBAField.find('p');
    expect(error.text()).toBe(props.validator.error);
  });

});

