var express = require('express')
var app = express()
 

// Gets block.
app.get('/blockchain', function (req, res) {
  
});

// Create a new transaction.
app.post('/transaction', function(req, res){

});

// Mines a new block.
app.get('/mine', function(req, res){

});
 
 
app.listen(3000, function() {
    console.log('Listening on port 3000...');
})