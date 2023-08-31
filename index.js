const express = require('express');
//port
const port =process.env.PORT || 8000;
const db = require('./config/mongoose');
//passport config
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});
