const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const insertHistory = async (req, res) => {
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "history";
  try {
    const { data } = req.body;
    if (!data) {
      return res.sendStatus(400).send({ success: false });
    }

    let connection = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = connection.db(db).collection(collection);
    await connection.insertOne(data);
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, message: error });
    throw error;
  }
};

const getPatientHistories = async (req, res) => {
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "history";
  let historyList = [];
  try {
    const { id } = req.params;
    if (!id) {
      return res.sendStatus(400).send({ success: false });
    }

    let connection = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = connection.db(db).collection(collection);

    const query = {
      patientId: id,
    };
    historyList = await connection.find(query).toArray();
    console.log(historyList);
    res.send({ success: true, data: historyList });
  } catch (error) {
    res.send({ success: false, message: error });
    throw error;
  }
};

router.post("/add", insertHistory);
router.get("/patient/:id", getPatientHistories);

module.exports = { router };
