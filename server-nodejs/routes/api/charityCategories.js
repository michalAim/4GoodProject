const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//charities model
const CharityCategories = require('../../models/CharityCategories');

//middleware for upload&save an image
const upload = require('../middlewares/charityCategoriesUpload');

// @routes GET api/chcategories
// @desc GET All categories
router.get('/', async (req, res) => {
    try {
        const categories = await CharityCategories.find();
        if(!categories) throw Error('No items');
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/chcategories/:id
// @desc GET a category
router.get('/:id', async (req, res) => {
    try {
        const category = await CharityCategories.findById(req.params.id);
        if(!category) throw Error('Item was not found');
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/chcategories
// @desc Create A category 
router.post('/', upload.single('icon'),async (req, res) => {

   const {title} = req.body;
   let {path : icon} = req.file; //our new var icon will take its content from req.file.path
   icon = icon.replace('\\','/');

   const newCategory = new CharityCategories({
        _id: new mongoose.Types.ObjectId(),
        title,
        icon: icon.replace('\\','/')
   });

   try {
     const category = await newCategory.save();
     if(!category) throw Error('Something went wrong while saving the item');

     res.status(200).json(category);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/chcategories/:id
// @desc DELETE A category
router.delete('/:id', async (req, res) => {
    try {
        const category = await CharityCategories.findByIdAndDelete(req.params.id);
        if(!category) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/chcategories/:id
// @desc UPDATE A category
router.patch('/:id', async (req, res) => {
    try {
        const category = await CharityCategories.findByIdAndUpdate(req.params.id, req.body);
        if(!category) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
