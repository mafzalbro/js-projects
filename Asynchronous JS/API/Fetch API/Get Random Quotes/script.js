let quotes = document.querySelector("#main .quote");
let author = document.querySelector("#main .author");
let btn = document.querySelector("#main .new-quote-btn");

  function capitalFL(mySentence) {
    return mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}
// const updateQuote = () => {
//     // Output the quote and author name
//     quotes.innerHTML = quote.content;
//     author.innerHTML = `- ${quote.author}`;
// }

//Way NO.1

const randomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random?maxLength=100')
    const quote = await response.json();
        // Output the quote and author name
        quotes.innerHTML = quote.content;
        author.innerHTML = `- ${quote.author}`;     
  }


//Way NO.2

// const randomQuote = () => {
//     fetch('https://api.quotable.io/random?maxLength=100')
//     .then((response) => response.json())
//     // Output the quote and author name
//     .then((quote) => {
//         quotes.innerHTML = capitalFL(quote.content);
//         author.innerHTML = `- ${quote.author}`;
//     });
// }


randomQuote(); //to run befault without button click

btn.addEventListener("click",randomQuote);

// var anyNO = Math.round(Math.random()*quote.length);
// console.log(anyNO);

  // -----------------
  // I have different type ways to run loop
  //e.g. for(let i = 0; i<quote.length; i++){main.innerHTML += quote.content[i]}
