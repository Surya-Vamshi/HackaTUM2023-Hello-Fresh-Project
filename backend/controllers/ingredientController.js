const mongoose = require('mongoose');
const Ingredient = mongoose.model('ingredient');

exports.read_allowed_ingredients = async (req, res) => {
    try {
        const allergyList = req.body.allergyList;

        const lifestylePrefList = req.body.lifestylePrefList;

        // console.log('Received allergyList:', allergyList);
        // console.log('Received lifestylePref:', lifestylePrefList);

        const allowedIngredients = await Ingredient.find({
            $and: [
                { allergies: { $nin: allergyList } },
                { lifestylePref: { $in: lifestylePrefList } }
            ]
        });

        res.json(allowedIngredients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updated_disliked_ingredients = async (req, res) => {
    try {
        const dislikedIngredientList = req.body.dislikedIngredientList;

        // Update 'isDisliked' for ingredients in the disliked list
        await Ingredient.updateMany(
            { _id: { $in: dislikedIngredientList } },
            { $set: { isDisliked: true } }
        );

        // Respond with an empty response body
        res.json({});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
