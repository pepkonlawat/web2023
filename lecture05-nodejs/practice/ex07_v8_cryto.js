var crypto=require('crypto');var fs=require('fs');
var shasum = crypto.createHash('sha1');//hash ด้วย sha1
var s = fs.ReadStream('file.txt');//readstream อ่านข้อความยาวๆ
s.on('data',function(d) {
  shasum.update(d);
});
s.on('end',function() {  
    var d = shasum.digest('hex');
  console.log(d+' -- file.txt');
});