function pow(x, n) {
  if (n % 1) {
    return NaN;
  }

  if (n < 0) {
    return NaN;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

module.exports = pow;
