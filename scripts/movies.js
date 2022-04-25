document.getElementById("wallet").innerText =
localStorage.getItem("amount") || 0;
let id;
async function searchMovies() {
try {
  const search = document.getElementById("search").value;

  const res = await fetch(
    `https://www.omdbapi.com/?s=${search}&apikey=4516ab55`
  );

  const data = await res.json();

  const movies = data.Search;

  return movies;
} catch (err) {
  console.log(err);
}
}

function AppendMovie(data) {
document.getElementById("movies").innerHTML = "";

data.forEach(function (movie) {
  const movieDiv = document.createElement("div");
  movieDiv.style.margin = "15px";
  movieDiv.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = movie.Poster;
  img.style.width = "200px";
  img.style.height = "330px";

  const title = document.createElement("p");
  title.innerText = movie.Title;

  const btn = document.createElement("button");
  btn.innerText = "Book Now";
  btn.class = "book_now";
  btn.addEventListener("click", () => {
    BookNow(movie);
  });

  movieDiv.append(img, title, btn);

  document.getElementById("movies").append(movieDiv);
});
}

function BookNow(movie) {
const watchMovie = {
  title: movie.Title,
  poster: movie.Poster,
  id: movie.imdbID,
};
localStorage.setItem("movie", JSON.stringify(watchMovie));
window.location = "./checkout.html";
}

async function main() {
let data = await searchMovies();

if (data === undefined) {
  return false;
}
AppendMovie(data);
}

function debounce(func, delay) {
if (id) {
  clearTimeout(id);
}
id = setTimeout(function () {
  func();
}, delay);
}