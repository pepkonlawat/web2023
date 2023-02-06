//-----app.js-----//
var util = require('util');
var fs = require('fs');

function readFile(str, callback){//calback จบprocess ให้ทำอะไรต่อ 
    var lines =[];
    fs.readFile(str, function (err, data) {
        if (err) throw err; 
        lines.push(data); 
        console.log(data.toString());
    });
   callback(lines);
}

var a, b;
readFile('./20.txt', function(data){
    a= data;
}); 

readFile('./10.txt',function(data){
    b= data;
}); 
util.log("a -- "+a);
util.log("b -- " +b);