const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button");


    function randomQuote(length){
        fetch("https://free-quotes-api.herokuapp.com/").then(res => res.json()).then(result =>{
            console.log(result)
            quoteText.innerText = result.quote;
        })
        .catch(err => console.log(err));
}
quoteBtn.addEventListener("click", randomQuote);