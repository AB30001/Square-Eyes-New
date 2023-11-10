//import { apiUrl } from "./constants.js";

import { getMovies } from "./posts.js";
import { renderMovies } from "./renderposts.js";










export async function moviesPage() {
    const movies = await getMovies();
    renderMovies(movies);

    

}


   