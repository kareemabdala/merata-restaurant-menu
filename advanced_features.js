// Advanced Features for Merata Restaurant Menu
// Rating System, Favorites, Advanced Animations, and More

// Favorites functionality
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Rating system
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};

// Order history
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

// User preferences
let userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || {
    theme: 'light',
    language: 'ar',
    notifications: true,
    autoSave: true
};

// Initialize advanced features
document.addEventListener('DOMContentLoaded', function() {
    initializeAdvancedFeatures();
    addAdvancedEventListeners();
    setupIntersectionObserver();
    initializeTheme();
});

// Initialize advanced features
function initializeAdvancedFeatures() {
    addFavoritesButton();
    addRatingSystem();
    addAdvancedSearch();
    addOrderHistory();
    addUserPreferences();
    addAdvancedAnimations();
    addKeyboardShortcuts();
    addOfflineSupport();
}

// Add favorites functionality
function addFavoritesButton() {
    const style = document.createElement('style');
    style.textContent = `
        .favorites-fab {
            position: fixed;
            bottom: 190px;
            left: 30px;
            background: linear-gradient(135deg, #E74C3C, #C0392B);
            color: white;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            cursor: pointer;
            z-index: 1001;
            transition: all 0.3s ease;
            border: none;
            animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .favorites-fab:hover {
            transform: scale(1.15);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .favorites-fab svg {
            width: 30px;
            height: 30px;
        }

        .favorite-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            z-index: 10;
        }

        .favorite-btn:hover {
            background: rgba(255, 255, 255, 1);
            transform: scale(1.1);
        }

        .favorite-btn.active {
            background: #E74C3C;
            color: white;
        }

        .favorite-btn svg {
            width: 18px;
            height: 18px;
        }

        .favorites-modal {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            max-width: 380px;
            height: 100%;
            background: var(--background-color);
            box-shadow: var(--shadow-heavy);
            z-index: 1002;
            transition: right 0.4s ease-in-out;
            display: flex;
            flex-direction: column;
            padding: 20px;
            border-left: 1px solid var(--border-color);
        }

        .favorites-modal.active {
            right: 0;
        }

        .rating-container {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-top: 8px;
        }

        .star {
            cursor: pointer;
            color: #ddd;
            font-size: 18px;
            transition: color 0.2s ease;
        }

        .star.active,
        .star:hover {
            color: #FFD700;
        }

        .average-rating {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.9rem;
            color: var(--text-light);
            margin-top: 5px;
        }

        .rating-count {
            font-size: 0.8rem;
            color: var(--text-light);
        }
    `;
    document.head.appendChild(style);

    // Add favorites FAB
    const favoritesButton = document.createElement('button');
    favoritesButton.className = 'favorites-fab';
    favoritesButton.onclick = toggleFavorites;
    favoritesButton.setAttribute('aria-label', 'المفضلة');
    favoritesButton.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    `;
    document.body.appendChild(favoritesButton);

    // Add favorites modal
    const favoritesModal = document.createElement('div');
    favoritesModal.className = 'favorites-modal';
    favoritesModal.id = 'favorites-modal';
    favoritesModal.innerHTML = `
        <div class="cart-modal-header">
            <h2>المفضلة</h2>
            <button class="close-cart-btn" onclick="toggleFavorites()" aria-label="إغلاق المفضلة">×</button>
        </div>
        <div class="cart-items" id="favorites-items">
            <div class="empty-cart">
                <p>لا توجد عناصر في المفضلة</p>
            </div>
        </div>
    `;
    document.body.appendChild(favoritesModal);
}

// Toggle favorites modal
function toggleFavorites() {
    const modal = document.getElementById('favorites-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        updateFavoritesDisplay();
    }
}

// Add item to favorites
function toggleFavorite(item) {
    const itemId = item.arabic_name;
    const existingIndex = favorites.findIndex(fav => fav.arabic_name === itemId);
    
    if (existingIndex > -1) {
        favorites.splice(existingIndex, 1);
    } else {
        favorites.push(item);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    
    // Show feedback
    const message = existingIndex > -1 ? 'تم حذف العنصر من المفضلة' : 'تم إضافة العنصر للمفضلة';
    showNotification(message);
}

// Update favorites display
function updateFavoritesDisplay() {
    const favoritesContainer = document.getElementById('favorites-items');
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<div class="empty-cart"><p>لا توجد عناصر في المفضلة</p></div>';
        return;
    }

    favorites.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.arabic_name}</span>
                <span class="cart-item-price">${item.price_sar} ريال</span>
            </div>
            <div class="cart-item-controls">
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">إضافة للسلة</button>
                <button class="remove-item-btn" onclick="removeFavorite('${item.arabic_name}')">حذف</button>
            </div>
        `;
        favoritesContainer.appendChild(itemDiv);
    });
}

