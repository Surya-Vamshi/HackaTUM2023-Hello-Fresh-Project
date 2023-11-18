const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.test = require("./testModel");
db.allergy = require("./allergyModel");
db.ingredient = require("./ingredientModel");
db.recipe = require("./recipeModel");
db.tag = require("./tagModel");

module.exports = db;
