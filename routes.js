const express = require('express');
const route = express.Router();
const controller_about = require("./controller/about");
const controller_api = require("./controller/apidata");

route.get("/",controller_about.home);
route.post("/apidata",controller_api.api);
route.get('/about/:name1/:id',controller_about.about)

module.exports = route;