const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}

// Object.freeze();

console.log("First Result: ",obj1); // Expected : {a: 1, b: 2}

// Object.freeze(obj1);


// ---------------------------------------------------------------------

// Methods for Objects

// seal()
// Object.seal(obj1);

// obj1.a = 20;
// console.log(obj1); //expected {a: 20, b: 2}

// delete obj1.a; // it cannot delete as there seal method used
// console.log(obj1); //Expected it will : {a: 20, b: 2}
// obj1.d = 30;
// obj1.b = 40;

// console.log(obj1);

// ----------

// Freeze()
// Object.freeze(obj1);

// obj1.a = 20; //cannot change as freezed
// console.log(obj1);
// delete obj1.a; // it cannot delete as there seal method used
// console.log(obj1);
// obj1.d = 30;
// obj1.b = 40;

// console.log(obj1); //unchanged

// --------

// Object.values()
// console.log(Object.values(obj1)); // gives array of values

// ----------

// Object.keys()

// console.log(Object.keys(obj1)); // gives array of keys

// --------------

// Object.create()

    const newObj = Object.create(obj1); //new object created and gets all properties
    newObj.newKey = "newValue"; // it will not reflects in Obj1 value;
    console.log(newObj); //it can access the values of "obj1" as having a reference copy and allowing inheritence
    newObj.a; // access a i.e. value of obj1 object

// --------------

// Object.assign()
//
// Object.assign(obj1,obj2); // changes the first orginal object and keeps 2nd unchanged

//     const newObj = Object.assign(obj1);
//     newObj.newKey = "newValue"; // it will reflects in Obj1 value;
//     console.log(newObj);
//

// --------------

// Object.entries()
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// for([key, value] of Object.entries(obj1)){
//     console.log(key,value);
// }
// for([key, value] of Object.entries(obj2)){
//     console.log(key,value);
// }

// call, apply, bind methods

function getName(){
    return this.name
}

const obj3 = {
    name: "Afzal",
    getName: getName()
} 

// -------------------------------------------------------------------

// Looping Through Objects

// let keys = Object.keys(obj1)

// for(key of keys){
    //     console.log(key, obj1[key]);
    // }
    
    
    // for(v of obj1){
    //     console.log(v);
    // }
    
// ---------------------------------------------------------------------

// //Constructor Function

// function Func(name,id){
//     this.name = name;
//     this.id = id;
// }

// const f1 = new Func("Muhammad Afzal", 1);
// const f2 = new Func("Ali Haider", 2);

// const f3 = f1.assign(f2);



// ---------------------------------------------------------------



// Object.assign()
// Object.create()
// Object.defineProperties()
// Object.defineProperty()
// Object.entries()
// Object.freeze()
// Object.fromEntries()
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.getPrototypeOf()
// Object.groupBy()
// Object.hasOwn()
// Object.prototype.hasOwnProperty()
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.prototype.isPrototypeOf()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.prototype.propertyIsEnumerable()
// Object.seal()
// Object.setPrototypeOf()
// Object.prototype.toLocaleString()
// Object.prototype.toString()
// Object.prototype.valueOf()
// Object.values()