// Remove from favorites
function removeFavorite(itemName) {
    favorites = favorites.filter(item => item.arabic_name !== itemName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesDisplay();
    updateFavoriteButtons();
}

// Update favorite buttons
function updateFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        const itemName = btn.getAttribute('data-item');
        const isFavorite = favorites.some(fav => fav.arabic_name === itemName);
        btn.classList.toggle('active', isFavorite);
    });
}

// Add rating system
function addRatingSystem() {
    // This will be called when rendering menu items
}

// Rate item
function rateItem(itemName, rating) {
    if (!ratings[itemName]) {
        ratings[itemName] = { total: 0, count: 0, average: 0 };
    }
    
    ratings[itemName].total += rating;
    ratings[itemName].count += 1;
    ratings[itemName].average = ratings[itemName].total / ratings[itemName].count;
    
    localStorage.setItem('ratings', JSON.stringify(ratings));
    showNotification('شكراً لتقييمك!');
}

// Get item rating
function getItemRating(itemName) {
    return ratings[itemName] || { average: 0, count: 0 };
}

// Add advanced search
function addAdvancedSearch() {
    // Advanced search functionality is now integrated into the main search
    // No additional filters needed as per user request
}

// Apply search filters
function applyFilters() {
    // Filters removed as per user request
    // Search functionality is handled by the main search function
}

// Add order history
function addOrderHistory() {
    // This will track completed orders
}

