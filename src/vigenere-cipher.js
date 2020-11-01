const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(message, key) {
    if (message !== undefined && key !==undefined) {
      let count = 0;
      let reg = /[a-zA-Z]/,
      resultArr = [],
      messageLow = message.toLowerCase(),
      keyLow = key.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        if (reg.test(message[i])) {
          let code = keyLow.charCodeAt(count);
          resultArr.push( String.fromCharCode(
              ((messageLow.charCodeAt(i) - 97 + (code - 97)) % 26) + 97)
          );
          count++;
          if (count == key.length) {
            count = 0; 
          }
        } else resultArr.push(message[i]);
      }
      return this.value === false ? resultArr.reverse().join("").toUpperCase(): resultArr.join("").toUpperCase();
    }
    throw new Error("erroe");
  }

  decrypt(message, key) {

    if (message !== undefined && key !== undefined) {
      let count = 0;
      let reg = /[a-zA-Z]/,
      resultArr = [],
      messageLow = message.toLowerCase(),
      keyLow = key.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        if (reg.test(message[i])) {
          let code = keyLow.charCodeAt(count);
          resultArr.push(
            String.fromCharCode(
              ((messageLow.charCodeAt(i) - 97 - (code - 97) + 26) % 26) + 97
            )
          );
          count++;
          if (count === key.length) {
            count = 0;


          }
        } 
      else {
        resultArr.push(message[i]);
      }
      }

      return this.value == false ? resultArr.reverse().join("").toUpperCase() : resultArr.join("").toUpperCase();
    }
    throw new Error("error");
  }
}
module.exports = VigenereCipheringMachine;
