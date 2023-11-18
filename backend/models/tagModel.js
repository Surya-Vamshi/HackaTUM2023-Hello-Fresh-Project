const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    { collection: 'tag' }
);

module.exports = mongoose.model('tag', tagsSchema);
