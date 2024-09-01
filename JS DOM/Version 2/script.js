const body = document.body;
const list = document.getElementsByClassName("list");
const header = document.querySelector("header"); 
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



// -------cursor box animation start------

//pointer events will work for mobile and desktop both
//and No need to mouse or touch events

document.body.addEventListener('pointermove',(e)=>{
    box.style.top = `${e.pageY - 15}px`;
    box.style.left = `${Math.min(e.pageX - 15,window.innerWidth)}px`;
    // box.style.filter = "opacity(0.4)"
})


window.addEventListener('pointermove',(e)=>{
    landingImg.style.top = `${1 - e.movementY * 0.5}px`;
    landingImg.style.left = `${1 - e.movementX * 0.5}px`;
    landingBox.style.top = `${1 - e.movementY * 2}px`;
    landingBox.style.left = `${1 - e.movementX * 2}px`;
})

let previousScrollY = window.scrollY;
window.addEventListener("scroll",()=>{

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
    
    //For Hero Animation
    const scrollPosition = window.scrollY;
    header.style.transform = `translateY(${scrollPosition / 3}px)`;
    landingImg.style.transform = `scale(${1 + scrollPosition / 2000})`;
    header.style.opacity = 1 - scrollPosition / 600;
    
    
    // For Scroll Indicator
    const totalHeight = body.scrollHeight - window.innerHeight;
    const scrolledPercentage = window.scrollY / totalHeight * 100;

    scrollIndicator.style.width = `${scrolledPercentage}%`;
    

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

if(window.scrollY > window.innerHeight - 400){
        structure.style.top = "0px";
        structure.style.opacity = Math.max(1 - scrollPosition / 1300,0);
        scrollToUp.style.visibility = "visible"; // toTop Button
    } else{
        structure.style.top = "1000px";
        scrollToUp.style.visibility = "hidden";
        // structure.style.opacity = 1;
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

// cards.forEach(card=>{
//     scrollToUp.addEventListener('click', ()=>{
//         scrollBy(0, card.scrollTop);
//     })
// })

darkBtn.addEventListener('click', ()=>{
    var rs = getComputedStyle(root);
    firstColor = rs.getPropertyValue('--first');
    root.classList.toggle("active");
});
    
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