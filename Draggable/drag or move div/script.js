draggableDiv = document.querySelector(".draggable-div");
dragBtn = document.querySelector(".draggable-div .drag-div");


const dragThisDiv = (position) => {
    let location = draggableDiv.getBoundingClientRect();
    let left = location.left;
    let top = location.top;
    
    draggableDiv.style.setProperty("left", `${left + position.movementX}px`);
    draggableDiv.style.setProperty("top", `${top + position.movementY}px`);
}

dragBtn.addEventListener("mousedown",()=>{
    document.addEventListener("mousemove",dragThisDiv);
    dragBtn.style.cursor = "all-scroll";
})


document.addEventListener("mouseup",()=>{
    document.removeEventListener("mousemove",dragThisDiv);
})



    // const drag = (position) => {
//     let loc = dragForm.getBoundingClientRect();
//     let left = loc.left;
//     let top = loc.top;
//     dragForm.style.setProperty("left", `${left + position.movementX}px`);
//     dragForm.style.setProperty("top", `${top + position.movementY}px`);
// }
// dragBtn.addEventListener("mousedown",()=>{
//     document.addEventListener("mousemove",drag)
// })
// document.addEventListener("mouseup",()=>{
//     document.removeEventListener("mousemove",drag)
// })