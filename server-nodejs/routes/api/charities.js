const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//charities model
const Charities = require('../../models/Charities');

//middleware for upload&save an image
const upload = require('../middlewares/charitiesUpload');

// @routes GET api/charities
// @desc GET All charities
router.get('/', async (req, res) => {
    try {
        const charities = await Charities.find();
        if(!charities) throw Error('No items');
        res.status(200).json(charities)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/charities/:id
// @desc GET a charity
router.get('/:id', async (req, res) => {
    try {
        const charity = await Charities.findById(req.params.id);
        if(!charity) throw Error('Item was not found');
        res.status(200).json(charity)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/charities
// @desc Create A charity 
router.post('/', upload.single('logo'),async (req, res) => {

   const {title, description, websiteLink} = req.body;
   let {path : logo} = req.file; //our new var logo will take its content from req.file.path
   logo = logo.replace('\\','/');

   //const newCharity = new Charities(req.body, logo);
   const newCharity = new Charities({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        websiteLink,
        logo: logo.replace('\\','/')
   });

   try {
     const charity = await newCharity.save();
     if(!charity) throw Error('Something went wrong while saving the item');

     res.status(200).json(charity);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/charities/:id
// @desc DELETE A charity
router.delete('/:id', async (req, res) => {
    try {
        const charity = await Charities.findByIdAndDelete(req.params.id);
        if(!charity) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/charities/:id
// @desc UPDATE A charity
router.patch('/:id', async (req, res) => {
    try {
        console.log('**********' + req.body.donations);
        const charity = await Charities.findByIdAndUpdate(req.params.id, req.body);
        if(!charity) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
