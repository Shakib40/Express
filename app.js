const express = require('express');

const users = require('./users.json');

const app = express();

app.listen(2345, function () {
    console.log( "Listening on port 2345" );
});

// app.get('' , (req,res) =>{
//     return res.send("Welcome to Home page");
// });


app.get('' , (req,res) =>{
    return res.send(users.users);
});

