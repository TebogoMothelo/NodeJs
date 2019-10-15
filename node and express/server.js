var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MusicPlayer";
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var exports = module.exports = {};

var server = app.listen(3090, () => {
    console.log('listening on port 3090')
});

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var con = MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) throw err;
    console.log("Database created");
    db.close();
});
//connect to mongodb
MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) throw err;
    var dbo = db.db("MusicPlayer");
    dbo.createCollection("Musician", (err, res) => {
        if (err) throw err;
        console.log("Collection created");
        db.close()
    });
})
//add new musician
app.post('/add/:musician', (req, res, next) => {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw err;
        var dbo = db.db("MusicPlayer");
        dbo.collection("Musician").insertOne(req.body, (err, res) => {
            if (err) throw err;
            db.close();
        });
        res.redirect('/')
    });
});
//get data onto page
app.get('/get', (req, res) => {
    var result = [];
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw error;
        var dbo = db.db("MusicPlayer");
        var cursor = dbo.collection("Musician").find({});
        cursor.forEach((doc, err) => {
            result.push(doc)
        }, () => {
            db.close();
            res.send(result)
        })
    })
});
//delete
app.post('/:id', (req, res) => {
    var id = req.body;
    console.log(id)
    var objectId = require("mongodb").ObjectID
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw err;
        var dbo = db.db("MusicPlayer");
        dbo.collection("Musician").deleteOne({
            "_id": objectId(id.id)
        }, (err, result) => {
            console.log(id.id)
            if (err) throw err;
            db.close();
            res.redirect('/')
        });
    });
})
//update
app.post('/:id/update', (req, res) => {
    var objectId = require("mongodb").ObjectId
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw err;
        var dbo = db.db("MusicPlayer");
        var newData = {
            $set: {
                name: req.body.newName
            }
        }
        var id = req.body
        dbo.collection("Musician").updateOne({
            "_id": objectId(id.delete)
        }, newData, (err, result) => {
            if (err) throw err;
            db.close();
            app.redirect('/')
        });
    });

})

exports.closeServer = function () {
    server.close();
};