// Definimos una clase base para las operaciones de la calculadora (interface)
class iCalculadora {
  calcular(a, b) {
    throw new Error('Método no implementado');
  }
}

// Implementación de suma
class Suma extends iCalculadora {
  calcular(a, b) {
    return a + b;
  }
}

// Implementación de resta
class Resta extends iCalculadora {
  calcular(a, b) {
    return a - b;
  }
}

// Implementación de multiplicación
class Multiplicacion extends iCalculadora {
  calcular(a, b) {
    return a * b;
  }
}

// Implementación de división
class Division extends iCalculadora {
  calcular(a, b) {
    return a / b;
  }
}

// Definimos una interfaz para la calculadora
class Calculadora {
  constructor() {
    this.displayValue = "";
    this.operador = null;
    this.firstOperand = null;
  }

  addNumber(number) {
    this.displayValue += number;
    this.updateDisplay();
  }

  setOperador(operador) {
    this.operador = operador;
    this.firstOperand = parseFloat(this.displayValue);
    this.displayValue = "";
  }

  calcular() {
    const secondOperand = parseFloat(this.displayValue);
    const operacion = this.getOperacion(this.operador);

    if (!operacion) {
      throw new Error("Operación no válida");
    }

    const result = operacion.calcular(this.firstOperand, secondOperand);
    this.displayValue = result.toString();
    this.updateDisplay();
  }

  clearDisplay() {
    this.displayValue = "";
    this.operador = null;
    this.firstOperand = null;
    this.updateDisplay();
  }

  updateDisplay() {
    document.getElementById("display").value = this.displayValue;
  }

  getOperacion(operador) {
    switch (operador) {
      case "+":
        return new Suma();
      case "-":
        return new Resta();
      case "*":
        return new Multiplicacion();
      case "/":
        return new Division();
      default:
        return null;
    }
  }
}

// Crear una instancia de la calculadora
const calculadora = new Calculadora();

  
  
