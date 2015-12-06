/*
*   Map Reduce Mongo DB
*   Jesús Juan Aguilar
*/
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    assert = require('assert');

var db = new Db('simpledb', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

  // Create a test collection
  db.createCollection('test_map_reduce_functions', function(err, collection) {

    // Insert some documents to perform map reduce over
    collection.insert([{'user_id':1}, {'user_id':2}], {w:1}, function(err, r) {

      // Map function
      var map = function() { emit(this._id, 1); };
      // Reduce function
      var reduce = function(k,vals) { return 1; };

      // Peform the map reduce
      collection.mapReduce(map, reduce, {out: {replace : 'tempCollection', readPreference : 'secondary'}}, function(err, collection) {
        // Mapreduce returns the temporary collection with the results
        collection.findOne({'_id':1}, function(err, result) {
          assert.equal(1, result.value);

          collection.findOne({'_id':2}, function(err, result) {
            assert.equal(1, result.value);

            db.close();
          });
        });
      });
    });
  });
});