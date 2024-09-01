let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");


for(x of lists){
    x.addEventListener("dragstart",(e)=>{
        let moved = e.target;
        moved.style.backgroundColor = 'red';
        
        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener("drop",()=>{
            rightBox.appendChild(moved);
            moved = null;
        });
        
        
        leftBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener("drop",()=>{
            leftBox.appendChild(moved);
            moved = null;
        });
        // console.log(moved);
    });
    x.addEventListener("dragend",(e)=>{
        console.log("drag end", e.target);
            let moved = e.target;
            moved.style.backgroundColor = 'transparent';
        });
}


// for(list of lists){
//     list.addEventListener("dragstart",(e)=>{
//         let selected = e.target;

//         rightBox.addEventListener("dragover", (e)=>{
//             e.preventDefault();
//         });
//         rightBox.addEventListener("drop",(e)=>{
//             rightBox.appendChild(selected);
//             selected = null;
//         });


//         leftBox.addEventListener("dragover", (e)=>{
//             e.preventDefault();
//         });
//         leftBox.addEventListener("drop",(e)=>{
//             leftBox.appendChild(selected);
//             selected = null;
//         });


//     });
// }