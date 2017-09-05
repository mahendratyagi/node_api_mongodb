var express = require('express')
    ,bodyParser = require('body-parser')
    ,mongoose = require('mongoose');
var config = require('./server/config');
var app = express();

// import your routes
var apiRoutes = require('./server/routes/api');

// connect your database
mongoose.connect(config.mongooseServerUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongo database');
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());

function checkAuth(){
    console.log('check valid token');
}

app.use('/api', apiRoutes);


app.get('/', function (req, res) {
    res.send('Welcome to the Bubby Mini Project!!')
})




app.listen(3200, function () {
    console.log('Listening on port 3200!')
})