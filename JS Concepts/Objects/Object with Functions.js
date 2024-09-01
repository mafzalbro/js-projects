// Factory Functions

// function obj(name,className){
//     const obja = {
//         name,
//         className
//     }

//     return obja;
// }

// obj1 = obj("Afzal", "15th");
// obj2 = obj("Afzal 1", "15th");
// obj3 = obj("Afzal 2", "15th");
// obj4 = obj("Afzal 3", "15th");

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// ------------------------------------------------

// ---------- Call, Apply, Bind ------------


// ------ChatGPT se-------

// function getResult(...arg) {
//     this.value = 0;
//     for (val of arg) {
//         this.value = val + this.value; // Use this.value to access the object's property
//     }
//     console.log(this.value);
// }

// const student = {
//     sub1: 30,
//     sub2: 57,
//     sub3: 35,
//     sub4: 64,
//     sub5: 76,
//     sub6: 78,
//     result: getResult // Assign the function, don't call it here
// };

// getResult.call(student, 30, 57, 35, 64, 76, 78); // Output: 340




// -------------------Meri Traf Se----------------------------------
// function getResult(name,...arg){
//     this.value = 0;
//     this.name = name;
//     this.sub1 = arg[0], // this is wjah se ke directly object ke andar value assign or get kr skein!!!
//     this.sub2 = arg[1],
//     this.sub3 = arg[2],
//     this.sub4 = arg[3],
//     this.sub5 = arg[4],
//     this.sub6 = arg[5],
//     this.sub7 = arg[6],
//     this.sub8 = arg[7],
//     this.gNo = 100 * arg.length;
    
//     for(val of arg){
//         this.value = val + this.value;
//     }

//     console.log("Total No:",this.value," Grand Total:", this.gNo," By:", this.name);
// }
// student = {
//     name: this.name,
//     sub1: 20,
//     sub2: 30,
//     sub3: 30,
//     sub4: 40,
//     sub5: 34,
//     sub6: 30,
//     sub7: 30,
//     sub8: 30,
//     gNo: 600,
//     // result: getResult(sub1, sub2, sub3, sub4, sub5, sub6)
//     result: getResult
// }


// //getResult.call(student,"Ali",30,57,35,64,76,78);
// getResult.call(student,"Ali",30,57,35,64,76,78,30,48);
// // getResult.apply(student,["Ayesha",40,58,39,62,76,80]);
// // const res2 = getResult.bind(student,"ali",87,87,65,64,66,78);

// // res2();


// const vari = JSON.parse(JSON.stringify(student));

// console.log(vari);

// ------------Example 2 (Simplest Form)---------------

// function getFullName(){
//     return console.log(`Full Name is: ${this.fName} ${this.lName}`);
// }

// const fullName = {
//     fName: "Muhammad",
//     lName: "Afzal",
//     FullName: getFullName
// }

// getFullName.call(fullName);
// getFullName.apply(fullName);
// const name1 = getFullName.bind(fullName);
// name1();
// ---------------------------Object.create() vs Constructor-----------------------------

//create() is used to create object that inherites
// const pehlaObject = {
//     name: "Ali"
// }

// const dosraObject = Object.create(pehlaObject);
// dosraObject.color = "Red";
// dosraObject.msg = "Copied created from pehlaObject";
// dosraObject.end = "--END--";

// let kisiKaName = dosraObject.name;

// console.log("accessing name property of pehlaObject using dosraObject: ",kisiKaName);


// // Constructor Function used to create new object everytime using "new" keyword 

function Constructor(id, name){
    this.id = id;
    this.name = name;
}

name1 = new Constructor(1,"Ali Haider 1");
name2 = new Constructor(2,"Ali Haider 2");
name3 = new Constructor(3,"Ali Haider 3");
name4 = new Constructor(4,"Ali Haider 4");
name5 = new Constructor(5,"Ali Haider 5");
name6 = new Constructor(6,"Ali Haider 6");
name7 = new Constructor(7,"Ali Haider 7");
name8 = new Constructor(8,"Ali Haider 8");


// -----for..in can be used perform JSON---- 
// name1 = JSON.parse(JSON.stringify(name1));
// name2 = JSON.parse(JSON.stringify(name2));
// name3 = JSON.parse(JSON.stringify(name3));
// name4 = JSON.parse(JSON.stringify(name4));
// name5 = JSON.parse(JSON.stringify(name1));
// name6 = JSON.parse(JSON.stringify(name1));
// name7 = JSON.parse(JSON.stringify(name1));
// name8 = JSON.parse(JSON.stringify(name1));

console.log(name1);

const namesObj = {
    name1,name2,name3,name4,name5,name6,name7,name8
}

console.log(namesObj);
console.log("This is raw form, we can change it as given below using Stringify");

// --------for..in loop used to console-----------
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
// console.log(name5);
// console.log(name6);
// console.log(name7);
// console.log(name8);
// console.log(namesObj);

for(key in namesObj){
 value = namesObj[key];
value = JSON.parse(JSON.stringify(value));
    // console.log(value.id,value.name);
    for(k in value){
        console.log(value[k]);
    }
    // console.log(k,val);
}

