const codeBreaker = require('./CodeBreaker');

describe('Codebreaker', () => { 

    test('todos coinciden', () => {
        var result = codeBreaker.play('1234' );
        expect(result).toBe('XXXX');
    })

    test('ninguno coincide', () => {
        var result = codeBreaker.play('5678');
        expect(result).toBe('');
    })

    test('solo uno coincide en posicion', () => {
        var result = codeBreaker.play('1678');
        expect(result).toBe('X');
    })

    test('dos coinciden en posicion', () => {
        var result = codeBreaker.play('1674');
        expect(result).toBe('XX');
    })

    test('tres coinciden en posicion', () => {
        var result = codeBreaker.play('1634');
        expect(result).toBe('XXX');
    })

    test('un numero coincide pero no la posicion', () => {
        var result = codeBreaker.play('5168');
        expect(result).toBe('-');
    })

    test('dos numeros coinciden pero no la posicion', () => {
        var result = codeBreaker.play('5128');
        expect(result).toBe('--');
    })

    test('tres numeros coinciden pero no la posicion', () => {
        var result = codeBreaker.play('5123');
        expect(result).toBe('---');
    })

    test('cuatro numeros coinciden pero no la posicion', () => {
        var result = codeBreaker.play('4123');
        expect(result).toBe('----');
    })

    test('uno coincide uno en posicion incorrecta ', () => {
        var result = codeBreaker.play('1378');
        expect(result).toBe('X-');
    })

    test('dos coinciden dos en posicion incorrecta ', () => {
        var result = codeBreaker.play('1243');
        expect(result).toBe('XX--');
    })

    test('dos coinciden uno en posicion incorrecta ', () => {
        var result = codeBreaker.play('1273');
        expect(result).toBe('XX-');
    })

    test('uno coincide tres en posicion incorrecta ', () => {
        var result = codeBreaker.play('1342');
        expect(result).toBe('X---');
    })

  
})