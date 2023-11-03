document.addEventListener("DOMContentLoaded", function () {
    const productDetailsContainer = document.getElementById('product-details');
    const loadingIndicator = document.getElementById('loading');
  
    // Show loading indicator
    function showLoading() {
      loadingIndicator.style.display = 'block';
    }
  
    // Hide loading indicator
    function hideLoading() {
      loadingIndicator.style.display = 'none';
    }
  
    // Extract product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
  
    if (!productId) {
      productDetailsContainer.innerHTML = "<p>Product ID is missing in the URL</p>";
      return;
    }
  
    // Define API endpoint
    const apiEndpoint = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;
  
    // Function to fetch product details
    async function fetchProductDetails() {
      showLoading(); // Show loading indicator
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const product = await response.json();
        displayProductDetails(product);
      } catch (error) {
        console.error("Fetching product details failed:", error);
        productDetailsContainer.innerHTML = "<p>Failed to load product details</p>";
      } finally {
        hideLoading(); // Hide loading indicator
      }
    }
  
    // Function to display product details
    function displayProductDetails(product) {
      const tags = product.tags ? product.tags.join(', ') : 'No tags available';
      productDetailsContainer.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" />
        <p>${product.description}</p>
        <p>Genre: ${product.genre}</p>
        <p>Rating: ${product.rating}</p>
        <p>Released: ${product.released}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        ${product.onSale ? `<p>Discounted Price: $${product.discountedPrice.toFixed(2)}</p>` : ''}
        <p>Tags: ${tags}</p>
        ${product.favorite ? `<p>This is one of your favorite products!</p>` : ''}
      `;
    }
  
    // Fetch and display product details
    fetchProductDetails();
  });
  