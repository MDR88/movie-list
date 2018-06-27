// < form >
//     <
//     input id = "item"
// type = "text"
// placeholder = "New"
// required >
//     <
//     /form>

//     <
//     h2 > Items < /h2> <
//     ul > < /ul>

//     <
//     button > Clear All < /button>

//I gave the main div an ID and created it storing in the variable mainContainerDiv.
const mainContainerDiv = document.querySelector("#large-container");

//I created the tag elements for my form.
const artEl = document.createElement("article");

const sectEl = document.createElement("section");
sectEl.setAttribute("id", "section1");

const movieTitleinput = document.createElement("input");
movieTitleinput.setAttribute("id", "movieTitle");
movieTitleinput.type = "text";
movieTitleinput.placeholder = "Movie Title"

const genreInput = document.createElement("input");
genreInput.setAttribute("id", "genre");
genreInput.type = "text";
genreInput.placeholder = "Genre";


const directorInput = document.createElement("input");
directorInput.setAttribute("id", "director");
directorInput.type = "text";
directorInput.placeholder = "Director";



// Created the h1 title.
const h1El = document.createElement("h1");
h1El.setAttribute("id", "main-title")
h1El.textContent = "My Movie List";

//This is a line break after the title




//I will remove this when I create the css
document.body.style.backgroundColor = "lightblue";

//This appends elements under the main "large container"
mainContainerDiv.appendChild(artEl);
mainContainerDiv.appendChild(sectEl);
mainContainerDiv.appendChild(h1El);
mainContainerDiv.appendChild(movieTitleinput);
mainContainerDiv.appendChild(genreInput);
mainContainerDiv.appendChild(directorInput);