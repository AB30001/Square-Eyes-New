
//import { apiUrl } from "./constants.js";

import { getMovie } from "./posts.js";
import { renderMovie } from "./renderposts.js";

export async function moviePage() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  
  const movie = await getMovie(id);
  renderMovie(movie);
}
