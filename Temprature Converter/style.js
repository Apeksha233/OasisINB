let cel = document.getElementById("celsius");
let far = document.getElementById("fahrenheit");
let kel = document.getElementById("kelvin");
let btn = document.getElementById("button");
/* Celsius to Fahrenheit and Kelvin*/
cel.addEventListener("input", function () {
  let c = parseFloat(cel.value);
  let f = c * (9 / 5) + 32;
  let k = c + 273.15;
  far.value = parseFloat(f.toFixed(4));
  kel.value = parseFloat(k.toFixed(4));
});
/* Fahrenheit to Celsius  and Kelvin*/
far.addEventListener("input", function () {
  let f = parseFloat(far.value);
  let c = (f - 32) * (5 / 9);
  let k = (f - 32) * (5 / 9) + 273.15;
  cel.value = parseFloat(c.toFixed(4));
  kel.value = parseFloat(k.toFixed(4));
});
/*Kelvin to Celsius and Fahrenheit */
kel.addEventListener("input", function () {
  let k = parseFloat(kel.value);
  let c = k - 273.15;
  let f = (k - 273.15) * (9 / 5) + 32;
  far.value = parseFloat(f.toFixed(4));
  cel.value = parseFloat(c.toFixed(4));
});
/* Clear the input */
btn.addEventListener("click", function () {
  cel.value = "";
  far.value = "";
  kel.value = "";
});
