/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor() {
    this.result = 0;
  }

  add(x) {
    this.result += x;
  }

  subtract(x) {
    this.result -= x;
  }

  multiply(x) {
    this.result *= x;
  }

  divide(x) {
    if (x == 0)
      throw new Error();
    this.result /= x;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  calculate(expression) {
    expression = expression.replaceAll(" ", "");
    this.validate(expression);
    let postFixExpression = this.infixToPostFix(expression);
    console.log(postFixExpression);
    let result = this.evaluate(postFixExpression);
    console.log('result -> ' + result);
    this.result = result;
    return result;
  }

  evaluate(expression) {
    let stack = [];
    let a = expression.split(" ");
    console.log(a);

    for (let c of a) {
      let r = 0;
      if (c == '+' || c == '-' || c == '*' || c == '/') {
        let one = stack.pop();
        let two = stack.pop();
        console.log('one -> ' + one + ' two -> ' + two);
        switch (c) {
          case '+':
            r = one + two;
            break;
          case '-':
            r = two - one;
            break;
          case '*':
            r = one * two;
            break;
          case '/':
            if (one == 0) {
              throw new Error();
            }
            r = two / one;
            break;
        }
        stack.push(r);
      } else {
        stack.push(Number(c));
      }

    }

    return stack.pop();
  }


  infixToPostFix(expression) {
    let postFixExpression = '';
    console.log(expression);
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
      let c = expression.charAt(i);
      if (c == '+' || c == '-' || c == '*' || c == '/') {
        while (stack.length > 0 && (this.precedence(stack[stack.length - 1]) >= this.precedence(c))) {
          postFixExpression += stack.pop();
          postFixExpression += ' ';
        }
        stack.push(c);
      } else if (c == '(' || c == ')') {
        if (c == '(') {
          stack.push(c);
        } else {
          while (stack.length > 0) {
            let x = stack.pop();
            if (x == '(')
              break;
            postFixExpression += x;
            postFixExpression += ' ';
          }
        }
      } else {
        while ((c >= '0' && c <= '9' || c == '.') && i < expression.length) {
          postFixExpression += c;
          i++;
          c = expression.charAt(i);
        }
        postFixExpression += ' ';
        i--;
      }
    }
    while (stack.length > 0) {
      postFixExpression += stack.pop();
      postFixExpression += ' ';
    }
    postFixExpression = postFixExpression.trim();
    return postFixExpression;
  }

  precedence(operator) {
    if (operator == '+' || operator == '-')
      return 1;
    if (operator == '*' || operator == '/')
      return 2;
    return 0;
  }

  validate(expr) {
    let open = 0;
    for (let i = 0; i < expr.length; i++) {
      let c = expr.charAt(i);
      if (c == '+' || c == '-' || c == '*' || c == '/' || c == '.') {
        continue;
      }
      else if (c >= '0' && c <= '9') {
        continue;
      }
      else if (c == '(' || c == ')') {
        if (c == '(')
          open++;
        if (c == ')')
          open--;
        if (open < 0) {
          throw new Error();
        }
        continue;
      }
      throw new Error();
    }
    if (open != 0) {
      throw new Error();
    }
  }

  print() {
    console.log(this.result);
  }

}

// new Calculator().calculate("1  +  2 * 3 / 4 * (5 + 6) * 7 - 9");


module.exports = Calculator;
