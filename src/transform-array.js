const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    let result = arr.slice(0);
    if(arr == [0])return [0, 0]
    let i = 0;
    while (i < result.length){
        switch(result[i]){
            case '--discard-prev':
                i - 1 >= 0  ? result.splice(i - 1, 2) : result.splice(i, 1);
                i = 0;
            break;
             case '--discard-next':
                 if(result [i + 2] == '--discard-prev'){
                    result.splice(i, 1);  
                    i++;
                 } else if (result [i+2] == '--double-prev'){
                    result.splice(i , 3);
                    i++;  
                 }
                 else
                {
                    i + 1 < result.length ? result.splice(i, 2) : result.splice(i, 1);  
                i = 0;
            }
                break;
  
            case '--double-prev':
                i - 1 >= 0  ? result.splice(i, 1, result[i - 1]) : result.splice(i, 1); 
                i = 0;
                break;
  
            case '--double-next':
                 i + 1 < result.length  ? result.splice(i, 1, result[i + 1]) : result.splice(i, 1); 
                i = 0;
                break;
            default: i++;
        }
    }
    return result;
  };