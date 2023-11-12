




import { getMovie } from "./posts.js";




export async function moviePage() {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    const movie = await getMovie(id);
    renderMovie(movie);
}

function renderMovie(movieData) {
    const movieDetailsContainer = document.querySelector('.movie-details');
    if (!movieDetailsContainer) {
        console.error('Movie details container not found');
        return;
    }

    movieDetailsContainer.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = movieData.title;

    const image = document.createElement('img');
    image.src = movieData.image;
    image.alt = movieData.title;

    const description = document.createElement('p');
    description.textContent = movieData.description;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movieData.genre}`;

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${movieData.rating}`;

    const released = document.createElement('p');
    released.textContent = `Released: ${movieData.released}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${movieData.price.toFixed(2)}`;

    const discountedPrice = document.createElement('p');
    if (movieData.onSale) {
        discountedPrice.textContent = `Discounted Price: $${movieData.discountedPrice.toFixed(2)}`;
    }

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${movieData.tags.join(', ')}`;

    const favorite = document.createElement('p');
    favorite.textContent = movieData.favorite ? 'This is one of your favorite movies!' : 'Not marked as favorite';

    const watchButton = document.createElement('button');
    watchButton.textContent = 'Watch';
    watchButton.className = 'watch-button';
    // Add event listener for watch button
    watchButton.addEventListener('click', () => {
        console.log('Watch button clicked for', movieData.title);
    });

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.className = 'download-button';
    // Add event listener for download button
    downloadButton.addEventListener('click', () => {
        console.log('Download button clicked for', movieData.title);
    });

    movieDetailsContainer.append(title, image, description, genre, rating, released, price, discountedPrice, tags, favorite, watchButton, downloadButton);
}








