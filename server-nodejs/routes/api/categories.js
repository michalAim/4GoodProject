const express = require('express');
const router = express.Router();

//categories model
const Categories = require('../../models/Categories');

// @routes GET api/categories
// @desc GET All categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find();
        if(!categories) throw Error('No items');
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/categories/:id
// @desc GET a category
router.get('/:id', async (req, res) => {
    try {
        const category = await Categories.findById(req.params.id);
        if(!category) throw Error('Item was not found');
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/categories/:title
// @desc GET a category by its title
router.get('/title/:title', async (req, res) => {
    try {
        const category = await Categories.find({
            'title': { $regex: `.*${req.params.title}.*` }
          });

        if(!category) throw Error('Item was not found');
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});


// @routes POST api/categories
// @desc Create A category 
router.post('/', async (req, res) => {
   const newCategory = new Categories(req.body);

   try {
     const category = await newCategory.save();
     if(!category) throw Error('Something went wrong while saving the item');

     res.status(200).json(category);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/categories/:id
// @desc DELETE A category
router.delete('/:id', async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.id);
        if(!category) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/categories/:id
// @desc UPDATE A category
router.patch('/:id', async (req, res) => {
    try {
        const category = await Categories.findByIdAndUpdate(req.params.id, req.body);
        if(!category) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
