const header = document.querySelector('header');

window.onscroll = () => {
    header.style.transform = `translateY(${window.scrollY * 0.8}px)`;
    // header.style.transition = `all 0.1s`;
    // console.log('scg');
    
    // if(scrollY > window.innerHeight){
    //     header.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    //     // header.style.transition = `all 0.1s`;
        
    // }
}