
const s=require('http');
s.createServer(function(req,res){
    console.log("Request received");
    res.write("<h1>Welcome</h1>");
    res.end();
    process.end();
}).listen(8080)
