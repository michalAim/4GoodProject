const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type:Schema.Types.ObjectId,
        ref:"categories",
        required: true,
      },
    donationRate : {
        type: Number,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    seller: {
        type:Schema.Types.ObjectId,
        ref:"sellers",
        required: true,
    },
    description: {
        type: String,
    } ,
    images:{ type: [String] }
});

module.exports = mongoose.model('products', productSchema);