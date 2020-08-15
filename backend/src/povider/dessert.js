const { MongoClient } = require("mongodb");
class DessertProvider {
  constructor() {
    this.mongoUrl = "mongodb://localhost:27017";
    this.db = "cafe";
    this.collection = "dessert";
    this.connection = null;
  }

  async createConnection() {
    try {
      console.log("mongoUrl", this.mongoUrl);
      const connection = await MongoClient.connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.connection = connection.db(this.db).collection(this.collection);
    } catch (error) {
      throw error;
    }

    return this;
  }

  async insert(dessert) {
    if (!this.connection) {
      return;
    }
    let createResult;
    try {
      createResult = await this.connection.insertOne(dessert);
    } catch (error) {
      throw error;
    }
    return createResult;
  }
}

module.exports = DessertProvider;