const element = document.getElementById("bar");
const searchButton = document.getElementById("google_search")

element.addEventListener("keydown", (event) => {
    if(event.key === 'Enter' && element.value != ''){
        console.log(element.value);
        window.location.assign('https://www.google.com/search?q=' + element.value)
    } else if (event.key === 'Enter'){
        console.log('please enter a query')
    }
})

searchButton.addEventListener("click", () => {
    if (!element.value === ''){
        window.location.assign('https://www.google.com/search?q=' + element.value)
    }
})
//https://www.google.com/search?q=
