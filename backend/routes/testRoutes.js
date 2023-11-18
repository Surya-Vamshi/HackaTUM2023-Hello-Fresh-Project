const allergyBuilder = require('../controllers/allergyController');
const ingredientBuilder = require('../controllers/ingredientController');
const recipeBuilder = require('../controllers/recipeController');

module.exports = app => {
    app.route('/allergies').get(allergyBuilder.list_all_allergies);

    app.route('/ingredients/:allergies/:lifestyle').get(ingredientBuilder.read_allowed_ingredients);
    app.route('/ingredients/:ingredients').update(ingredientBuilder.updated_disliked_ingredients);

    app.route('/recipes/:allergies/:lifestyle').get(recipeBuilder.read_allowed_recipes);
};
