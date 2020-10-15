const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr){
  if (!arr) return false;
  let result = [];
  for (let i = 0; i < arr.length; i++){
      if( typeof arr[i] == 'string'){
          result.push(arr[i].trim().substr(0, 1).toUpperCase());
      }
  }
  return result.sort().join('');
}
