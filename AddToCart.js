// AddToCart

document.addEventListener('DOMContentLoaded', function () {
    let cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

    function updateCart() {
        cartCountElement.textContent = cart.length;
        cartItemsElement.innerHTML = '';
        let totalAmount = 0;

        cart.forEach((item, index) => {
            const itemRow = document.createElement('div');
            itemRow.className = 'col-12 d-flex justify-content-between align-items-center mb-2';
            itemRow.innerHTML = `
                <div>
                    <h6>${item.name}</h6>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-secondary btn-decrease" data-index="${index}" style="width: 30px;">-</button>
                    <span class="mx-2" style="width: 30px; text-align: center;">${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary btn-increase" data-index="${index}" style="width: 30px;">+</button>
                </div>
            `;
            cartItemsElement.appendChild(itemRow);

            totalAmount += item.price * item.quantity;
        });

        totalAmountElement.textContent = totalAmount.toFixed(2);

        document.querySelectorAll('.btn-increase').forEach(btn => {
            btn.addEventListener('click', increaseQuantity);
        });

        document.querySelectorAll('.btn-decrease').forEach(btn => {
            btn.addEventListener('click', decreaseQuantity);
        });
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price: parseFloat(price), quantity: 1 });
        }
        updateCart();
    }

    function increaseQuantity(event) {
        const index = event.target.dataset.index;
        cart[index].quantity += 1;
        updateCart();
    }

    function decreaseQuantity(event) {
        const index = event.target.dataset.index;
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const name = btn.dataset.name;
            const price = btn.dataset.price;
            addToCart(name, price);
        });
    });

    viewCartBtn.addEventListener('click', function () {
        cartModal.show();
    });
});


// Readmore
document.addEventListener('DOMContentLoaded', function() {
        const readMoreBtn = document.getElementById('readMoreBtn');
        const shortContent = document.getElementById('shortContent');
        const moreContent = document.getElementById('moreContent');

        readMoreBtn.addEventListener('click', function() {
            if (moreContent.style.display === 'none') {
                moreContent.style.display = 'block';
                readMoreBtn.value = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                readMoreBtn.value = 'Read More';
            }
        });
    });


// Gallery
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll(".add-to-cart-img");
    
        images.forEach(image => {
            image.addEventListener("click", function() {
                const imageName = this.getAttribute("data-name");
                const imageUrl = this.src;
    
                // Set the modal image and name
                document.getElementById("imageModalLabel").textContent = imageName;
                document.getElementById("modalImage").src = imageUrl;
    
                // Show the modal
                const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
                imageModal.show();
            });
        });
    });
    

// login   
    document.addEventListener('DOMContentLoaded', function() {
        // Open the modal when the login icon is clicked
        document.getElementById('loginIcon').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            $('#loginModal').modal('show'); // Show the Bootstrap modal
        });

        // Check if login details are saved in localStorage
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail && savedPassword) {
            document.getElementById('email').value = savedEmail;
            document.getElementById('password').value = savedPassword;
            document.getElementById('rememberMe').checked = true;
        }

        // Handle form submission
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            if (rememberMe) {
                // Save login details in localStorage
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                // Clear saved login details
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }

            // Simulate a successful login
            alert('Login successful!');

            // Hide the modal after login
            $('#loginModal').modal('hide');
        });
    }); 


// Reviews
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Display alert
    alert(`Thank you for visiting ${name}`);
    
    // Optionally, you can clear the form
    this.reset();
  });
  

 
// Place order

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page refresh
      
      // Get form data
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const cakeName = document.getElementById('cakeName').value;
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
      
      // Simple form validation
      if (name && address && cakeName) {
        // You can replace the alert with actual order handling logic
        alert(`Order placed!\n\nName: ${name}\nAddress: ${address}\nCake: ${cakeName}\nPayment Method: ${paymentMethod}`);
        
        // Reset form
        orderForm.reset();
        
        // Close the modal
        const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
        orderModal.hide();
      } else {
        alert('Please fill in all the details!');
      }
    });
  });
