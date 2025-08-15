// Menu rendering functions

// Render menu function
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    // Create sections for each category
    Object.keys(menuData).forEach(category => {
        const section = document.createElement('div');
        section.className = 'menu-section';
        section.id = `section-${category}`;
        
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title-container';
        sectionTitle.innerHTML = `<h2>${category}</h2>`;
        section.appendChild(sectionTitle);
        
        const menuGrid = document.createElement('div');
        menuGrid.className = 'menu-grid';
        
        menuData[category].forEach(item => {
            const menuItem = createMenuItem(item, category);
            menuGrid.appendChild(menuItem);
        });
        
        section.appendChild(menuGrid);
        menuContainer.appendChild(section);
    });
    
    // Add images after menu is rendered
    setTimeout(() => {
        if (typeof addImagesToMenuItems === 'function') {
            addImagesToMenuItems();
        }
    }, 100);
}

// Create menu item element
function createMenuItem(item, category) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.setAttribute('data-category', category);
    
    const itemContent = document.createElement('div');
    itemContent.className = 'item-content';
    
    const itemHeader = document.createElement('div');
    itemHeader.className = 'item-header';
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.arabic_name;
    
    const itemPrice = document.createElement('div');
    itemPrice.className = 'item-price';
    itemPrice.textContent = `${item.price_sar} ريال`;
    
    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);
    
    const itemDescription = document.createElement('div');
    itemDescription.className = 'item-description';
    itemDescription.textContent = item.english_name || '';
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart-btn';
    addToCartBtn.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>
        إضافة للسلة
    `;
    
    addToCartBtn.onclick = () => addToCart(item);
    
    itemContent.appendChild(itemHeader);
    itemContent.appendChild(itemDescription);
    itemContent.appendChild(addToCartBtn);
    
    menuItem.appendChild(itemContent);
    
    return menuItem;
}

// Filter category function
function filterCategory(category) {
    const sections = document.querySelectorAll('.menu-section');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Update active button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide sections
    sections.forEach(section => {
        if (category === 'all' || section.id === `section-${category}`) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Add to cart function
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.arabic_name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: item.arabic_name,
            price: item.price_sar,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showSuccessMessage();
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>السلة فارغة</p></div>';
        cartTotal.style.display = 'none';
        checkoutBtn.style.display = 'none';
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = createCartItem(item, index);
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.style.display = 'block';
        checkoutBtn.style.display = 'block';
        document.getElementById('total-amount').textContent = totalPrice;
    }
}

// Create cart item element
function createCartItem(item, index) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price} ريال</div>
        </div>
        <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">حذف</button>
        </div>
    `;
    
    return cartItem;
}

// Update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
}

// Show success message
function showSuccessMessage(message = 'تم إضافة العنصر إلى السلة!') {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

// Complete order function
function completeOrder() {
    if (typeof showPaymentOptions === 'function') {
        showPaymentOptions();
    } else {
        alert('وظيفة الدفع غير متاحة حالياً');
    }
}

// WhatsApp inquiry function
function openWhatsAppInquiry() {
    const phoneNumber = '966123456789'; // Replace with actual number
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن قائمة الطعام في مطعم ميراتا');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

