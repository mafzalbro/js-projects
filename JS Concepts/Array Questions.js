function InputAndPrintArray(arr){

    // const arr = arr;
    localStorage.setItem(arr, arr);

    let item = localStorage.getItem(arr);
    itemArr = item.split(",");

    for(value in itemArr){
        itemArr[value] = Number.parseInt(itemArr[value])
    }
    console.log(itemArr);

}

    InputAndPrintArray([1,2,3,4,5,6]);
    InputAndPrintArray([1,2,3,4,5,7]);
    InputAndPrintArray([1,2,5,4]);
    InputAndPrintArray([1,2,3,4,1,6]);
    InputAndPrintArray([1,2,3,6]);   



// arr = []

// let num = prompt("How much numbers?"); 

// let howMuch = Number.parseInt(num);

// while(arr.length < howMuch){

//     let n = prompt("Enter a number: ");
//     let n1 = Number.parseInt(n);
//     arr.push(n1)   
// }

// // console.log(arr);

// // localStorage.clear();
// localStorage.setItem("arr", arr);

// let item = localStorage.getItem("arr");
// // console.log(item);
// itemArr = item.split(",");
// // console.log(itemArr);

// for(value in itemArr){
//     itemArr[value] = Number.parseInt(itemArr[value])
    
//     console.log(`This is ${value} where value is ${itemArr[value]}`);
// }
// console.log(itemArr);


