const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const charityCategoriesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String
    }
});

module.exports = mongoose.model('charityCategories', charityCategoriesSchema);