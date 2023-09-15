let api = "https://www.omdbapi.com/?&apikey=b938e68c&t=";
let movieName = document.getElementById("movieName");
let btn = document.getElementById("btn");
let movieContainer = document.getElementById("movieContainer");
let animationLoader = document.getElementById("animationLoader");

let title = document.getElementById("title");
let date = document.getElementById("date");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let genre = document.getElementById("genre");
let desc = document.getElementById("desc");
let collection = document.getElementById("collection");
let awards = document.getElementById("awards");
let writer = document.getElementById("write");
let img = document.getElementById("img");
let rating = document.getElementById("rating");

movieContainer.classList.add("d-none");
animationLoader.classList.add("d-none");

function search() {
  movieContainer.classList.add("d-none");
  animationLoader.classList.remove("d-none");
  let query = api + movieName.value;
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      animationLoader.classList.add("d-none");
      animationLoader.classList.add("d-none");
      movieContainer.classList.remove("d-none");
      title.innerText = data.Title;
      date.innerText = data.Released;
      director.innerText = data.Director;
      actors.innerText = data.Actors;
      genre.innerText = data.Genre;
      desc.innerText = data.Plot;
      collection.innerText = data.BoxOffice;
      awards.innerText = data.Awards;
      writer.innerText = data.Writer;
      rating.innerText = "IMDB: " + data.imdbRating;
      img.src = data.Poster;
    });
  movieName.value = "";
}
