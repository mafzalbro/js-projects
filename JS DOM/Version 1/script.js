const body = document.body;
const list = document.getElementsByClassName("list");
const landingImg = document.querySelector(".right .landing-image img");
const landingBox = document.querySelector(".right .landing-image");
const mobileNav = document.querySelector("nav ul");
const Nav = document.querySelector("nav");
const mobileToggleBtn = document.querySelector("nav .three-lines");
const darkBtn = document.querySelector(".dark-btn");
const box = document.getElementsByClassName("cursor")[0];
const root = document.querySelector(':root'); // used for darkMode
const cards = document.querySelectorAll(".cards");
const structure = document.querySelector(".structure");
scrollToUp = document.querySelector('.scroll-top');
scrollIndicator = document.querySelector('.scroll-indicator');
// console.log(scrollIndicator);
// const firstItem = list[0];

// list[0].firstElementChild;

document.body.addEventListener('mousemove',(e)=>{
    box.style.top = `${e.pageY - 25}px`;
    box.style.left = `${Math.min(e.pageX - 25,window.innerWidth)}px`;
    box.style.filter = "opacity(0.3)"
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
let previousScrollY = window.scrollY;
window.addEventListener("scroll",()=>{
    
    // For Scroll Indicator
    const totalHeight = body.scrollHeight - window.innerHeight;
    const scrolledPercentage = window.scrollY / totalHeight * 100;

    scrollIndicator.style.width = `${scrolledPercentage}%`;
    
    //For Navbar -- Navbar Scroll show if move up and Hide if down

    const currentScrollY = window.scrollY;
    if (currentScrollY < previousScrollY){ 
        Nav.style.top = "0px";
        darkBtn.style.top = "80px";
    }else{
        Nav.style.top = "-100px";
        darkBtn.style.top = "0px";
    }
    previousScrollY = currentScrollY;

    //For Cards -- trying to animate cards but can't find solution
    cards.forEach((card)=>{
    if(card.getBoundingClientRect().top < window.innerHeight){
        card.style.left = "0px";
        card.style.visibility = "visible";
        // console.log(scrollY);
    } else{
        card.style.left = "-400px";
        card.style.visibility = "hidden";
    }
});

//for DOM Structure Image animation

if(scrollY >= 200){
        structure.style.top = "0px";
        scrollToUp.style.visibility = "visible";
    } else{
        structure.style.top = "1000px";
        scrollToUp.style.visibility = "hidden";
    }

})


// ---------All Clicks Events--------

//Add class active and if active class -> body overflow hidden
mobileToggleBtn.addEventListener('click',()=>{

    scrollTo(0,0); // body content should move to top so that three lines (mobileNav) or Nav does not hide 
    
    mobileNav.classList.toggle("active");
    
    if(mobileNav.className.includes('active')){
        body.style.overflow = "hidden"
    }else{
        body.style.overflow = "auto"
    }
})

//Scroll To Top Button

scrollToUp.addEventListener('click', ()=>{
    scrollTo(0,0);
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

 //when resize the body should be scrollable on wider screen as menu have not full size!
 window.addEventListener('resize',()=>{
    if(body.clientWidth <= 700 && mobileNav.className.includes('active')){
        body.style.overflow = "hidden";
    }
     else{
        body.style.overflow = "auto"
        mobileNav.classList.remove('active');
    }    
});    





// ------------------------------Dost Scroll Animation hi baad ma bnani hi--------------------------

// const percentageOfScrolled = body.scrollTop / body.clientHeight;

// const getScroll = () => {
//     console.log(percentageOfScrolled);
// }

// getScroll();