var http = require("http");
var fs = require("fs");
var axios = require("axios");
var qs = require('qs');
var path = require('path')

require('dotenv').config();

var PORT = process.env.PORT || 8888;

var staticBasePath = './public';

/* SOURCED: https://stackabuse.com/node-http-servers-for-static-file-serving/ */
var staticServe = function(req, res) {
    var resolvedBase = path.resolve(staticBasePath);
    var safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    var fileLoc = path.join(resolvedBase, safeSuffix);
    
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
        
        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
};

/* Create an HTTP server to handle responses */
http.createServer(function(req, res) {
    switch (req.url) {
        case '/api/spotify/token': {
            let buff = Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET, 'utf-8');
            let base64data = buff.toString('base64');

            axios('https://accounts.spotify.com/api/token', {
                method: 'POST',
                url: 'https://accounts.spotify.com/api/token',
                headers: { 
                    'Authorization': 'Basic ' + base64data, 
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: qs.stringify({
                    'grant_type': 'client_credentials'
                })
            }).then(function (response) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
                res.end();
              });
            break;
        }

        default: {
            staticServe(req, res);
            break;
        }
    }
}).listen(PORT);