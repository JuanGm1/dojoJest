const cal = require('./Calculadora');


describe('Add operator', () => {
    test('Suma de dos numeros 1+1 = 2', () => {
        var result = cal.add(1, 1);
        expect(result).toBe(2);
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


