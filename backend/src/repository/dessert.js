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
    let dessert;
    try {
      const result = await this.dessertProvider.findById(dessertId);
      dessert = new Dessert(result);
    } catch (error) {
      throw error;
    }

    return dessert;
  }
}

module.exports = DessertRepo;
