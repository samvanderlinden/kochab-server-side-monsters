console.log('Hey there');

const express = require('express');
const app = express();
const PORT = 5000;

const monsters = require('./monsters-module');

app.use(express.static('public'));

app.get('/monsters', function(req, res){
    console.log(monsters);
    res.send(monsters); 
});

console.log(monsters);


app.listen(PORT, function (){ // this function waits for server to run and then the function calls back the 'console.log'
    console.log(`listening to port, ${PORT}`);
});