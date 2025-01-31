const products = {
  1: { imageUrl: "photo/NewBalanceWhiteHoodie.jpg", name: "New Balance White Hoodie", price: 500.00, description: "Description: White Hoodie from New Balance" },
  2: { imageUrl: "photo/NewBalanceBlackHoodie.JPG", name: "New Balance Black Hoodie", price: 500.00, description: "Description: Black Hoodie from New Balance" },
  3: { imageUrl: "photo/NewBalanceBlueWhiteJacket.PNG", name: "New Balance Blue White Jacket", price: 500.00, description: "Description: Blue White Jacket from New Balance" },
  4: { imageUrl: "photo/NewBalancePurpleSportSet.jpg", name: "New Balance Purple Sport Set", price: 900.00, description: "Description: Purple Sport Set from New Balance" },
  5: { imageUrl: "photo/NewBalanceBlackJacket.JPG", name: "New Balance Black Jacket", price: 500.00, description: "Description: Black Jacket from New Balance" },
  6: { imageUrl: "photo/NewBalanceWhitePants.jpg", name: "New Balance White Pants", price: 600.00, description: "Description: White Pants from New Balance" },
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
  document.getElementById('productNavigation').href = `newBalanceProduct.html?productId=${productId}`;

  const addToCartButton = document.querySelector('.add-to-cart');
  addToCartButton.setAttribute('added-product', product.name);
  addToCartButton.setAttribute('added-price', product.price); 
} else {
  document.getElementById('productName').textContent = "Product not found.";
}