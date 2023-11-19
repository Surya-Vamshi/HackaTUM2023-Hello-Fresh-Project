const allergyBuilder = require('../controllers/allergyController');
const ingredientBuilder = require('../controllers/ingredientController');
const recipeBuilder = require('../controllers/recipeController');

module.exports = app => {
    app.route('/allergies').get(allergyBuilder.list_all_allergies);

    app.route('/get_ingredients').post(ingredientBuilder.read_allowed_ingredients);
    app.route('/disliked_ingredients').post(ingredientBuilder.updated_disliked_ingredients);

    app.route('/recipes').post(recipeBuilder.read_allowed_recipes);

    app.route("/recipes-all").post(recipeBuilder.read_all_recipes);
    app.route("/suggest").post(recipeBuilder.suggest_recipes);
};
