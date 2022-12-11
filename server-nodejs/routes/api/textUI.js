const express = require('express');
const router = express.Router();

//sellers model
const Text = require('../../models/textUI');

// @routes GET api/text
// @desc GET All text
router.get('/', async (req, res) => {
    try {
        const text = await Text.find();
        if(!text) throw Error('No items');
        res.status(200).json(text)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/text/:id
// @desc GET text
router.get('/:id', async (req, res) => {
    try {
        const text = await Text.findById(req.params.id);
        if(!text) throw Error('Item was not found');
        res.status(200).json(text)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/text/:id
// @desc GET text By its page
router.get('/page/:id', async (req, res) => {
    try {
        const text = await Text.find({page: req.params.id});
        if(!text) throw Error('Item was not found');
        res.status(200).json(text)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/text
// @desc Create A text 
router.post('/', async (req, res) => {
   const newText = new Text(req.body);

   try {
     const text = await newText.save();
     if(!text) throw Error('Something went wrong while saving the item');

     res.status(200).json(text);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/text/:id
// @desc DELETE A text 
router.delete('/:id', async (req, res) => {
    try {
        const text = await Text.findByIdAndDelete(req.params.id);
        if(!text) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/text/:id
// @desc UPDATE A text
router.patch('/:id', async (req, res) => {
    try {
        const text = await Text.findByIdAndUpdate(req.params.id, req.body);
        if(!text) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
