import request from 'request';
import url_validator from 'valid-url';


export function paste(params, api_key, cb) {
	// check api_key
	if(!/^[a-f0-9]{32}$/.test(api_key)) {
		return cb({link:null, err: "Enter the valid api key - http://pastebin.com/api"});
	}
	const formData = {
		'api_option': 'paste',
		'api_dev_key': api_key,
		'api_paste_private': 1,
		'api_paste_name': params.title,
		'api_paste_expire_date': 'N',
		'api_paste_format': 'text',
		'api_user_key': '',
		'api_paste_code': params.code
	};

	request.post(
	{
		url:'http://pastebin.com/api/api_post.php', 
		formData
	}, 
	function optionalCallback(err, httpResponse, body) {
	  	if (err) {
	  		return cb(null, err);
	  	}
	  	if (url_validator.isUri(body)){
	        return cb(body, null);
	    } else {
	        return cb(null, body);
	    }
	});
}