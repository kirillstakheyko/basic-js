const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options) {
  let result = [];
  let additionarr = [];
  let elem =''+ str;
  let x = 0;
  let i = 0;
  let repeatTimes = options.repeatTimes || 1; 
  let separator = options.hasOwnProperty('separator')? options.separator : '+';
  let addition = options.hasOwnProperty('addition') ? options.addition + '' : '';
  let additionRepTimes = Number.isInteger(options.additionRepeatTimes) ?
   options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator || '';
  while (x < additionRepTimes){
    additionarr.push(addition);
    x++;
  }
  elem +=additionarr.join(additionSeparator);
  while( i < repeatTimes){
    result.push(elem)
    i++;
  }
  return result.join(separator);
};
  