var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require('fs');
var path = require('path');



exports.insert = (req, res) => {
    const nameVal = req.query.firstname;
    console.log(nameVal);
    const emailVal = req.query.lastname;
    const phone = req.query.password;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Raghu");
      var myobj = { name:nameVal, address: emailVal };
      dbo.collection("details").insertOne(myobj, function(err, response) {
        if (err) throw err;
        res.json({"message": "Inserted Successfully ."});
        db.close();
      });
    }); 
    console.log('Inserted Successfully');
};

exports.getData = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Raghu");
        dbo.collection("details").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
          });
      }); 
};

exports.start = (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
    //res.sendFile('f:/H-drive/NewFolder/Sample-Node/index.html');
};