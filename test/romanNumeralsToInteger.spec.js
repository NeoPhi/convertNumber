describe('roman numerals to integer', function() {
  var romanNumeralsToInteger = require('../src/romanNumeralsToInteger');

  var ROMAN_NUMERALS_TO_INTEGER = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XIX': 19,
    'XX': 20,
    'XLIX': 49,
    'L': 50,
    'C': 100,
    'D': 500,
    'CMXLIX': 949,
    'M': 1000,
    'MLXVI': 1066,
    'MCMIV': 1904,
    'MMXIV': 2014
  };

  Object.keys(ROMAN_NUMERALS_TO_INTEGER).forEach(function(romanNumerals) {
    var integer = ROMAN_NUMERALS_TO_INTEGER[romanNumerals];
    it('converts ' + romanNumerals + ' to ' + integer, function() {
      expect(romanNumeralsToInteger.convert(romanNumerals)).toBe(integer);
    });
  });
});
