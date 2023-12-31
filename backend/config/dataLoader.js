const db = require("../models");
// const testsData = require( '../dump/tests.json' );
const allergiesData = require( '../dump/allergies.json' );
const ingredientsData = require( '../dump/ingredients.json' );
const recipesData = require( '../dump/recipes.json' );
const tagsData = require( '../dump/tags.json' );

const dbConfig = require("./dbConfig");

function initStart() {
    db.mongoose
        .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
        .then(() => {
            console.log("Successfully connect to MongoDB.");
            // Init dummy data
            basicDatabaseDataInit();
        })
        .catch((err) => {
            console.error("Connection error", err);
            process.exit();
        });
}

// MongoDB connection

// const Test = db.test;
const allergies = db.allergy;
const ingredients = db.ingredient;
const recipes = db.recipe;
const recipeT = db.tag;

/**
 * Init basic database data.
 * This will only be triggered if the database is empty.
 * To generate the dummy data, delete all collections in your mongoDB database.
 */
async function basicDatabaseDataInit() {
    if ((await allergies.estimatedDocumentCount()) > 0) {
        await allergies.deleteMany();
    }
    if ((await ingredients.estimatedDocumentCount()) > 0) {
        await ingredients.deleteMany();
    }
    if ((await recipes.estimatedDocumentCount()) > 0) {
        await recipes.deleteMany();
    }
    if ((await recipeT.estimatedDocumentCount()) > 0) {
        await recipeT.deleteMany();
    }

    await allergies.insertMany(allergiesData);
    console.log("Allergies Data Initialized");

    await ingredients.deleteMany();
    await ingredients.insertMany(ingredientsData);
    console.log("Ingredients Data Initialized");

    await recipes.deleteMany();
    await recipes.insertMany(recipesData);
    console.log("Recipes Data Initialized");

    await recipeT.deleteMany();
    await recipeT.insertMany(tagsData);
    console.log("RecipeTags Data Initialized");
}

module.exports = {
    initStart: initStart,
};
