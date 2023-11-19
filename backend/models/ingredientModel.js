const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        imageLink: {
            type: String,
            required: true,
            unique: true
        },
        allergies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "allergies"
        }],
        lifestylePref: {
            type: String,
            required: true
        },
        isDisliked: {
            type: Boolean,
            required: true
        }
    },
    { collection: 'ingredient' }
);

module.exports = mongoose.model('ingredient', ingredientsSchema);
