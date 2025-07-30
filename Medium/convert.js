/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convert(givenDegree) {
  let current = givenDegree.slice(0, -2);
  if (givenDegree.endsWith("°F")) {
    return String(Math.round(((Number(current) - 32) * 5) / 9)) + "°C";
  }
  if (givenDegree.endsWith("°C")) {
    return String(Math.round((Number(current) * 9) / 5 + 32)) + "°F";
  }
  return "Error";
}

exports.solution = convert;
