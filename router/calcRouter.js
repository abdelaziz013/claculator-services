
const express = require('express');
const router = express.Router();
const calcController = require('../controller/calc')
const { body, query } = require('express-validator')


// post average
router.post('/post-average',
    body().custom(value => {
        return Array.isArray(value);
    })
    , calcController.postAverage)

// get sum 
router.get('/get-sum', [
    query('firstNum', 'please enter valid Number').isNumeric(),
    query('secondNum', 'please enter valid Number').isNumeric(),]
    , calcController.getSum)



module.exports = router;