document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/square-eyes');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        console.log(products); // This will log the JSON response to the console
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


function displayProducts(products) {
    const productRow = document.querySelector('.product-row');

    if (!productRow) {
        console.error('Product row container not found!');
        return;
    }

    productRow.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `Price: ${product.price}`;

        productItem.appendChild(image);
        productItem.appendChild(title);
        productItem.appendChild(description);
        productItem.appendChild(price);
        productRow.appendChild(productItem);
    });
}
