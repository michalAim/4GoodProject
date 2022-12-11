const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true,
    },
    charityId: {
        type:Schema.Types.ObjectId,
        ref:"charities",
        required: true,
    },
    amount : {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
      }
});

module.exports = mongoose.model('donations', donationSchema);
