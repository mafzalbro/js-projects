const toggleBtn = document.getElementById('toggle-btn');
const mainWrapper = document.querySelector('.main-wrapper');
toggleBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    toggleBtn.classList.toggle('active');
})