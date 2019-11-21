

// add calculator
exports.add = (a, b) => {
    return a + b

}


// average calculator
exports.calculateAverage = (listNumber) => {
    let average, total, listLength, filteredList;

    filteredList = listNumber.filter(e => {
        if (!isNaN(e)) {
            return e > 0 || e < 0
        }
    })

    listLength = filteredList.length 
    
    if (listLength>0){
        total = filteredList.reduce((acc, cur) => {
        return acc + cur
    })

        average = total / listLength;
    }
    
    return average.toFixed(2);


}