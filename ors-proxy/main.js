
var http = require('http');

var config = {
	"preference": "fastest",//"shortest",
    "options": {
        "vehicle_type": "hgv",
        "profile_params": {
            "restrictions": {
                "height": "5",
                "length": "5",
                "weight": "5",
                "width": "5"
            }
        }
    }
};
//TODO config = require('./config');

var PORT = 9090;

console.log('CONFIG:', JSON.stringify(config));

// For each routing profile add a host and a port for use with osrm
// and ors.
var orshost = 'localhost';
var orsport = '8080';
orshost = process.env.ORS_HOST || orshost;
orsport = process.env.ORS_PORT || orsport;

console.log('ORS-PROXY LISTEN', orshost, orsport)

function onRequest(req, res) {

	console.log('\n------\nREQUEST: ', req.url, JSON.stringify(req.headers));

	var opts = {
		hostname: orshost,
		port: parseInt(orsport),
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

			//TODO use underscore to extend
			body.preference = config.preference;
			body.options = config.options;
		}

		var body_edit = JSON.stringify(body);

		console.log(body);

		opts.headers['content-length'] = Buffer.byteLength(body_edit);

		var proxy = http.request(opts, function(resp) {

			//console.log('RESPONSE',resp.headers)

			res.writeHead(resp.statusCode, resp.headers);

			resp.on('data', function(d) {
				console.log('\n------\nORS RESPONSE:\n', JSON.parse(d))
			});

			resp.pipe(res, {
				end: true
			});
		});

		proxy.write(body_edit);
		proxy.end();
	});
}

http
.createServer(onRequest)
.listen(PORT);

console.log('proxy listen...',PORT);

