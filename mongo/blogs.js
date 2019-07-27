var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/blogger', function (err, client) {
    if (err) throw err

    var db = client.db('blogger')

    db.collection('posts').find().toArray(function (err, result) {
        if (err) throw err


    })
})