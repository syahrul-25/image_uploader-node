const express = require('express');
const app = express();

const hbs = require('express-handlebars');

const path = require('path');

const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.urlencoded({extended : true}));

// serving static file
app.use('public',express.static(path.join(__dirname,'public')));

// connect mongodb database
require('./server/database/database')();

// setup view engine
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname : 'hbs',
    defaultView : 'default',
    layoutsDir : path.join(__dirname,'views'),
    partialsDir : path.join(__dirname,'views/partials')
}))

// calling route
app.use('/', require('./server/router/router'));

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});