const APP = {
    file: null,
    response: null,
    caches: null,
    cacheName: 'cache-v1',
    canvas: null,
    ctx:null,
    init: () => {
        APP.addListeners()
        APP.drawCircleOnCanvas()
    },
    addListeners: () => {
        //select image or json file
        document
        .getElementById('inputImage')
        .addEventListener('change', APP.pickLocalFile);
        document
        .getElementById('inputJSON')
        .addEventListener('change', APP.pickLocalFile)
        //create response object
        document
        .getElementById('btnResponse')
        .addEventListener('click', APP.createResponseObject)
        //create response object in caches file
        document
        .getElementById('btnCache')
        .addEventListener('click', APP.saveInCache)

        //display current local file
        document
        .getElementById('btnDisplayLocal')
        .addEventListener('click', APP.displayLocal)
        //dispaly last item from cache
        document
        .getElementById('btnDisplayCache')
        .addEventListener('click', APP.displayCache)
        //extract Image from canvas and display on Page
        document
        .getElementById('btnDisplayCanvas')
        .addEventListener('click', APP.saveAndDisplayCanvas)
        //generate JSON file and prompt user to downlaod the file
        document
        .getElementById('btnGenAndSave')
        .addEventListener('click', APP.genAndSave)
    },
    ///////////////////////////////////////////////////////////
    drawCircleOnCanvas: () => {
        APP.canvas = document.querySelector('#canvas');
        APP.ctx = canvas.getContext('2d');
        APP.ctx.beginPath()
        APP.ctx.fillStyle = 'green'
        APP.ctx.rect(0,0,200,200)
        APP.ctx.fill()

        APP.ctx.beginPath()
        APP.ctx.fillStyle = 'blue'
        APP.ctx.ellipse(100,100,50,50,0,0,Math.PI * 2, false)
        APP.ctx.fill()

    },
    //////////////////////////////////////////////////////////////

    pickLocalFile: (ev) => {
        let input = ev.target;
        let files = input.files
        APP.file = files[0]
        document.querySelector('h2 span.title').textContent = files[0].name;
    },

    ////////////////////////////////////////////////////////////
    createResponseObject: () => {
        if(APP.file){
            APP.response = new Response(APP.file,{
                status: 200,
                statusText: 'Good',
                headers: {
                    'content-type': APP.file.type,
                    'content-length': APP.file.size,
                    'x-file': APP.file.name
                }
            })
            console.log(APP.response)
        }
        else{
            console.log('pick file first');
        }
    },
    /////////////////////////////////////////////////////////////////////////////
    saveInCache: ()=>{
        if (APP.response) {
            caches.open(APP.cacheName).then(cache => {
                APP.caches = cache;
                let name = APP.response.headers.get('x-file');
                let url = new URL(`${Date.now()}/${name}`,location.origin)
                
                cache.put(url, APP.response)
                console.log(APP.caches);
            })
        }
    },
    ///////////////////////////////////////////////////////////////////

    displayLocal: (ev) => {

        if (APP.file) {
            //here we have two type of files 1. json 2. img
            let type = APP.file.type;
            if (type == 'application/json') {
                // --------Method No.1----------
                // let url = URL.createObjectURL(APP.file);
                // fetch(url).then(file => file.json())
                // .then(json => outputJSON.textContent = json})

                // --------Method No.2---------- 
                APP.file.arrayBuffer().then(buffer => {
                    let txt = new TextDecoder('utf-8').decode(buffer)
                    outputJSON.textContent = txt
                    // console.log(JSON.parse(txt));
                })
            }
            else if(type.startsWith('image/')){
                let url = URL.createObjectURL(APP.file)
                let img = new Image();
                img.style.width = '200px';
                img.src = url;
                outputImage.append(img)
            }
            else{
                console.log('this is not what i do');
            }
        }
    },

    displayCache: async () => {
        if (!APP.caches) {
            APP.caches = await caches.open(APP.cacheName);
        }
        let keys = await APP.caches.keys();
        
        if(keys.length > 0){

            let url = keys[keys.length-1].url;
            let response = await APP.caches.match(url)
            let type = response.headers.get('content-type')
            
            if (type == 'application/json') {
                let txt = await response.text()
                outputJSON.textContent = txt;
                
            }else if(type.startsWith('image/')){
                let blob = await response.blob();
                let url = URL.createObjectURL(blob);
                let img = new Image();
                img.src = url;
                img.style.width = '200px';
                img.style.padding = '2px';
                outputImage.append(img)

                
            }
        }
    },

    saveAndDisplayCanvas: () => {
        APP.canvas.toBlob(
            async (blob) => {
            let blogURL = URL.createObjectURL(blob)
            let img = new Image();
            img.src = blogURL;
            img.style.width = '200px';
            outputImage.append(img);
            
            //You have to create caches
            let file = new File([blob],"CanvasImage.jpg",{type: 'image/jpeg'})
            console.log(blob.name);
            const response = new Response(file,{
                status: 200,
                headers: {
                    'content-type': file.type,
                    'content-length': file.size,
                    'x-file': file.name
                }
            })
            let url = new URL(`${Date.now()}/${file.name}`,location.origin);
            //caching
            if(!APP.caches){
                APP.caches = await caches.open(APP.cacheName)
            }
            APP.caches.put(url,response);
            
        })
        
    },

    genAndSave: () => {
        //Generate JSON File and Save It locally
        const obj = {
            date : new Date(Date.now()).toLocaleDateString(),
            time : new Date(new Date().getTime()).toLocaleTimeString()
        }
        const json = JSON.stringify(obj)

        const file = new File([json],json,{type: 'application/json,.json,plain/json'})
        
        const url = URL.createObjectURL(file)

        const ask = confirm('Do you want to download this file')

        if(ask){
            const a = document.createElement('a');
            a.href = url;
            a.download = 'file.json'
            a.click()
        }

    }
}

document.addEventListener('DOMContentLoaded', APP.init())
console.log(APP);


const displayCache = async () => {
    if (!APP.caches) {
        APP.caches = await caches.open(APP.cacheName);
    }
    let keys = await APP.caches.keys();
    
    if(keys.length > 0){

        let url = keys[keys.length-1].url;
        let response = await APP.caches.match(url)
        let type = response.headers.get('content-type')
        
        if (type == 'application/json') {
            let txt = await response.text()
            outputJSON.textContent = txt;
            
        }else if(type.startsWith('image/')){
            let blob = await response.blob();
            let url = URL.createObjectURL(blob);
            let img = new Image();
            img.src = url;
            img.style.width = '200px';
            img.style.padding = '2px';
            outputImage.append(img)

            
        }
    }
}

displayCache()