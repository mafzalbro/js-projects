dragForm = document.querySelector(".draggable-cform");
dragBtn = document.querySelector(".draggable-cform .drag-icon");
contactBtn = document.querySelector(".contact-icon");

contactBtn.addEventListener("click",()=>{
    dragForm.classList.toggle("active");
});
 
dragBtn.addEventListener("mousedown",()=>{
    document.addEventListener("mousemove",dragIt);
});

document.addEventListener("mouseup",()=>{
    document.removeEventListener("mousemove",dragIt);
});
const dragIt = (loc)=> {
    const direction = dragBtn.getBoundingClientRect();
    const left = direction.left;
    const top = direction.top;

    dragForm.style.left=`${left + loc.movementX}px`;
    dragForm.style.top=`${top + loc.movementY}px`;
    // console.log(loc);
}

// const drag = (position)=>{
//     let styles = dragForm.getBoundingClientRect();
//     let left = styles.left;
//     let top = styles.top;
//     dragForm.style.setProperty("left", `${left + position.movementX}px`);
//     dragForm.style.setProperty("top", `${top + position.movementY}px`);
// }

// dragBtn.addEventListener("mousedown", ()=>{
// document.addEventListener("mousemove", drag)
// })

// document.addEventListener("mouseup",()=>{
// document.removeEventListener("mousemove", drag)
// })


// const drag = (position) => {
//     let loc = dragForm.getBoundingClientRect();
//     // console.log(loc);
//     let left = loc.left;
//     let top = loc.top;
//     dragForm.style.setProperty("left", `${left + position.movementX}px`);
//     dragForm.style.setProperty("top", `${top + position.movementY}px`);
// }
// dragBtn.addEventListener("mousedown",()=>{
//     dragBtn.style.cursor = "all-scroll";
//     document.addEventListener("mousemove",drag)
// })
// document.addEventListener("mouseup",()=>{
//     dragBtn.style.cursor = "pointer";
//     document.removeEventListener("mousemove",drag)
// })