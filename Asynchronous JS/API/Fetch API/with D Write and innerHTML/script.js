let main = document.querySelector("#main");

// main.addEventListener('click', () => {
// main.classList.toggle("active");
// console.log("loggging")
// }
// );

// main.innerHTML = "loading";

fetch('https://fakestoreapi.com/products?sort=desc')
.then(res=>res.json())
.then(json=>{
    for (var i in json) {
        var title = json[i].title;
        var price = json[i].price;
        var description = json[i].description;
        var image = json[i].image;
        // console.log(`Title: ${title} Pricing: ${price}`);
        document.write(`<div style="background:#dc143c10; width:300px;padding:20px;border-radius:20px;"><strong>Title:</strong> ${title} <br /><br /> <strong>Image:</strong> <img style="width:100%; height: auto; object-fit: cover;" src=${image} /> <br /><br /> <strong>Description: </strong>${description} <br /><br /> <strong>Pricing:</strong> ${price}$ </div>`);
        // main.innerHTML += `<div id="main" style="background:#dc143c10; width:300px;padding:20px;border-radius:20px;"><strong>Title:</strong> ${title} <br /><br /> <strong>Description: </strong>${description} <br /><br /> <strong>Pricing:</strong> ${price}$ </div><br /><br />`;
    }
    
    // for(let i = 0; i<json.length; i++){main.innerHTML += "<br>" + json[i].title + " title is end <br>"}
    // main.innerHTML += `<div id="main" style="background:#dc143c10; width:300px;padding:20px;border-radius:20px;"><strong>Title:</strong> ${title} <br /><br /> <strong>Description: </strong>${description} <br /><br /> <strong>Pricing:</strong> ${price}$ </div><br /><br />`;
        
        console.log(json);
    })
    
    