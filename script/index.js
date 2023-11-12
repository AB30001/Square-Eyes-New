

import { moviesPage } from "./movies.js";
import { moviePage } from "./movie.js"; 


if (location.pathname.includes("movies")) { // Check if the pathname includes the specific page
    moviesPage();
} else if (location.pathname.includes("movie")) { // Same here for product-page
    moviePage();
}



const loading = document.querySelector(".loader");

setTimeout(function() {
    loading.innerHTML = "Done loading!";
    
    // Set a timeout to make "Done loading!" disappear after 1 second
    setTimeout(function() {
        loading.style.display = "none";
    }, 1000);
}, 2000);

