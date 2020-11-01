const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		if (Array.isArray(arr)) {
			return 1 + Math.max(...arr.map(nextArr => {
      if (nextArr.length == 0) 	{
        return 1;
      } else
				return this.calculateDepth(nextArr);
			}));
		} else {
			return 0;
		}
	}
};