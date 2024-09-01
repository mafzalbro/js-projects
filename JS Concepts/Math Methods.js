document.title ="Math Methods Practice";
const num = document.querySelector(".block");
num.innerHTML = "";

const str = "10.3";
const flt = 10.346;
const n = - 46;

// -----------------------------
// Math.ceil()  //ciel rounds backward direction i.e. gives small/previous no.
// -----------------------------

// newNum = Math.ceil(flt);

// -----------------------------
// Math.floor()  //ciel rounds backward direction i.e. gives large/next no.
// -----------------------------

// newNum = Math.floor(flt);

// -----------------------------
// Math.round() //round based on value of 5+ or 5-
// -----------------------------

// newNum = Math.round(flt);

// -----------------------------
// Math.trunc() //cuts extra value after point
// -----------------------------

// newNum = Math.trunc(flt);

// -----------------------------
// Math.abs()
// -----------------------------

newNum = Math.abs(n);

// -----------------------------
// Math.random()
// -----------------------------

newNum = Math.round(Math.random() * 9000 + 1000); // OTP one application of random method 



num.innerHTML += `${n} <br>`;
num.innerHTML += newNum;
