const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema(
    {
        string_id: {
            type: String,
            required: true,
            unique: true
        },
    },
    { collection: 'test' }
);

module.exports = mongoose.model('test', testSchema);
