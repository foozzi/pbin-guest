var pbin = require('./lib/pbin.js');

pbin.paste({title: 'test', code: 'test pbin'}, '', function(link, err){
	if(err){
		console.log(err)
	}
	console.log(link)
});