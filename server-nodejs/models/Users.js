const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    charities: { type: Schema.Types.ObjectId, ref: "Charities" }
});

module.exports = mongoose.model('users', userSchema);