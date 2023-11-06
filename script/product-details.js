document.addEventListener("DOMContentLoaded", function () {
  // Extract product ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    document.getElementById('product-details').innerHTML = "<p>Product ID is missing in the URL</p>";
    return;
  }

  // Define API endpoint
  const apiEndpoint = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;

  // Function to fetch product details
  async function fetchProductDetails() {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const product = await response.json();
      displayProductDetails(product);
    } catch (error) {
      console.error("Fetching product details failed:", error);
      document.getElementById('product-details').innerHTML = "<p>Failed to load product details</p>";
    }
  }

  // Function to display product details
  function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details');
    productDetailsContainer.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.image}" alt="${product.title}" />
      <p>${product.description}</p>
      <p>Genre: ${product.genre}</p>
      <p>Rating: ${product.rating}</p>
      <p>Released: ${product.released}</p>
      ${product.onSale ? `<p>On Sale! Price: $${product.discountedPrice}</p>` : `<p>Price: $${product.price}</p>`}
      ${product.favorite ? `<p>This is one of your favorite movies!</p>` : ''}
    `;
  }

  // Fetch and display product details
  fetchProductDetails();
});
