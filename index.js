const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Load routes
const user = require('./routes/user');

// set the view engine to ejs
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

// Use routes
app.use('/user', user);

// Set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

