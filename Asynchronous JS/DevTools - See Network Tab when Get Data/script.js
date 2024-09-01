// Calling API to see how network tab works

const fetchingData = async () => {
    let url = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await url.json()
    for(value in data){
        id = data[value].id;
        title = data[value].title;
        console.log(id,title);
    }
}

fetchingData()

// fetchingData().then(data => {
//         console.log(data)
//     })


//------------ Post Method using fetch ------------

// fetch('https://fakestoreapi.com/products/20', { method: 'DELETE'})
// .then(postData => postData.json())
// .then(data => {console.log(data)})

//Get 
//Post
//Delete
//Put  --> to update