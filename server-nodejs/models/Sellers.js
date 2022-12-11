const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
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
    affiliateRate : {
        type: Number,
        required: true,
    },
    isSuperUser : {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('sellers', sellerSchema);