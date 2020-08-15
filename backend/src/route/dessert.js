const DessertProvider = require("../povider/dessert");
const DessertUsecase = require("../usecase/dessert");
const DessertRepo = require("../repository/dessert");
const express = require("express");
const router = express.Router();

const insertDessert = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.sendStatus(400).send({ success: false });
    }

    const provider = new DessertProvider();
    const dessertProvider = await provider.createConnection();
    console.log("dessertProvider", dessertProvider);
    const dessertRepo = new DessertRepo({ dessertProvider });
    const dessertUsecase = new DessertUsecase({ dessertRepo });
    const result = await dessertUsecase.createDessert(data);
    if (result) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  } catch (error) {
    res.send({ success: false, message: error });
    throw error;
  }
};

router.post("/", insertDessert);
// router.get("/:id", createLog);
// router.patch("/:id", createLog);
// router.delete("/:id", createLog);

module.exports = { router };
