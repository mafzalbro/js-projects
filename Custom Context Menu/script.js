const container = document.querySelector(".container");
const cmenu = document.querySelector(".custom-menu");

container.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    let leftPosition = e.clientX;
    let topPosition = e.clientY;

    cmenu.style.top = topPosition + "px";
    cmenu.style.left = leftPosition + "px";
    cmenu.classList.add("active");
});

window.addEventListener("click",()=>{
    cmenu.classList.remove("active");
});