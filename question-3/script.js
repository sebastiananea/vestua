/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`);

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

function parenthesisChecker(str) {
  // TODO: Implement validation logic
  string = str[0].replace(/[`~!@#$%^&*_|+\-=?;:'",.\w\s/]/gi, ""); //sacamos todo lo que no queremos evaluar de la string

  //  Tenemos un diccionario para chequear las opening brackets con sus closing brackets
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // creamos un arreglo donde vamos a ir guardando los openBrackets
  const openBrackets = [];
  // iteramos sobre el string
  for (let i = 0; i < string.length; i++) {
    // si existe la propiedad significa que es un opening bracket entonces lo guardamos
    if (validBrackets[string[i]]) {
      openBrackets.push(string[i]);
    } else if (validBrackets[openBrackets.pop()] !== string[i]) {
      // Si no nos fijamos que el closing bracket corresponda con el ultimo opening bracket
      return false;
    }
  }
  // una vez que terminamos de recorrer
  // chequeamos que no haya quedado nada en el arreglo
  return !openBrackets.length;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
