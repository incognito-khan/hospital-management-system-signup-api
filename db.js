// db.js
const mongoose = require('mongoose');
const { localDB } = require('./config');

class DBConnector {
  constructor(dbURI) {
    this.dbURI = dbURI;
  }

  async connect() {
    await mongoose.connect(this.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  }
}

const dbConnector = new DBConnector(localDB);

module.exports = { DBConnector, dbConnector };

