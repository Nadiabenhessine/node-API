const express = require("express");
const fournisseurController = require("../controllers/fournisseur");

const router = express.Router();

router.get("/fournisseur",fournisseurController.getFournisseur)

module.exports = router;