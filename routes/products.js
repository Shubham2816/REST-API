//like on which which path to go and what to do will be told by controllrs

//connecting express
const express = require("express");
const router = express.Router();

const {
    getAllProducts, 
    getAllProductsTesting,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;

