const mongoose = require("mongoose");
const recipes = mongoose.model("recipe");

exports.read_allowed_recipes = (req, res) => {
  try {
    recipes
      .find()
      .then((res2) => {
        res.send(res2);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.read_all_recipes = async (req, res) => {
  try {
    recipes
      .find()
      .then((res2) => {
        res.send(res2);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.suggest_recipes = async (req, res) => {
    try {
        // Fetch all recipes
        recipes
            .find()
            .then((allRecipes) => {
                // Extract allowed and disliked ingredients from the request body
                const { allowedIngredients, dislikedIngredients } = req.body;

                // Check if allowedIngredients and dislikedIngredients are provided and are arrays
                if (
                    !Array.isArray(allowedIngredients) ||
                    !Array.isArray(dislikedIngredients)
                ) {
                    return res.status(400).json({ error: "Invalid input format" });
                }

                let filteredRecipes = [];
                let recipesWithDislikedIngredients = [];

                allRecipes.forEach((recipe) => {
                    // Convert ObjectId ingredients in the recipe to strings
                    const stringIngredients = recipe.ingredients.map((ingredient) =>
                        ingredient.toString()
                    );

                    // Check if recipe contains only allowed ingredients
                    const containsOnlyAllowed = stringIngredients.every((ingredient) =>
                        allowedIngredients.includes(ingredient)
                    );

                    // Check if recipe contains any disliked ingredients
                    const containsDisliked = stringIngredients.some((ingredient) =>
                        dislikedIngredients.includes(ingredient)
                    );

                    if (containsOnlyAllowed) {
                        if (containsDisliked) {
                            recipesWithDislikedIngredients.push(recipe);
                        } else {
                            filteredRecipes.push(recipe);
                        }
                    }
                });

                // Send response with both sets of recipes
                res.send({ filteredRecipes, recipesWithDislikedIngredients });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err.message });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};