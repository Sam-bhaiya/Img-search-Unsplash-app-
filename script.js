// This project make by using unsplash api and create a image search app

const accesskey = "75XQPGUqoWk_nvnBqBSqui2abJFV9jqg41zAIREM02c";
const formElement = document.querySelector("form");
const inputElement = document.querySelector("#search-input");
const searchResult = document.querySelector(".search-results") ;
const showMore = document.querySelector(".show-more") ;

let inputData = ""
let page = 1;
async function searchImages(){
    inputData =  inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page===1){
        searchResult.innerHTML= ""
    }
 
    results.map((results)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = results.urls.small
        image.alt = results.alt_description
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html
        imageLink.target ="_blank"
        imageLink.textContent = results.alt_description

        imageWrapper.appendChild(image)

        imageWrapper.appendChild(imageLink)

        searchResult.appendChild(imageWrapper)
    })
    page++
    if(page>1)
{
    showMore.style.display = "block";
}
}
formElement.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1;
    searchImages()
})
showMore.addEventListener("click",()=>{
  
    searchImages()
})




