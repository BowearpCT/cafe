const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const insertPatient = async (req, res) => {
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "patient";
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

const getPatientList = async (req, res) => {
  // const patientList
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "patient";
  let patientList = [];
  try {
    let connection = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = connection.db(db).collection(collection);
    patientList = await connection.find().toArray();
    console.log(patientList);
    res.send({ success: true, data: patientList });
  } catch (error) {
    res.send({ success: false, message: error });
    throw error;
  }
};

const getPatientById = async (req, res) => {
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "patient";
  let patientList = {};
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
    patientList = await connection.findOne({ id: id });
    console.log(patientList);
    res.send({ success: true, data: patientList });
  } catch (error) {
    res.send({ success: false, message: error });
    throw error;
  }
};

const updatePatientData = async (req, res) => {
  const mongoUrl = "mongodb://localhost:27018";
  const db = "hospital";
  const collection = "patient";
  try {
    const { id } = req.params;
    if (!id) {
      return res.sendStatus(400).send({ success: false });
    }

    const { data } = req.body;
    if (!data) {
      return res.sendStatus(400).send({ success: false });
    }
    let connection = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = connection.db(db).collection(collection);
    await connection.updateOne(
      { id: id },
      {
        $set: data,
      }
    );
    res.send({ success: true });
  } catch (error) {
    console.log("error", error);
    res.send({ success: false, message: error });
    throw error;
  }
};
// const getDessert = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!id) {
//       return res.sendStatus(400).send({ success: false });
//     }

//     const provider = new DessertProvider();
//     const dessertProvider = await provider.createConnection();
//     const dessertRepo = new DessertRepo({ dessertProvider });
//     const dessertUsecase = new DessertUsecase({ dessertRepo });
//     const dessert = await dessertUsecase.getDessert(id);
//     console.log("dessert", dessert);
//     if (!dessert) {
//       res.send({ success: true, data: "Not found" });
//     } else {
//       res.send({ success: true, data: dessert });
//     }
//   } catch (error) {
//     res.send({ success: false, message: error });
//     // throw error;
//   }
// };

router.post("/create", insertPatient);
router.get("/:id", getPatientById);
router.put("/:id", updatePatientData);
router.get("/", getPatientList);
// router.get("/:id", getDessert);

module.exports = { router };
