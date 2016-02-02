var expect = require('chai').expect;

var instantiate = require('../src/instantiator').instantiate;

var schema, expected, result;

describe('Primitives', function() {

  it('should instantiate string', function() {
    schema = {
      'type': 'string'
    };
    result = instantiate(schema);
    expected = "";
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate number', function() {
    schema = {
      'type': 'number'
    };
    result = instantiate(schema);
    expected = 0;
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate boolean', function() {
    schema = {
      'type': 'boolean'
    };
    result = instantiate(schema);
    expected = false;
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate null', function() {
    schema = {
      'type': 'null'
    };
    result = instantiate(schema);
    expected = null;
    expect(result).to.deep.equal(expected);
  });

  it('should use default property', function() {
    schema = {
      'type': 'number',
      'default': 100
    };
    result = instantiate(schema);
    expected = 100;
    expect(result).to.deep.equal(expected);
  });
});


describe('Objects', function() {
  it('should instantiate object without properties', function() {
    schema = {
      'type': 'object'
    };
    result = instantiate(schema);
    expected = {};
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate object with property', function() {
    schema = {
      'type': 'object',
      'properties': {
        'title': {
          'type': 'string',
        }
      }
    };
    result = instantiate(schema);
    expected = {
      'title': ''
    };
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate object with property with default value', function() {
    schema = {
      'type': 'object',
      'properties': {
        'title': {
          'type': 'string',
          'default': 'Example'
        }
      }
    };
    result = instantiate(schema);
    expected = {
      'title': 'Example'
    };
    expect(result).to.deep.equal(expected);
  });

  it('should instantiate object with more than one property', function() {
    schema = {
      'type': 'object',
      'properties': {
        'title': {
          'type': 'string',
          'default': 'Example'
        },
        'amount': {
          'type': 'number',
          'default': 10
        }
      }
    };
    result = instantiate(schema);
    expected = {
      'title': 'Example',
      'amount': 10
    };
    expect(result).to.deep.equal(expected);
  });
});

describe('AllOf', function() {
  it('should instantiate schema with allOf', function() {
    schema = {
      'allOf': [
        {
          'type': 'object',
          'properties': {
            'title': {
              'type': 'string'
            }
          }
        },
        {
          'type': 'object',
          'properties': {
            'amount': {
              'type': 'number',
              'default': 1
            }
          }
        }
      ]
    };
    result = instantiate(schema);
    expected = {
      'title': '',
      'amount': 1
    };
    expect(result).to.deep.equal(expected);
  });
});


describe('AnyOf', function() {
  it('should instantiate schema with anyOf using default value', function() {
    schema = {
      'type': 'object',
      'properties': {
        'title': {
          'anyOf': [
            { 'type': 'string'},
            { 'type': 'null'}
          ],
          'default': ''
        }
      }
    };


    result = instantiate(schema);
    expected = {
      title: ''
    };
    expect(result).to.deep.equal(expected);
  })
})