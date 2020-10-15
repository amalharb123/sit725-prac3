var express=require('express')
var moment= require('moment')

var app=express()


app.use(express.static(__dirname + '/public'));


var log=function(message){
    var time=moment().format()
    console.log('[Server] @'+time+' '+message)

}
var adder=function(num1,num2){
    var result = num1+num2;
    return result
} 




var port=3000;
app.listen(port)
log('Server listening on: '+port)
