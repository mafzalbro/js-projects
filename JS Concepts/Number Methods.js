document.title ="Numbers Practice";
const num = document.querySelector(".block");
num.innerHTML = "";

const str = "10.3 10.3 38";
const str1 = "10.3";
const n = 10.346;

// -----------------------------
// Number (use to convert string to number varaible)
// -----------------------------

// newNum = Number(str1) * n;

// -----------------------------
// parseInt //takes first-came integar from string 
// -----------------------------

// newNum = parseInt(str);

// -----------------------------
// parseFloat //takes first-came Float from string 
// -----------------------------

// newNum = parseFloat(str);

// -----------------------------
// isInteger 
// -----------------------------

// newNum = Number.isInteger(n);

// -----------------------------
// isFinite
// -----------------------------

// newNum = Number.isFinite(n);

// -----------------------------
// isSafeInteger
// -----------------------------

// newNum = Number.isSafeInteger(n);
// newNum = Number.isSafeInteger(12345678901234567890);

// -----------------------------
// toExponential()
// -----------------------------

// newNum = n.toExponential(2);
// newNum = n.toExponential(4);
// newNum = n.toExponential(6);

// -----------------------------
// toFixed() //parameter in this are no. of values after dot in given number e.g. 5.54
// -----------------------------

// newNum = n.toFixed(2);
// newNum = n.toFixed(4);
// newNum = n.toFixed(6);

// -----------------------------
// toPrecision() //parameter in this are no. of values in total in given number e.g. 5.54
// -----------------------------

// newNum = n.toPrecision(2);
// newNum = n.toPrecision(4);
// newNum = n.toPrecision(6);

num.innerHTML += `${n} <br>`;
num.innerHTML += newNum;
