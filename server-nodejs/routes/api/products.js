const express = require('express');
const router = express.Router();

//product model
const Products = require('../../models/Products');

//middleware for upload&save an image
const upload = require('../middlewares/productsUpload');

// @routes GET api/products
// @desc GET All products
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        if(!products) throw Error('No items');
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/products/:id
// @desc GET a product
router.get('/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if(!product) throw Error('Item was not found');
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/products/category/:category_id
// @desc GET products By Category
router.get('/category/:id', async (req, res) => {
    try {
        const products = await Products.find({ category : req.params.id});
        
        if(!products) throw Error('Item was not found');
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/products/seller/:seller_id
// @desc GET products By Seller
router.get('/seller/:id', async (req, res) => {
    try {
        const products = await Products.find({ seller : req.params.id});
        
        if(!products) throw Error('Item was not found');
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/products
// @desc Create A product 
router.post('/', upload.array('images', 3) ,async (req, res) => {
   
   console.log(req.files);

   const newProduct = new Products(req.body);

   try {
     const product = await newProduct.save();
     if(!product) throw Error('Something went wrong while saving the item');

     res.status(200).json(product);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/products/:id
// @desc DELETE A product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        if(!product) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/products/:id
// @desc UPDATE A product
router.patch('/:id', async (req, res) => {
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body);
        if(!product) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
