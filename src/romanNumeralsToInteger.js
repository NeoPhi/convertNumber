var ROMAN_NUMERAL_TO_INTEGER = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

function isSubtractive(romanNumerals, index) {
  var currentIndexValue = ROMAN_NUMERAL_TO_INTEGER[romanNumerals[index]];
  var nextIndexValue = ROMAN_NUMERAL_TO_INTEGER[romanNumerals[index + 1]];
  return (nextIndexValue > currentIndexValue);
}

function convert(romanNumerals) {
  var result = 0;
  var length = romanNumerals.length;
  for (var index = 0; index < length; index += 1) {
    var integer = ROMAN_NUMERAL_TO_INTEGER[romanNumerals[index]];
    if (isSubtractive(romanNumerals, index)) {
      result -= integer;
    } else {
      result += integer;
    }
  }
  return result;
}

module.exports.convert = convert;
