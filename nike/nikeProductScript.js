const products = {
  1: { imageUrl: "photo/NikeBlackSweatshirt.png", name: "Nike Black Sweatshirt", price: 600.00, description: "Description: Black Sweatshirt from Nike" },
  2: { imageUrl: "photo/NikeBlueSweatshirt.png", name: "Nike Blue Sweatshirt", price: 500.00, description: "Description: Blue Sweatshirt from Nike" },
  3: { imageUrl: "photo/NikeBrownSweatshirt.png", name: "Nike Brown Sweatshirt", price: 500.00, description: "Description: Brown Sweatshirt from Nike" },
  4: { imageUrl: "photo/NikeGreySweatshirt.png", name: "Nike Grey Sweatshirt", price: 500.00, description: "Description: Grey Sweatshirt from Nike" },
  5: { imageUrl: "photo/NikeSailSweatshirt.png", name: "Nike Sail Sweatshirt", price: 600.00, description: "Description: Sail Sweatshirt from Nike" },
};

const urlParams = new URLSearchParams(window.location.search); // Get productId from URL
const productId = urlParams.get('productId');

if (productId && products[productId]) {
  const product = products[productId];
  document.getElementById('productImage').src = product.imageUrl;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productNametag').textContent = product.name;
  document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productNavigation').href = `nikeProduct.html?productId=${productId}`;

  const addToCartButton = document.querySelector('.add-to-cart');
  addToCartButton.setAttribute('added-product', product.name);
  addToCartButton.setAttribute('added-price', product.price); 
} else {
  document.getElementById('product-name').textContent = "Product not found.";
}