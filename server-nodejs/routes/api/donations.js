const express = require('express');
const router = express.Router();

//donations model
const Donations = require('../../models/Donations');
const Users = require('../../models/Users');

// @routes GET api/donations
// @desc GET All donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donations.find();
        if(!donations) throw Error('No items');
        res.status(200).json(donations)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/donations/:id
// @desc GET a donation
router.get('/:id', async (req, res) => {
    try {
        const donation = await Donations.findById(req.params.id);
        if(!donation) throw Error('Item was not found');
        res.status(200).json(donation)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/donations/user/:user_id
// @desc GET donations By User
router.get('/user/:id', async (req, res) => {
    try {
        const donations = await Donations.find({ userId : req.params.id});
        
        if(!donations) throw Error('Item was not found');
        res.status(200).json(donations)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

// @routes GET api/donations/charity/:charity_id
// @desc GET donations By Charity
router.get('/charity/:id', async (req, res) => {
    try {
        const donations = await Donations.find({ charityId : req.params.id});
        
        if(!donations) throw Error('Item was not found');
        res.status(200).json(donations)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});


// @routes POST api/donations
// @desc Create A donation 
router.post('/', async (req, res) => {
   const newDonation = new Donations(req.body);

   try {
     const donation = await newDonation.save();
     if(!donation) throw Error('Something went wrong while saving the item');

     res.status(200).json(donation);
   } catch(err) {
     res.status(500).json({ msg: err })
   }
});

// @routes DELETE api/donations/:id
// @desc DELETE A donation
router.delete('/:id', async (req, res) => {
    try {
        const donation = await Donations.findByIdAndDelete(req.params.id);
        if(!donation) throw Error('No item was found!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

// @routes UPDATE api/donations/:id
// @desc UPDATE A donation
router.patch('/:id', async (req, res) => {
    try {
        const donation = await Donations.findByIdAndUpdate(req.params.id, req.body);
        if(!donation) throw Error('Something went wrong while updating the item!');

        res.status(200).json({ success: true });
    } catch(err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
