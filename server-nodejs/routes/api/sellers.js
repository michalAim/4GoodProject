const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//sellers model
const Sellers = require('../../models/Sellers');

//middleware for upload&save an image
const upload = require('../middlewares/sellersUpload');

// @routes GET api/sellers
// @desc GET All sellers
router.get('/', async (req, res) => {
    try {
        const sellers = await Sellers.find();
        if(!sellers) throw Error('No items');
        res.status(200).json(sellers)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/sellers/:id
// @desc GET a seller
router.get('/:id', async (req, res) => {
    try {
        const seller = await Sellers.findById(req.params.id);
        if(!seller) throw Error('Item was not found');
        res.status(200).json(seller)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/sellers
// @desc Create A seller 
router.post('/', upload.single('logo'), async (req, res) => {
   
   const {title, description, websiteLink, affiliateRate, isSuperUser} = req.body;
   let {path : logo} = req.file; //our new var logo will take its content from req.file.path
   logo = logo.replace('\\','/');
   
    const newSeller = new Sellers({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        websiteLink,
        affiliateRate,
        isSuperUser,
        logo: logo.replace('\\','/')
    });

   try {
     const seller = await newSeller.save();
     if(!seller) throw Error('Something went wrong while saving the item');

     res.status(200).json(seller);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/sellers/:id
// @desc DELETE A seller
router.delete('/:id', async (req, res) => {
    try {
        const seller = await Sellers.findByIdAndDelete(req.params.id);
        if(!seller) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/charities/:id
// @desc UPDATE A charity
router.patch('/:id', async (req, res) => {
    try {
        const seller = await Sellers.findByIdAndUpdate(req.params.id, req.body);
        if(!seller) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
