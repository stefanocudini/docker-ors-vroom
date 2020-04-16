
var http = require('http');

var PORT = 9090;

// For each routing profile add a host and a port for use with osrm
// and ors.
var orshost = 'localhost';
var orsport = '8080';
orshost = process.env.ORS_HOST || orshost;
orsport = process.env.ORS_PORT || orsport;


function onRequest(req, res) {

	console.log('\nclient request: ' + req.url);
	console.log('headers: ', req.headers);

	var opts = {
		hostname: orshost,
		port: orsport,
		path: req.url,
		method: req.method,
		headers: req.headers
	};

	req.on('data', function(chunk) {

		var body = JSON.parse(chunk);

		//modifica body di richiesta
		//vedi file: ors-app_request_restrictions.json
		//oppure qui: https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/post
	
		if((new RegExp('directions')).test(req.url)) {

			body.preference = "shortest";

			body.options = {
				"vehicle_type": "hgv",
		        "profile_params": {
		            "restrictions": {
		                "weight": "4",	//in tons            	
		                "height": "4",	//in meters
		                "length": "4",	//in meters
		                "width": "4"	//in meters
		            }
		        }
		    };
		}

		var body_edit = JSON.stringify(body);

		console.log('body:', body);

		opts.headers['content-length'] = Buffer.byteLength(body_edit);

		var proxy = http.request(opts, function(resp) {

			//console.log('RESPONSE',resp.headers)

			res.writeHead(resp.statusCode, resp.headers);

			resp.pipe(res, {
				end: true
			});

			/*DEBUG resp.on('data', function(d) {
				console.log('RESPONSE body',JSON.parse(d))
			});*/
		});

		proxy.write(body_edit);
		proxy.end();
	});
}

http
.createServer(onRequest)
.listen(PORT);

console.log('proxy listen...',PORT);

