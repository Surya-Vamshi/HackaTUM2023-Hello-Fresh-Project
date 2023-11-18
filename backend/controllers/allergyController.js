const mongoose = require('mongoose');
const Allergy = mongoose.model('allergy');

exports.list_all_allergies = async (req, res) => {
    try {
        Allergy.find()
            .then((res2) => {
                res.send(res2);
            }).catch((err) => {
            res.send(err);
        });
        // const allergyList = req.body.allergyList;
        // const filter = { name: { $in: allergyList } };
        //
        // const allergie_filter = await Allergy.find(filter);
        //
        // // Extract allergen names from the results
        // const allergenNames = allergie_filter.map(allergy => allergy.name);
        //
        // console.log(allergyList);
        //
        // const nonAllergenicIngredients = await Ingredient.find({ allergies: { $nin: allergenNames } });
        //
        // res.json(nonAllergenicIngredients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
