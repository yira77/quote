const quoteText = document.querySelector(".quote"),
 author = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),


    soundBtn.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by${author.innerText}`);
        speechSynthesis.speak(utterance);
    });

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", () => {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
});