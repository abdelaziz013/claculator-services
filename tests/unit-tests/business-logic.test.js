
const businesslogic = require('../../logic/business-logic')

describe('get-sum',()=>{
    it('should return total of two numbers', () => {
        const total = businesslogic.add(4, 6);
        expect(total).toBe(10);
        
    })

})


describe('Get Average',()=>{
    it('should return average of list of numbers',()=>{
        const average =businesslogic.calculateAverage([2,2,4,8]);
        expect(average).toBe("4.00");
    })
    
    it('should filter strings and empty fields  and zero and return average',()=>{
        const average =businesslogic.calculateAverage([2,2,'i','',0]);
        expect(average).toBe("2.00");
    })

})




