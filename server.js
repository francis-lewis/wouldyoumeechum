var express = require("express"), 
Handlebars = require("handlebars"),
fs = require("fs"),
path = require ("path"),
http = require("http"),
app = express(),
port = process.env.PORT || 5000,
FB_APPID_DEV = 801691956547548,
FB_APPID_PROD = 801691956547548,
FBAppID = (port == 5000 ? FB_APPID_DEV : FB_APPID_PROD);

app.get('/', function(req, res){
    fs.readFile('public/index.html', 'utf8', function(err, contents){
        if(err){
        } else {
          var context = {"FBAppID": FBAppID};
          var template = Handlebars.compile(contents);
          res.send(template(context));
        }
    });
});

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);

server.listen(port);