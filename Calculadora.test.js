const cal = require('./Calculadora'); //ARRANGE


describe('Add operator', () => {
    test('Suma de dos numeros 1+1 = 2', () => {
        var result = cal.add(1, 1); //ACT
        expect(result).toBe(2); // ASSERT
    })
    
    test('Suma de dos numeros 2+2 = 4', () => {
        var result = cal.add(2, 2);
        expect(result).toBe(4);
    })
})


describe('Resta de dos numeros 2-2 = 0', () => {
    test('Resta de dos numeros 2-2 = 0', () => {
        var result = cal.subtract(2, 2);
        expect(result).toBe(0);
    })
})


