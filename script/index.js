

import { moviesPage } from "./movies.js";
import { moviePage } from "./movie.js"; 


if (location.pathname.includes("movies")) { // Check if the pathname includes the specific page
    moviesPage();
} else if (location.pathname.includes("movie")) { // Same here for product-page
    moviePage();
}


