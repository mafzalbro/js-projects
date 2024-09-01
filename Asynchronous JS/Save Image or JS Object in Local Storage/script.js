document.getElementById('file').addEventListener('change',(e)=>{
    //------ Image File ------------//
     file = e.target.files[0];
    // function imgData(file){

        if(file.type.indexOf('image') > -1){
            const fr = new FileReader();
            
            fr.readAsDataURL(file)
            
            fr.addEventListener('load',() => {
                localStorage.setItem('recent-image',fr.result)
            })

            
        }
    // }
        
    //------ JSON File ------------//

    // function jsonData(file){

        if(file.type.indexOf('application/json') > -1){
            const fr = new FileReader();
            console.log('josn');
            fr.readAsText(file)
            
    fr.addEventListener('load',() => {
        localStorage.setItem('recent-json',fr.result)
    })
    }
// }

document.addEventListener('DOMContentLoaded',()=>{
    // jsonData(e.target.files[0] );

    const file = localStorage.getItem('recent-json');
    console.log(file);

    // imgData(e.target.files[0]);

    const img = new Image();
    img.src = localStorage.getItem('recent-image');
    document.body.appendChild(img);
// })

})


})