// Save order to history
function saveOrderToHistory(order) {
    const orderWithTimestamp = {
        ...order,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
    };
    
    orderHistory.unshift(orderWithTimestamp);
    
    // Keep only last 50 orders
    if (orderHistory.length > 50) {
        orderHistory = orderHistory.slice(0, 50);
    }
    
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// Add user preferences
function addUserPreferences() {
    // Add preferences button to header
    const header = document.querySelector('.header');
    if (!header) return;

    const preferencesBtn = document.createElement('button');
    preferencesBtn.className = 'preferences-btn';
    preferencesBtn.innerHTML = '⚙️';
    preferencesBtn.onclick = showPreferences;
    
    const style = document.createElement('style');
    style.textContent = `
        .preferences-btn {
            position: absolute;
            top: 20px;
            left: 20px;
            background: var(--surface-color);
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            transition: all 0.3s ease;
        }

        .preferences-btn:hover {
            background: var(--primary-color);
            color: white;
            transform: scale(1.1);
        }

        .preferences-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1004;
        }

        .preferences-modal.active {
            display: flex;
        }

        .preferences-content {
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 400px;
            width: 90%;
            box-shadow: var(--shadow-heavy);
        }

        .preference-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border-color);
        }

        .preference-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }

        .preference-label {
            font-weight: 600;
            color: var(--text-color);
        }

        .toggle-switch {
            position: relative;
            width: 50px;
            height: 25px;
            background: #ccc;
            border-radius: 25px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .toggle-switch.active {
            background: var(--primary-color);
        }

        .toggle-switch::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 21px;
            height: 21px;
            background: white;
            border-radius: 50%;
            transition: transform 0.3s ease;
        }

        .toggle-switch.active::after {
            transform: translateX(25px);
        }
    `;
    document.head.appendChild(style);

    header.appendChild(preferencesBtn);

    // Add preferences modal
    const preferencesModal = document.createElement('div');
    preferencesModal.className = 'preferences-modal';
    preferencesModal.id = 'preferences-modal';
    preferencesModal.innerHTML = `
        <div class="preferences-content">
            <h3>الإعدادات</h3>
            <div class="preference-item">
                <span class="preference-label">الإشعارات</span>
                <div class="toggle-switch ${userPreferences.notifications ? 'active' : ''}" onclick="togglePreference('notifications')"></div>
            </div>
            <div class="preference-item">
                <span class="preference-label">الحفظ التلقائي</span>
                <div class="toggle-switch ${userPreferences.autoSave ? 'active' : ''}" onclick="togglePreference('autoSave')"></div>
            </div>
            <div class="preference-item">
                <span class="preference-label">الوضع المظلم</span>
                <div class="toggle-switch ${userPreferences.theme === 'dark' ? 'active' : ''}" onclick="toggleTheme()"></div>
            </div>
            <button onclick="closePreferences()" style="width: 100%; padding: 10px; background: var(--primary-color); color: white; border: none; border-radius: 8px; margin-top: 20px; cursor: pointer;">إغلاق</button>
        </div>
    `;
    document.body.appendChild(preferencesModal);
}

// Show preferences modal
function showPreferences() {
    document.getElementById('preferences-modal').classList.add('active');
}

// Close preferences modal
function closePreferences() {
    document.getElementById('preferences-modal').classList.remove('active');
}

// Toggle preference
function togglePreference(pref) {
    userPreferences[pref] = !userPreferences[pref];
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    
    // Update UI
    const toggle = event.target;
    toggle.classList.toggle('active');
    
    showNotification('تم حفظ الإعدادات');
}

// Toggle theme
function toggleTheme() {
    userPreferences.theme = userPreferences.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    
    // Update UI
    const toggle = event.target;
    toggle.classList.toggle('active');
    
    applyTheme();
    showNotification('تم تغيير المظهر');
}

// Initialize theme
function initializeTheme() {
    if (userPreferences.theme === 'dark') {
        applyTheme();
    }
}

// Apply theme
function applyTheme() {
    const isDark = userPreferences.theme === 'dark';
    const root = document.documentElement;
    
    if (isDark) {
        root.style.setProperty('--background-color', '#1a1a1a');
        root.style.setProperty('--surface-color', '#2d2d2d');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--text-light', '#cccccc');
        root.style.setProperty('--border-color', '#404040');
    } else {
        root.style.setProperty('--background-color', '#FFFFFF');
        root.style.setProperty('--surface-color', '#FAFAFA');
        root.style.setProperty('--text-color', '#2C3E50');
        root.style.setProperty('--text-light', '#7F8C8D');
        root.style.setProperty('--border-color', '#E8E8E8');
    }
}

// Add advanced animations
function addAdvancedAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .animate-slide-left {
            animation: slideInFromLeft 0.6s ease-out;
        }

        .animate-slide-right {
            animation: slideInFromRight 0.6s ease-out;
        }

        .animate-bounce {
            animation: bounceIn 0.8s ease-out;
        }

        .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
        }

        .menu-item {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-item:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .category-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-btn:hover {
            transform: translateY(-3px) scale(1.05);
        }
    `;
    document.head.appendChild(style);
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-left');
            }
        });
    }, { threshold: 0.1 });

    // Observe menu items as they're created
    const observeMenuItems = () => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => observer.observe(item));
    };

    // Call after menu is rendered
    setTimeout(observeMenuItems, 100);
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + F for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
        
        // Ctrl/Cmd + H for favorites
        if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
            e.preventDefault();
            toggleFavorites();
        }
        
        // Ctrl/Cmd + B for cart
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
            e.preventDefault();
            toggleCart();
        }
        
        // Ctrl/Cmd + , for preferences
        if ((e.ctrlKey || e.metaKey) && e.key === ',') {
            e.preventDefault();
            showPreferences();
        }
    });
}

// Add offline support
function addOfflineSupport() {
    // Check if online/offline
    function updateOnlineStatus() {
        const status = navigator.onLine ? 'online' : 'offline';
        if (status === 'offline') {
            showNotification('أنت غير متصل بالإنترنت. بعض الميزات قد لا تعمل.', 'warning');
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1005;
            animation: slideInFromRight 0.3s ease-out;
            max-width: 300px;
        }

        .notification.success {
            background: var(--success-color);
        }

        .notification.warning {
            background: var(--warning-color);
        }

        .notification.error {
            background: var(--danger-color);
        }
    `;
    
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInFromRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add event listeners for advanced features
function addAdvancedEventListeners() {
    // Enhanced menu rendering with favorites and ratings
    const originalRenderMenu = window.renderMenu;
    window.renderMenu = function() {
        originalRenderMenu();
        
        // Add favorite buttons and ratings to menu items
        setTimeout(() => {
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach((item, index) => {
                // Add favorite button
                const favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'favorite-btn';
                favoriteBtn.innerHTML = `
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                `;
                
                // Get item data
                const itemName = item.querySelector('h3').textContent;
                favoriteBtn.setAttribute('data-item', itemName);
                favoriteBtn.onclick = function(e) {
                    e.stopPropagation();
                    // Find item data from menuData
                    let itemData = null;
                    for (const category in menuData) {
                        const found = menuData[category].find(menuItem => 
                            menuItem.arabic_name === itemName || menuItem.english_name === itemName
                        );
                        if (found) {
                            itemData = found;
                            break;
                        }
                    }
                    if (itemData) {
                        toggleFavorite(itemData);
                    }
                };
                
                item.style.position = 'relative';
                item.appendChild(favoriteBtn);
                
                // Add rating system
                const ratingContainer = document.createElement('div');
                ratingContainer.className = 'rating-container';
                
                const itemRating = getItemRating(itemName);
                
                // Stars for rating
                for (let i = 1; i <= 5; i++) {
                    const star = document.createElement('span');
                    star.className = `star ${i <= Math.round(itemRating.average) ? 'active' : ''}`;
                    star.innerHTML = '★';
                    star.onclick = function() {
                        rateItem(itemName, i);
                        // Update stars
                        const stars = ratingContainer.querySelectorAll('.star');
                        stars.forEach((s, idx) => {
                            s.classList.toggle('active', idx < i);
                        });
                    };
                    ratingContainer.appendChild(star);
                }
                
                // Average rating display
                if (itemRating.count > 0) {
                    const avgRating = document.createElement('div');
                    avgRating.className = 'average-rating';
                    avgRating.innerHTML = `
                        <span>${itemRating.average.toFixed(1)}</span>
                        <span class="rating-count">(${itemRating.count})</span>
                    `;
                    ratingContainer.appendChild(avgRating);
                }
                
                const itemContent = item.querySelector('.item-content');
                const description = itemContent.querySelector('.item-description');
                itemContent.insertBefore(ratingContainer, description.nextSibling);
            });
            
            updateFavoriteButtons();
        }, 100);
    };
}

// Enhanced complete order function
const originalCompleteOrder = window.completeOrder;
window.completeOrder = function() {
    if (cart.length === 0) {
        showNotification('السلة فارغة', 'warning');
        return;
    }
    
    // Save order to history
    const order = {
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price_sar * item.quantity), 0),
        notes: document.getElementById('order-notes').value,
        pickupMethod: document.querySelector('input[name="pickup-method"]:checked')?.value
    };
    
    saveOrderToHistory(order);
    
    // Call original function
    originalCompleteOrder();
    
    showNotification('تم إرسال طلبك بنجاح!');
};

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdvancedFeatures);
} else {
    initializeAdvancedFeatures();
}

