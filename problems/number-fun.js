function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000 || typeof n !== "number") {
    throw new TypeError("Must be a number less than 1 or greater than 1,000,000.")
  }

  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
