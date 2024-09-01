document.addEventListener("scroll", ()=>{
    
    const topScroll = document.querySelector(".top-scroll");
    const totalHeight = document.querySelector("body").clientHeight - window.innerHeight;
    const scrollAmount = window.scrollY;

    topScroll.style.width = `${scrollAmount/totalHeight*100}%`;
});

// topScroll.style.width = `${Math.min(scrollAmount/totalHeight*100,100)}%`;

// const progress = (sc) => {
//     sc = window.scrollY;
//     console.log(sc);
// }


// topScroll.addEventListener("scrollX",()=>{
//     document.addEventListener("scrollY",progress);
//     console.log(progress);
// })