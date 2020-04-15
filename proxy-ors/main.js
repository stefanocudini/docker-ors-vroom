
var http = require('http');
var url = require('url');

var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
	target:'http://localhost:9000'
	//selfHandleResponse: true
})
//.listen(8000); // See (†)


proxy.on('proxyRes', function (proxyRes, req, res) {

	var body = [];

	proxyRes.on('data', function (chunk) {
		body.push(chunk);
	});

	proxyRes.on('end', function () {

		body = Buffer.concat(body).toString();

		let b = JSON.parse(body)

		console.log("res from proxied server:", b);

		res.end("by proxy");
	});
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {

	console.log('ON REQUEST', proxyReq)
/*parsed = url.parse(proxyReq.path, true);
parsed.query['limit'] = 2
updated_path = url.format({pathname: parsed.pathname, query: parsed.query});
proxyReq.path = updated_path
proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');*/
});


http.createServer(function(req, res) {
  proxy.web(req, res);
})
.listen(8000);