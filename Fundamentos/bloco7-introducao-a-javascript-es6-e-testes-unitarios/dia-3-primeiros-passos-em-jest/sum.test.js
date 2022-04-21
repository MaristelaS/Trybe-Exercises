const sum = require('./sum.js');

describe('testa a funcao sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
})
