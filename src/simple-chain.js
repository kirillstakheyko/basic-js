const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[], 
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      value === undefined ? 
      this.chain.push(`( )`) :
      this.chain.push(`( ${value +''} )`)
      return this;
  },
  removeLink(position) {
     if(Number.isInteger(position) && this.chain[position]){ 
      this.chain.splice(position - 1, 1)
     }
      else
     { 
      this.chain = [];
       throw new Error('Wrong')
      }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
      this.chain = [];
    return result; 
  }
};
 

module.exports = chainMaker;
