// scripts.js

// Change the product name
document.getElementById('product-name').textContent = 'Updated Product Name';

// Change the product description
document.getElementById('product-description').innerHTML = 'Updated description with <strong>bold text</strong>.';

// Change the product price
document.getElementById('product-price').textContent = '$49.99';

// Change the color of the product name
document.getElementById('product-name').style.color = 'blue';

// Add a class to the button
document.getElementById('add-to-cart-btn').classList.add('highlight');

// Add an event listener to the button
document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    alert('Added to cart!');
});
