const express = require('express');
const bodyParser = require('body-parser');
// express give a service side app
const app = express();

//parse the submitted data to json
app.use(bodyParser.json());

// express.static tell express where is the index
app.use(express.static(__dirname + '/public'));

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

app.get('/get_students', function (request,response) {
    let students = [
        {name:'harry',gender: 'm'},
        {name:'gary',gender: 'm'},
        {name:'ccc',gender: 'm'},
    ];
    response.send(students);
});

app.post('/register_user', function (req,res) {
    //req.body
    console.log(req.body);
    res.send('ok');
});

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('server started, plz go to http://localhost:3000')
});