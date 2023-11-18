const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipesSchema = new Schema(
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
        websiteURL: {
            type: String,
            required: true,
            unique: true
        },
        ingredients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ingredients"
        }],
        tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "tags"
        }],
        prepTime: {
            type: String,
            required: true
        }
    },
    { collection: 'recipe' }
);

module.exports = mongoose.model('recipe', recipesSchema);
