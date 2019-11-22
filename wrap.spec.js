const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the string if the string length is less than the maxLen', () => {
    expect(wrap("Tom", 10)).to.equal("Tom");
  });
  it('Returns a new line when the string length is greater than the maxLen', () => {
    expect(wrap('Paul Virg', 5)).to.equal("Paul \nVirg");
  });
  it('Returns a new line each time the maxLeng is hit', () => {
    expect(wrap('Tom Tom Tom', 4)).to.equal('Tom \nTom \nTom');
  });
});
