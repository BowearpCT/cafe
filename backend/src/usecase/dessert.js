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
}

module.exports = DessertUsecase;
