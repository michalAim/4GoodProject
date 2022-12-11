const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    page: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('text', textSchema);