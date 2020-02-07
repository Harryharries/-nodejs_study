const express = require('express');

const app = express();

//app.use(express.static(__dirname + 'public'));

// provide a get request
app.get('/get_username', function (request,response) {
   response.send({
       name: 'harry'
   })
});

app.get('/get_classname', function (request,response) {
    response.send({
        name: '1904'
    })
});

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('server started, plz go to http://localhost:3000')
});