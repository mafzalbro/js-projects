document.title ="Strings Practice";
const str = document.querySelector(".block");
str.innerHTML = "";
const st = "I am Going to make a String";
// const st = "";


// -----------
// .charAt()
// -----------

// newStr = st.charAt(5);

// -----------
// .split()
// -----------

// newStr = st.split(" ", 3);
// newStr = st.split(" ");
// newStr = st.split(" ").length;

// -----------
// .trim()
// -----------
// newStr = st.trim(); //removes extra spaces and we can see it by .length

// -----------
// .length
// -----------

// newStr = st.length;

// -----------
// .repeat() (It helps to repeat any string as given times)
// -----------

// newStr = st.repeat(2);

// -----------
// .slice()
// -----------

// newStr = st.slice(3,10);

// -----------
// .substring()
// -----------

// newStr = st.substring(3,9); //9 will not given in this case!

// -----------
// .join() | .filter() | trim()
// -----------

// ar = st.split(" ");
// // arLen = st.trim("").split(" ").length; // it will not count length of spaces but count 1
// arLen = st.split(" ").filter((el)=>el!=="").length; // it will not count length of spaces
// newStr = ar.join(" --- ");
// console.log(ar, newStr, arLen);

// -----------
// .search()
// -----------

// newStr = st.search("Going"); //It return starting address of that word by exact matching

// -----------
// .match() Also can use .matchAll()
// ----------- 

// newStr = st.match("i"); //it returns array of that matching words rather than starting address like search()

// -----------
// .replace()
// -----------

// newStr = st.replace("I ",/We /g); // Also can use .replaceAll() rather than regex

// -----------
// .concat()
// -----------

// newStr = st.concat(" Next String Added");

// -----------
// .toLowerCase()
// -----------

// newStr = st.toLowerCase();

// -----------
// .toUpperCase()
// -----------

// newStr = st.toUpperCase();

// -----------
// .endsWith()
// -----------

// newStr = st.endsWith("g");

// -----------
// .startsWith()
// -----------

// newStr = st.startsWith("I");

str.innerHTML += `${st} <br>`;
str.innerHTML += newStr ;