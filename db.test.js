// db.test.js
const mongoose = require('mongoose');
const {DBConnector} = require('./db');

jest.mock('mongoose');

describe('DBConnector', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mongoose.connect.mockClear();
  });

  it('connects to the database', async () => {
    const dbURI = 'mongodb://localhost:27017/test-db';
    const dbConnector = new DBConnector(dbURI);

    await dbConnector.connect();

    expect(mongoose.connect).toHaveBeenCalledWith(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
});