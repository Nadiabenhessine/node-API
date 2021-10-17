const express = require("express");
const clientController = require("../controllers/client");

const router = express.Router();

router.get("/client",clientController.getClient)

module.exports = router;