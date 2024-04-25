// script.js

// Function to fetch product data from JSON file
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    return card;
}

// Function to display products on the webpage
async function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    const products = await fetchProducts();
    if (products) {
        products.forEach(product => {
            const card = createProductCard(product);
            productContainer.appendChild(card);
        });
    }
}

// Call the function to display products when the page loads
window.onload = displayProducts;
// Get the modal
var modal = document.getElementById("addProductModal");

// Get the button that opens the modal
var btn = document.getElementById("newProductBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission to create a new product
document.getElementById("newProductForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get input values
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  var image = document.getElementById("image").value;
  
  // Create new product object
  var newProduct = {
    title: title,
    description: description,
    price: price,
    image: image
  };
  
  // Render the new product (you need to implement this)
  renderProduct(newProduct);
  
  // Close the modal
  modal.style.display = "none";
});

// Function to render a new product
function renderProduct(product) {
  var productContainer = document.getElementById("productContainer");
  var productElement = document.createElement("div");
  productElement.innerHTML = `
    <div class="product">
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>$${product.price}</p>
    </div>
  `;
  productContainer.appendChild(productElement);
}
