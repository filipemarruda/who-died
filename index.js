
module.exports.solution = (input) => {

  const resultados = {
    0b1000010000100001: [],
    0b0000010000100001: [1],
    0b1000000000100001: [2],
    0b1000010000000001: [3],
    0b1000010000100000: [4],
    0b0000000000100001: [1,2],
    0b0000010000000001: [1,3],
    0b0000010000100000: [1,4],
    0b1000000000000001: [2,3],
    0b1000000000100000: [2,4],
    0b1000010000000000: [3,4],
    0b0000000000000001: [1,2,3],
    0b0000000000100000: [1,2,4],
    0b0000010000000000: [1,3,4],
    0b1000000000000000: [2,3,4],
    0b0000000000000000: [1,2,3,4]
  };

  const spread = input + (input << 4) + (input << 8) + (input << 12);
  return resultados[spread & 0b1000010000100001];
}