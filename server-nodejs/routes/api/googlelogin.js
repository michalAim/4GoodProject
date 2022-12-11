const express = require('express');
const router = express.Router();
const url = require('url');
const google = require('googleapis');

//GoogleLogin model
//const GoogleLogin = require('../../models/users');

// @routes GET api/googleApi
router.get('/', async (req, res) => {
    try {
        //const categories = await Categories.find();
        //if(!categories) throw Error('No items');
        //res.status(200).json(categories)
        
    

        console.log('my request is: ', req);
        //console.log(req.headers);
        //console.log(req.cookies);
        //console.log(req.body);
        //res.redirect('http://www.ynet.co.il');
        res.redirect('http://localhost:3000/Homepage');
    } catch (err) {
        res.status(500).json({ msg: err })
    }
});

module.exports = router;
