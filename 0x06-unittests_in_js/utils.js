class Utils {
  static calculateNumber (type, a, b) {
    const op1 = Math.round(a);
    const op2 = Math.round(b);

    switch (type) {
      case 'SUM':
        return op1 + op2;
      case 'SUBTRACT':
        return op1 - op2;
      case 'DIVIDE':
        if (op2 === 0) {
          return 'Error';
        } else {
          return op1 / op2;
        }
    }
  }
}

module.exports = Utils;
