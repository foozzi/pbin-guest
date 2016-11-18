# pbin-guest

![pastebin](http://i.imgur.com/NrW2Kkl.png)

## Install
```bash
$ npm install pbin-guest
```

## How to
```js
var pbin = require('pbin');
pbin.paste({title: 'test', code: 'test pbin'}, 'api_key', function(link, err){
	if(err){
		console.log(err)
	}
	console.log(link)
});
```
## Test
```bash
$ npm test
```
