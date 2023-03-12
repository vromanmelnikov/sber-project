const express = require("express");
const homeController = require('../controllers/homeController.js')

const homeRouter = express.Router();

homeRouter.get('/', homeController.index)
homeRouter.get('/getAll', homeController.getAll)
homeRouter.get('/findItem', homeController.findItem)

module.exports = homeRouter