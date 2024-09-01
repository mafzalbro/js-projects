document.title ="Console Meassages";

console.log("This is my msg");
console.warn("This is warning msg");
console.error("This is error msg");


setTimeout(()=>{
    console.clear();
    console.log("Ths is Cleared Manually by me using .clear()! Reload to see again")
},4000)