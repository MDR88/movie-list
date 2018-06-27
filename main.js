// Created the h1 title.
const h1El = document.createElement("h1");
h1El.setAttribute("id", "main-title")
h1El.textContent = "My Movie List";

//I gave the main div an ID and created it storing in the variable mainContainerDiv.
const mainContainerDiv = document.querySelector("#large-container");

//I created the tag elements for my form.
const artEl = document.createElement("article");

//Created a section for my form.
const sectEl = document.createElement("section");
sectEl.setAttribute("id", "section1");


//Created my input fields The first is for the Movie Title
const movieTitleinput = document.createElement("input");
movieTitleinput.setAttribute("id", "movieTitleInput");
movieTitleinput.type = "text";
movieTitleinput.placeholder = "Movie Title"

//Input Field for Genre
const genreInput = document.createElement("input");
genreInput.setAttribute("id", "genreInput");
genreInput.type = "text";
genreInput.placeholder = "Genre";

// Input Field for Dirctor
const directorInput = document.createElement("input");
directorInput.setAttribute("id", "directorInput");
directorInput.type = "text";
directorInput.placeholder = "Director";

// Created a submit button
const subBtn = document.createElement("button");
subBtn.setAttribute("id", "submit-button");
subBtn.textContent = "Submit";


//I will remove this when I create the css
document.body.style.backgroundColor = "lightblue";

//This appends elements under the main "large container" so it will appear on the DOM.
mainContainerDiv.appendChild(artEl);
mainContainerDiv.appendChild(sectEl);
mainContainerDiv.appendChild(h1El);
mainContainerDiv.appendChild(movieTitleinput);
mainContainerDiv.appendChild(genreInput);
mainContainerDiv.appendChild(directorInput);
mainContainerDiv.appendChild(subBtn);