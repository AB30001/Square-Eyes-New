/*export function renderMovie(movieData) {
    const movieElement = document.createElement("a");
    movieElement.href = `/HTML/movie.html?id=${movieData.id}`;

    movieElement.innerText = movieData.title;
    movieElement.className = "movie"; // class for styling


    const img = document.createElement("img");
    img.src = movieData.image;
    img.alt = movieData.title;
    img.className = "movie-image"; // class for styling

    movieElement.append(img);

    document.body.append(movieElement)
}*/

export function renderMovie(movieData) {
    const moviesListContainer = document.querySelector('.movies-list');
    if (!moviesListContainer) {
        console.error('Movies list container not found');
        return;
    }

    const movieElement = document.createElement("a");
    movieElement.href = `/html/movie.html?id=${movieData.id}`;
    movieElement.className = "movie"; // class for styling

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movieData.title;

    const img = document.createElement("img");
    img.src = movieData.image;
    img.alt = movieData.title;
    img.className = "movie-image"; // class for styling

    movieElement.appendChild(movieTitle);
    movieElement.appendChild(img);

    moviesListContainer.appendChild(movieElement);
}








export function renderMovies(listOfMovies) {
    listOfMovies.forEach(renderMovie)
}

import { apiUrl } from "./constants.js";

export async function getMovies() {
    const response = await fetch(apiUrl);
    const movies = await response.json();
    return movies;
}

