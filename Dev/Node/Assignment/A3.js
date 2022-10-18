var http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 3089;
const requestListener = function (req, res) {
    var url = req.url;
    

	
	if(url ==='/') {
		
        fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
	}
    if(url ==='/user') {
		
        fs.readFile(__dirname + "/user.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
	}
};

const server = http.createServer(requestListener);
server.listen(port);
console.log("Server was listening at"+port);