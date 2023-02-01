import { ageCalculator } from "./ageCalculator";

describe("AgeCalculator", () => {
    test('2020-12-22 should result in 2', () => {
      expect(ageCalculator('2020-12-22')).toBe(2);
    });
    test('2019-12-22 should result in 3', () => {
      expect(ageCalculator('2019-12-22')).toBe(3);
    });
    test('2018-12-22 should result in 4', () => {
      expect(ageCalculator('2018-12-22')).toBe(4);
    });
    test('2020-01-22 should result in 3', () => {
      expect(ageCalculator('2020-01-22')).toBe(3);
    });
    test('2010-12-22 should result in 2', () => {
      expect(ageCalculator('2010-12-22')).toBe(12);
    });
});