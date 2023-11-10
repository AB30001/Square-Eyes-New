export function renderMovie(movieData) {
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
}


export function renderMovies(listOfMovies) {
    listOfMovies.forEach(renderMovie)
}