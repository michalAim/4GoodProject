const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    logo:{
        type:String
    }
});

module.exports = mongoose.model('categories', categorySchema);
