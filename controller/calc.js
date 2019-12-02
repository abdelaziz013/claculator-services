const businessLogic = require('../logic/business-logic');
const { validationResult} = require('express-validator')
const errorHandeler =require('../helper/error')





// add controller
exports.getSum = (req, res, next) => {
    errorHandeler.errorHandeler(req,validationResult)


    try {
        const firstNum = +req.query.firstNum;
        const secondNum = +req.query.secondNum;
        const sum = businessLogic.add(firstNum, secondNum);
        res.status(200).json({
            total: sum
        })
    } catch (error) {
        next(error)
    }

}

// average controller
exports.postAverage = (req, res,next) => {    
  errorHandeler.errorHandeler(req,validationResult)
    try {       
        const listArray = req.body
        const average = businessLogic.calculateAverage(listArray);
        res.status(200).json({
            average: average
        })

    } catch (error) {            
        next(error)
    }

}