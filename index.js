const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware --> to catch data from a form submission
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// https://github.com/expressjs/method-override
// override using a query value
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));


// DATABASE CONNECTION -------------------------

/*
Username: admin
Password: admin12
Connection string: mongodb+srv://admin:<password>@cluster0-h3shv.mongodb.net/test?retryWrites=true
*/

// Connect to database 
mongoose.Promise = global.Promise;
const mongoURI = 'mongodb+srv://admin:admin12@cluster0-h3shv.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoURI,  {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// ROUTES -------------------------------------

// @route       GET /
// @desc        Main info page
// @access      Public
app.get('/', (req, res) => {
    res.render('index');
});


// Set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

