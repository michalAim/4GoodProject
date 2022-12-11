const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
    logo: {
        type: String
    },
    donations: {
        type: String
    }
});

module.exports = mongoose.model('charities', charitySchema);