const Dessert = require("../entity/dessert");
class DessertRepo {
  constructor({ dessertProvider }) {
    this.dessertProvider = dessertProvider;
  }

  async insertDessert(dessert) {
    const result = await this.dessertProvider.insert(dessert);
    return true;
  }

  async getDessert(dessertId) {
    const result = await this.dessertProvider.findById(dessertId);
    const dessert = new Dessert(result);
    return dessert;
  }
}

module.exports = DessertRepo;
