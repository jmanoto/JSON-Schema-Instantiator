# JSON-Schema-Instantiator
A simple tool for instantiating JSON Schemas!  
Amended to support `anyOf` (jmanoto)

## Installing

### Node.js

```
npm install git+https://git@github.com/jmanoto/jsck.git
```

## Using

### Node.js
``` javascript
var instantiator = require('json-schema-instantiator');

...

var schema = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "default": "Example"
        }
    }
},  instance = instantiator.instantiate(schema);
    
    // instance === { title: "Example" }
```


