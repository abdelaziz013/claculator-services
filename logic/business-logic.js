

// add calculator
exports.add = (a, b) => {
    return a + b

}


// average calculator
exports.calculateAverage = (listNumber) => {
    let average, total, listLength;

    listLength = listNumber.length
    total = listNumber.reduce((acc, cur) => {      
        return acc + cur
    })
    average = total / listLength;
    return average;

}