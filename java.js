const quoteText = document.querySelector(".quote"), authorName = document.querySelector(".author")
quoteBtn = document.querySelector("button");


    function randomQuote(length){
        fetch("https://free-quotes-api.herokuapp.com/").then(res => res.json()).then(result =>{
            console.log(result)
            quoteText.innerText = result.quote;
            authorName.innerText =result.author;
        })
        .catch(err => console.log(err));
}
quoteBtn.addEventListener("click", randomQuote);