

// add calculator
exports.add = (a, b) => {
    return a + b

}


// average calculator
exports.calculateAverage = (listNumber) => {
    let average, total, listLength, filteredList;
    filteredList = listNumber.filter(e => {
        if (!isNaN(e)) {            
            return !!e 
        }
    })

    listLength = filteredList.length ;
    
    if (listLength>0){
        total = filteredList.reduce((acc, cur) => {
        return acc + cur
    })
        average = total / listLength;
        return average.toFixed(2);
    } else{
        throw new Error('empty array')

    }  
   

}



