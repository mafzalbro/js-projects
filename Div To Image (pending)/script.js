const canvas = document.getElementById('canvas');
const img = document.querySelector('.img');
const divToConvert = document.querySelector('.capture');

// console.log(canvas,img);

canvas.width = divToConvert.offsetWidth;
canvas.hieght = divToConvert.offsetHeight;

const ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(0, 0, canvas.width, canvas.height);

canvas.toBlob(blob => {
    // console.log(blob);
    const url = URL.createObjectURL(blob);
    // img.src = url;

    a = document.createElement('a');
    a.href = url
    document.body.append(a);
    a.textContent = 'Download'
    a.download = 'nae'
    
})

 
// const divImg = new File([divToConvert],'divImg',{type:'image/*'}); 

// const url = URL.createObjectURL(divImg);

// console.log(divImg,divToConvert);


// img.style.background = 'blue'


