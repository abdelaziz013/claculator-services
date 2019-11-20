
const express = require('express');
const router = express.Router();
const calcController =require('../controller/calc')


// post average
router.post('/post-average',calcController.postAverage)

// get sum 
 router.get('/get-sum',calcController.getSum)










module.exports =router;