const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');

const templatePath = path.join(__dirname, './templates');

//db
require('./db/mongoose');

//pasery
//Content-type: application/json
app.use(bodyParser.json());
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}))

//fix cors
app.use(cors());

//routes
app.use('/api', apiRouter);

//serwer
app.listen(port, function() {
    console.log('serwer slucha... http://localhost:' + port);
});
