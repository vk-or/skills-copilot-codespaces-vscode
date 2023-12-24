// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/comments/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        var comments = JSON.parse(data);
        var comment = comments["comment" + req.params.id]
        console.log(comment);
        res.end(JSON.stringify(comment));
    });
})

app.post('/comments', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["comment4"] = req.body;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.delete('/comments/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["comment" + req.params.id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(3000, function () {
    console.log("Example app listening at http://localhost:3000")
})
