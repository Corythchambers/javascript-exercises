const add = function(arg1, arg2) {
  return arg1 + arg2
};

const subtract = function(arg1, arg2) {
  return arg1 - arg2;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
}

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(val1, val2) {
  return Math.pow(val1, val2);
};

const factorial = function(val) {
  if (val === 0) return 1;
  let total = 1;
  for (let i = 1; i <= val; i++) {
    total *= i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
