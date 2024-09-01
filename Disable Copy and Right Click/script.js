const tn = document.querySelector(".toast-notification");
const tn2 = document.querySelector(".toast-notification-2");


const showNotification = () => {
    tn.classList.add("active");
    setTimeout(()=>{tn.classList.remove("active")}, 2000);
}

const showNotification2 = ()=>{
    tn2.classList.add("active");
    setTimeout(()=>{tn2.classList.remove("active")},2000);
}

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    showNotification();
});

document.addEventListener('keydown',()=> {
    showNotification2()
    return false
})


// document.onkeydown = function () {
//     showNotification2();
//     return false;
// }

// document.onkeydown = () => {return false};
