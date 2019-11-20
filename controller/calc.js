

const businessLogic = require('../logic/business-logic');



// add controller
exports.getSum = (req, res, next) => {
    try {
        const firstNum = +req.query.firstNum;
        const secondNum = +req.query.secondNum;      
        const sum = businessLogic.add(firstNum, secondNum);
        res.status(200).json({
            total: sum
        })

    } catch (error) {

        res.status(406).json({ message: error })
    }

}

// average controller
exports.postAverage = (req, res) => {
    try{
        const listArray = req.body
        const average = businessLogic.calculateAverage(listArray);
        res.status(200).json({
            average: average
        })

    } catch(error){
        res.status(406).json({ message: error })
    }
    
}