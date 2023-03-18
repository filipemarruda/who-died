const { solution } = require('./index');

describe('Check the correct position of died people', () => {

  it('should return an empty array when no one died', () => {
    expect(solution(0b1111)).toStrictEqual([]);
  });

  it('should return an array containing the died person\'s position (1 died)', () => {
    expect(solution(0b0111)).toStrictEqual([1]);
    expect(solution(0b1011)).toStrictEqual([2]);
    expect(solution(0b1101)).toStrictEqual([3]);
    expect(solution(0b1110)).toStrictEqual([4]);
  });

  it('should return an array containing the died person\'s position  (2 died)', () => {
    expect(solution(0b0011)).toStrictEqual([1,2]);
    expect(solution(0b0101)).toStrictEqual([1,3]);
    expect(solution(0b0110)).toStrictEqual([1,4]);
    expect(solution(0b1001)).toStrictEqual([2,3]);
    expect(solution(0b1010)).toStrictEqual([2,4]);
    expect(solution(0b1100)).toStrictEqual([3,4]);
  });

  it('should return an array containing the died person\'s position  (3 died)', () => {
    expect(solution(0b0001)).toStrictEqual([1,2,3]);
    expect(solution(0b0010)).toStrictEqual([1,2,4]);
    expect(solution(0b0100)).toStrictEqual([1,3,4]);
    expect(solution(0b1000)).toStrictEqual([2,3,4]);
  });

  it('should return an array containing the died person\'s position  (4 died)', () => {
    expect(solution(0b0000)).toStrictEqual([1,2,3,4]);
  });
});