const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://akashdeep:Dyhal9Jo06NVc7GU@cluster0-dosbk.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getdb = () => {
  if (_db) {
    return _db;
  } else {
    throw "no databasefound";
  }
};

exports.mongoConnect = MongoConnect;
exports.getDb = getdb;
