const { MongoClient } = require("mongodb");
class DessertProvider {
  constructor() {
    this.mongoUrl = "mongodb://mongo:27018";
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

  async findById(id) {
    if (!this.connection) {
      return null;
    }
    let result;
    try {
      result = await this.connection.findOne({ id: id });
    } catch (error) {
      throw error;
    }
    return result;
  }
}

module.exports = DessertProvider;
