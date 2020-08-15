const Dessert = require("../entity/dessert");
class DessertUsecase {
  constructor({ dessertRepo }) {
    this.dessertRepo = dessertRepo;
  }

  async createDessert(data) {
    const dessert = new Dessert(data);
    const created = await this.dessertRepo.insertDessert(dessert);
    return created;
  }

  async getDessert(dessertId) {
    const dessert = await this.dessertRepo.getDessert(dessertId);
    return dessert;
  }
}

module.exports = DessertUsecase;
