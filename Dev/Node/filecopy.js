const fs=require('fs');
var readfrom=fs.ReadStream('./data.txt');
var writeto=fs.WriteStream('./data1.txt');
readfrom.pipe(writeto)
console.log("Copied")