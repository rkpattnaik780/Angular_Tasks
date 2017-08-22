const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/todo';
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Get our API routes

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/showtasks', function (req, res) {
      mongo.connect(url, function (err, db) {
        if (err) throw err;
        db.collection('tasks').find().toArray(function (err, data) {
            if (err) throw err;
            res.json(data);
            db.close();
        });
    }); 
});

app.post("/postTasks" , function( req, res){
      mongo.connect(url, function (err, db) {
        if (err) throw err;
        db.collection('tasks').insertOne(req.body , function (err, data) {
            if (err) throw err;
            res.json(req.body);
            db.close();
        });
    });
});

app.delete("/deletetask/:id" , function(req , res){
    var id = req.params.id ;
    var t = new ObjectID(id);
     mongo.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("tasks").deleteOne({ "_id" : t}, function (err, doc) {
            if (err) throw err;
            res.end();
            db.close();
        });
    });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';

app.listen(port , function(){
    console.log("app live on port " + port);
})