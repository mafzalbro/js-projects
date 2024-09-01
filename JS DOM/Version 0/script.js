const list = document.getElementsByClassName("list");
const landingImg = document.querySelector(".right .landing-image img");
const landingBox = document.querySelector(".right .landing-image");
const mobileNav = document.querySelector("nav ul");
const mobileToggleBtn = document.querySelector("nav .three-lines");
const darkBtn = document.querySelector(".dark-btn");
const box = document.getElementsByClassName("cursor")[0];

const firstItem = list[0];

list[0].firstElementChild;

document.body.addEventListener('mousemove',(e)=>{
    box.style.top = `${e.pageY - 25}px`;
    box.style.left = `${e.pageX - 25}px`;
    box.style.filter = "opacity(0.5)"
})


window.addEventListener('mousemove',(e)=>{
    landingImg.style.top = `${1 - e.movementY - 50}px`;
    landingImg.style.left = `${1 - e.movementX - 50}px`;
    landingBox.style.top = `${e.movementY}px`;
    landingBox.style.left = `${e.movementX}px`;
})

let startX;
let startY;

window.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', (event) => {
    if (startX !== undefined) {
        const currentX = event.touches[0].clientX;
        const movementX = currentX - startX;
        landingBox.style.left = `${movementX}px`;
        landingImg.style.left = `${movementX - 60}px`;
        // console.log('Movement in X:', movementX);
        
        // Update startX for the next touchmove event
        startX = currentX;
    }
    if (startY !== undefined) {
        const currentY = event.touches[0].clientY;
        const movementY = currentY - startY;
        landingBox.style.top = `${movementY}px`;
        landingImg.style.top = `${movementY - 60}px`;
        // console.log('Movement in Y:', movementY);

        // Update startX for the next touchmove event
        startY = currentY;
    }
    
    startX = undefined; // Reset startX after touch ends
    startY = undefined; // Reset startY after touch ends
    // movementX = undefined;
    // movementY = undefined;
    // currentX = undefined;
    // currentY = undefined;

});

// window.addEventListener('touchend', () => {
// });


// window.addEventListener('touchmove',(e)=>{
//     // touches[i].pageX, touches[i].pageY
//     landingImg.style.top = `${1 - e.touches[0].clientY + 400}px`;
//     landingImg.style.left = `${1 - e.touches[0].clientX + 300}px`;
//     landingBox.style.top = `${e.movementY}px`;
//     landingBox.style.left = `${e.movementX}px`;
//     console.log(e.touches[0].clientX, e.touches[0].clientY);
// })

mobileToggleBtn.addEventListener('click',()=>{
    mobileNav.classList.toggle("active");
})


// function myFunction_get() {
//     // Get the styles (properties and values) for the root
   
//     // Alert the value of the --blue variable
//   }
// // Create a function for setting a variable value
// function myFunction_set() {
    //   // Set the value of variable --blue to another value (in this case "lightblue")
    //   r.style.setProperty('--blue', 'lightblue');
    // }
    
    darkBtn.addEventListener('click', ()=>{
        var root = document.querySelector(':root');
        var rs = getComputedStyle(root);
        firstColor = rs.getPropertyValue('--first');
        root.classList.toggle("active");
    });
    
    // console.log(firstColor);
// const darkMode = () =>{
//     if(firstColor == "#fb8500"){
//     root.style.setProperty('--first','#ffcd4d');
//     root.style.setProperty('--secound','#fb8500');
//     root.style.setProperty('--third','#dddddd');
//     root.style.setProperty('--last','#000000');
//     }
//     if(firstColor == "#ffcd4d"){
//         root.style.removeProperty('--first');
//         root.style.removeProperty('--secound');
//         root.style.removeProperty('--third');
//         root.style.removeProperty('--last');
//     }
//     console.log("click");
// }

