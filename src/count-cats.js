const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrx) {
  let count =0;
  for (let i = 0; i < matrx.length; i ++){
    for (let y = 0 ; y < matrx[i].length; y++){
      if (matrx[i][y] =="^^") count++;
    }
  }
  return count;
};
