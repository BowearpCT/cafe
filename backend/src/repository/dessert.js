class DessertRepo {
  constructor({ dessertProvider }) {
    this.dessertProvider = dessertProvider;
  }

  async insertDessert(dessert) {
    const result = await this.dessertProvider.insert(dessert);
    return true;
  }
}

module.exports = DessertRepo;
