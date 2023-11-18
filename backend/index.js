const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// global.Pack = require('./models/testModel');
global.allergies = require('./models/allergyModel');
global.ingredients = require('./models/ingredientModel');
global.recipes = require('./models/recipeModel');
global.recipeT = require('./models/tagModel');

const routes = require('./routes/testRoutes');
mongoose.Promise = global.Promise;

const dataLoader = require("./config/dataLoader");

// mongoose.connect('mongodb://localhost/HelloFreshDB').then(()=>{console.log('...')})

const port = process.env.PORT || 3000;
const app = express();
// const pool = require ('./api/config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
}));

routes(app);
require('./routes/testRoutes')(app);

dataLoader.initStart();

app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
