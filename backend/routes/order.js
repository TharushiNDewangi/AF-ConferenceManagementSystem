const express = require('express');
const { requireSignin,usermiddleware } = require('../middleware/index')
const {addorder,getAddress } = require('../controller/address');
const router = express.Router();


router.post('/user/addorder',requireSignin,usermiddleware,addorder);
router.get('/user/getorder',requireSignin,usermiddleware,getAddress);


module.exports = router;