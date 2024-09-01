document.title ="Arrays Practice";
const arr = document.querySelector(".block");
arr.innerHTML = "";

// const ary = [1,2,3,4,5,6];
const ary = [1,5,3,2,4,6,10];

// ------
// .toString
// ------

// const newArr = ary.toString();
// newArr[1] = 13;
// newArr[3] = 23;
// ---can't change!

// ------
// .isArray
// ------

// console.log(Array.isArray(ary));

// ------
// .update
// ------

// ary[1] = 134;

// ------
// .push
// ------

// ary.push(134);

// ------
// .pop
// ------

// ary.pop()

// ------
// .shift
// ------

// ary.shift()

// ------
// .unshift
// ------

// ary.unshift(100)

// ------
// .concate
// ------

// const newArr = ary.concat(11,12,13);

// ------
// delete operation
// ------

// delete ary[1];

// ------
// .splice
// ------

// ary.splice(1,0,"Here is me");
// ary.splice(-1,1,6,"Here is me");

// ------
// .fill
// ------

// ary.fill('aa123');

// ------
// .sort
// ------

// ary.sort((a,b)=>a-b);

// ------
// .filter
// ------

// const newArr = ary.filter((el)=>el%2!==0); //find odd values

// ------
// .reverse
// ------

// ary.reverse();

// ------
// .reduce
// ------

// const newArr = ary.reduce((x,y)=>x*y);

// ------
// .slice
// ------

// const newArr = ary.slice(1,3);

// ------
// .every
// ------

// const newArr = ary.every((x)=>x===1);

// ------
// .some
// ------

// const newArr = ary.some((x)=>x===1);

// ------
// .includes
// ------

// const newArr = ary.includes(1);

// ------
// .forEach (this loop runs when below innerHTML commented)
// ------

// ary.forEach((i)=>arr.innerHTML += i + "<br>");

// ------ 
// .map (this loop runs when below innerHTML commented)
// ------

// ary.map((j)=>arr.innerHTML += j + "<br>");

// ------ 
// .for..of (this loop runs when below innerHTML commented)
// ------ 

// for(value of ary){arr.innerHTML += value + "<br>";} //to get values

// ------ 
// .for..in (this loop runs when below innerHTML commented)
// ------ 

// for(key in ary){arr.innerHTML += key + "<br>";} //to get keys



arr.innerHTML += `${ary} <br>`;
// arr.innerHTML += newArr;
