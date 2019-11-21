
const businesslogic = require('../logic/business-logic')

test('add - should return total of two numbers', () => {
    const total = businesslogic.add(4, 6);
    expect(total).toBe(10);
    
})

test('Get Average - should return average of list of numbers',()=>{
    const average =businesslogic.calculateAverage([2,2,4,8]);
    expect(average).toBe("4.00");
})

test('Get Average - should filter strings and empty fields  and zero and return average',()=>{
    const average =businesslogic.calculateAverage([2,2,'i','',0]);
    expect(average).toBe("2.00");
})

