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

const getDessert = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.sendStatus(400).send({ success: false });
    }

    const provider = new DessertProvider();
    const dessertProvider = await provider.createConnection();
    const dessertRepo = new DessertRepo({ dessertProvider });
    const dessertUsecase = new DessertUsecase({ dessertRepo });
    const dessert = await dessertUsecase.getDessert(id);
    console.log("dessert", dessert);
    if (!dessert) {
      res.send({ success: true, data: "Not found" });
    } else {
      res.send({ success: true, data: dessert });
    }
  } catch (error) {
    res.send({ success: false, message: error });
    // throw error;
  }
};

router.post("/", insertDessert);
router.get("/:id", getDessert);
// router.get("/:id", createLog);
// router.patch("/:id", createLog);
// router.delete("/:id", createLog);

module.exports = { router };
