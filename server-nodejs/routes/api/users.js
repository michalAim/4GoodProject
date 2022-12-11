const express = require('express');
const router = express.Router();

//users model
const Users = require('../../models/Users');
const Charities = require('../../models/Charities');

// @routes GET api/users
// @desc GET All users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        if(!users) throw Error('No items');
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/users/:id
// @desc GET a user
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if(!user) throw Error('Item was not found');
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});


// @routes GET api/users/charity/:id
// @desc GET charity by user id
router.get('/charity/:id', async (req, res) => {
    try {
        //const charitiesByUser = await Users.findById(req.params.id).populate('charities').find();
        //console.log(charitiesByUser);

        const userCharity = await Charities.findById(req.body.charities);

        res.status(200).json(userCharity)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes POST api/users
// @desc Create A user 
router.post('/', async (req, res) => {
   const newUser = new Users(req.body);

   try {
     const user = await newUser.save();
     if(!user) throw Error('Something went wrong while saving the item');

     res.status(200).json(user);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/users/:id
// @desc DELETE A user
router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/users/:id
// @desc UPDATE A user
router.patch('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if(!user) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
