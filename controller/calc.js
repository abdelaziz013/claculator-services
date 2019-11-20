

const businessLogic = require('../logic/business-logic');
const { validationResult } = require('express-validator')



// add controller
exports.getSum = (req, res, next) => {
    const errors = validationResult(req);


    try {
        if (!errors.isEmpty()) throw error;
        const firstNum = +req.query.firstNum;
        const secondNum = +req.query.secondNum;
        const sum = businessLogic.add(firstNum, secondNum);
        res.status(200).json({
            total: sum
        })
    } catch (error) {
        res.status(406).json({ message: errors.array()[0].msg })
    }

}

// average controller
exports.postAverage = (req, res) => {

    const errors = validationResult(req);
   

    try {
         if (!errors.isEmpty()) throw error;
        const listArray = req.body
        const average = businessLogic.calculateAverage(listArray);
        res.status(200).json({
            average: average
        })

    } catch (error) {
        res.status(406).json({ message: 'invalid data' })
    }

}