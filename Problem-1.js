class Calculator {
  constructor(a,b){
    this.a=a
    this.b=b
  }
  operation(operator) {
    switch (operator.toLowerCase()) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) return "Error: Division by zero";
        return this.a / this.b;
      default:
        return "Invalid Operation: use add, subtract, multiply, divide";
    }
  }
}

let cal= new Calculator (10,12)
console.log(cal.operation("addition"))
