let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

updateCart();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const product = e.target.getAttribute('added-product');
    const price = parseFloat(e.target.previousElementSibling.textContent.replace('$', ''));
    
    const existingItem = cartItems.find(item => item.name === product);
    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cartItems.push({ name: product, price: price, quantity: 1 });
    }
    updateCart();
  }
});

function updateCart() {
  const cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';
  let total = 0;

  cartItems.forEach((item) => {
    const li = document.createElement('li');

    const inputQuantity = document.createElement('input');
    inputQuantity.type = 'number';
    inputQuantity.value = item.quantity;
    inputQuantity.min = 1;
    inputQuantity.style.width = '50px'; 
    inputQuantity.addEventListener('change', () => {
      item.quantity = parseInt(inputQuantity.value);
      updateCart(); 
    });

    const itemTotalprice = item.price*item.quantity;
    total += itemTotalprice;

    li.textContent = `${item.name} - $${item.price.toFixed(2)} x `;
    li.appendChild(inputQuantity);
    li.appendChild(document.createTextNode(` = $${itemTotalprice.toFixed(2)}`));
    cartElement.appendChild(li);
  });

  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  const totalElement = document.getElementById('cart-total');
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('paymentButton').addEventListener('click', () => {
  localStorage.removeItem('cartItems');
  localStorage.removeItem('cartTotal');
  cartItems.length = 0; 
  cartTotal = 0; 
  updateCart(); 
});
