
// var a = 10;

// function n(){console.log(a)}

// n();



// how a function works in the background

// const mulTwoNo = (x,y)=>{
//     return x*y;
// }

// const sqaureNo = (x)=>{
//     return console.log(mulTwoNo(x,x))
// }

//     sqaureNo(20)


/*Trust Issues with setTimeout*/

setTimeout(function name(){
    console.log("in Timeout")
  }, 0)

console.log("outside Timeout");

var startTime = new Date().getTime();
var endTime = startTime;

while(endTime < startTime + 5000){
  endTime = new Date().getTime();
}

console.log("After Loop")



// setTimeout(()=>{
//   console.log("in timeout");
// },1000);
// console.log("before while");

// startTime = new Date().getTime();
// endTime = startTime;

// while(endTime < startTime + 5000){
//   endTime = new Date().getTime();
// }

// console.log("after while");