# Warder

*Lightweight request control middleware for Express 4*

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

You can control requests headers, params and bodies easily with **warder**.


#### Getting Started

First step install module and save into your dependencies.

##### Install via NPM

Open terminal and write below line for installation.

```
npm install warder --save
```
After you completed install, define **warder** in your app.

##### Express Integration

You should define **warder** in file which handle requests.

```javascript
var express = require('express');
var app = express();
var warder = require('warder');

app.get('/path', warder(controlType, paramsArray), callbackFunction)

var callbackFunction = function (req, res, next) {
   // do somethings here
}
```

Don't forget! Second argument must be an array.

##### Check Request Headers
```javascript
app.get('/users', warder('headers',['token','ipAddr']), callbackFunction)
```

##### Check Request Body
```javascript
app.post('/users', warder('body',['username','email']), callbackFunction)
```

##### Check Request Query Params
```javascript
app.get('/search', warder('query',['q','p']), callbackFunction)
```

When request don't provide your requirements warder send response like below:
```json
{
    "error": true, 
    "message": "Required fields not provided: username, password"
}
```

If you have an idea or find error please entry issue. 

[npm-image]: https://img.shields.io/npm/v/warder.svg?style=flat
[npm-url]: https://npmjs.org/package/warder
[downloads-url]: https://npmjs.org/package/warder
[downloads-image]: https://img.shields.io/npm/dm/warder.svg?style=flat

