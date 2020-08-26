//dependencies import
const express = require('express');
const hbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

//helpers import
const helpers = require("./helpers");

//declare routes
const public_route = require('./routes/public_routes');
const event_route = require('./routes/event_routes');
const artist_route = require('./routes/artist_routes');


//app settings
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers
}));

// Configuration for handling API endpoint data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, () => {
    console.log('App listening at port ' + port);
});

//set static files
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use('/', public_route);
app.use('/events', event_route);
app.use('/artists', artist_route);