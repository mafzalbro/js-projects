const nav = document.querySelector(".container");
const navItems = document.querySelectorAll(".container a");
const menuBg = document.querySelector(".menu-bg");


navItems.forEach(i => {
    i.addEventListener("mouseover",()=>{
        let item = i.getBoundingClientRect();
        
        menuBg.style.left = item.x + "px";
        menuBg.style.top = item.y + "px";
        menuBg.style.width = item.width + "px";
        menuBg.style.height = item.height + "px";
        
        i.style.color = "#fff";
        menuBg.style.opacity = 1;
    })
    i.addEventListener("mouseout",()=>{
        i.style.color = "#000";
        menuBg.style.opacity = 0;
    })
});


navBefore.style.border = "blue";

const navBefore = document.querySelector(".container a.active:before");

// container.addEventListener("contextmenu",(e)=>{
    //     e.preventDefault();
    //     let leftPosition = e.clientX;
    //     let topPosition = e.clientY;

//     cmenu.style.top = topPosition + "px";
//     cmenu.style.left = leftPosition + "px";
//     cmenu.classList.add("active");
// });

// window.addEventListener("click",()=>{
//     cmenu.classList.remove("active");
// });