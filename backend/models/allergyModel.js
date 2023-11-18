const mongoose = require('mongoose');

const { Schema } = mongoose;

const allergiesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
    },
    { collection: 'allergy' }
);

module.exports = mongoose.model('allergy', allergiesSchema);
