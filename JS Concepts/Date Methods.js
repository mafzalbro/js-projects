// 1st Long Method to Learn Date Methods

document.title ="Strings Practice";
const dtb = document.querySelector(".block");
dtb.innerHTML = "";


clock.innerHTML = '<img style="width:18px;heigth:auto" src="https://i.gifer.com/ZKZg.gif"/>';

setTimeout(() => {
    
setInterval(() => {

date = new Date;


// -----------
// .getDay()
// -----------
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

newDt = "Day: " + days[date.getDay()] + " / ";

// -----------
// .getDate()
// -----------

newDt += " Date: " + date.getDate() + " / ";

// -----------
// .getMonth()
// -----------

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

newDt += " Month: " +  months[date.getMonth()]  + " / ";


// -----------
// .getFullYear()
// -----------

newDt +=  " Year: " + date.getFullYear()  + " / ";

// -----------
// .getHours()
// -----------

newDt +=  " Hours: " + date.getHours()  + " / ";

// -----------
// .getMinutes()
// -----------

newDt +=  " Minutes: " + date.getMinutes()  + " / ";

// -----------
// .getSeconds()
// -----------

newDt +=  " Seconds: " + date.getSeconds()  + " / ";

// -----------
// .getMiliSeconds()
// -----------

newDt +=  " Milliseconds: " +   date.getMilliseconds()  + " / ";

// -----------
// .getTime()
// -----------

newDt +=  " Time: " +  date.getTime();


//toLocaleTimeString()
//toLocaleDateString()
//toLocaleString()
//toTimeString()



// dtb.innerHTML += `${date} <br>`;
dtb.innerHTML = newDt ;

    clock.innerHTML = date;
}, 1);

 
}, 1000);


// clock.innerHTML = '<img style="width:18px;heigth:auto" src="https://i.gifer.com/ZKZg.gif"/>';

// setTimeout(() => {
    
// setInterval(() => {
//     date = new Date();
//     clock.innerHTML = date;
// }, 1000);

 
// }, 1000);


//---------- 2nd Way: Short Cut Date Method to Print Time as we already done with Detailed Code


// setInterval(()=>{
//     const d = new Date();

//     document.body.innerHTML = d.toLocaleTimeString();
// },1000)


// ---------Converting Milliseconds into Readable Time

// d = 1694433618918

// console.log(d)

// console.log((new Date(d).toLocaleTimeString().split(':')))