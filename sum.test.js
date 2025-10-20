const { sum, subtract, multiply } = require('./sum');

describe('Math Operations', () => {
    describe('sum function', () => {
        test('should add two positive numbers correctly', () => {
            expect(sum(2, 3)).toBe(5);
            expect(sum(10, 20)).toBe(30);
        });

        test('should add negative numbers correctly', () => {
            expect(sum(-2, -3)).toBe(-5);
            expect(sum(-10, 5)).toBe(-5);
        });

        test('should handle zero', () => {
            expect(sum(0, 5)).toBe(5);
            expect(sum(5, 0)).toBe(5);
            expect(sum(0, 0)).toBe(0);
        });

        test('should throw error for non-number arguments', () => {
            expect(() => sum('2', 3)).toThrow('Both arguments must be numbers');
            expect(() => sum(2, '3')).toThrow('Both arguments must be numbers');
            expect(() => sum(null, 3)).toThrow('Both arguments must be numbers');
        });
    });

    describe('subtract function', () => {
        test('should subtract two numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2);
            expect(subtract(10, 7)).toBe(3);
        });

        test('should handle negative results', () => {
            expect(subtract(3, 5)).toBe(-2);
        });

        test('should throw error for non-number arguments', () => {
            expect(() => subtract('5', 3)).toThrow('Both arguments must be numbers');
        });
    });

    describe('multiply function', () => {
        test('should multiply two numbers correctly', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(4, 5)).toBe(20);
        });

        test('should handle zero multiplication', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('should throw error for non-number arguments', () => {
            expect(() => multiply('2', 3)).toThrow('Both arguments must be numbers');
        });
    });
});
