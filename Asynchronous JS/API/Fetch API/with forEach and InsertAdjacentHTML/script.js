let main = document.querySelector("#main");

main.length == "" ? main.innerHTML="Loading": "";

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    json.forEach(post => {
		main.insertAdjacentHTML('afterbegin',`
		<div style="background:#fff; width:330px;border-radius:20px;padding:20px;margin:20px;box-shadow:2px 3px 10px #dc143c20; overflow:hidden">
		<img src="${post.image}" style="width:100%;height:200px;object-fit:contain;margin-bottom:20px"/>
		<div style="padding:20px;">
		<span style="background:#dc143c;color:white;padding:3px 10px">${post.category}</span>
		<h2> ${post.title}</h2> 
		${post.description} <br /><br />
		<strong>Pricing:</strong> ${post.price}$ <br /><br />
		
		<strong>Rating: ${post.rating.rate} from ${post.rating.count} Reviews</strong>
		</div>
		</div>

		`);
    });
    
    console.log(json);
});

