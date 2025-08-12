// Menu data with images
const menuData = {
    "الشوربات": [
        { "arabic_name": "شوربة ميراتا", "english_name": "Merata Soup", "price_sar": 18, "image": "images/1000034412.jpg" },
        { "arabic_name": "شوربة عدس", "english_name": "Lentil Soup", "price_sar": 16, "image": "images/1000034413.jpg" },
        { "arabic_name": "شوربة هوتشور", "english_name": "Hotchure Soup", "price_sar": 16, "image": "images/1000034415.jpg" },
        { "arabic_name": "شوربة كريمة بالدجاج", "english_name": "Chicken Cream Soup", "price_sar": 16, "image": "images/1000034416.jpg" },
        { "arabic_name": "وجبة أطفال", "english_name": "Children's Meal", "description_en": "Rice, vegetables, chicken kebab, shish tawouk, potato, juice", "price_sar": 27, "image": "images/1000034417.jpg" }
    ],
    "المقبلات": [
        { "arabic_name": "ورق عنب", "english_name": "Grape Leave", "price_sar": 14, "image": "images/1000034418.jpg" },
        { "arabic_name": "حمص", "english_name": "Hummus", "price_sar": 11, "image": "images/1000034420.jpg" },
        { "arabic_name": "متبل", "english_name": "Mutabal", "price_sar": 11, "image": "images/1000034421.jpg" },
        { "arabic_name": "تبولة", "english_name": "Taboulah", "price_sar": 14, "image": "images/1000034422.jpg" },
        { "arabic_name": "سلطة خضراء", "english_name": "Green Salad", "price_sar": 11, "image": "images/1000034423.jpg" },
        { "arabic_name": "مشكل ميراتا", "english_name": "Mix Merata", "price_sar": 23, "image": "images/1000034426.jpg" },
        { "arabic_name": "سلطة سيزر", "english_name": "Ceasar Salad", "price_sar": 25, "image": "images/1000034427.jpg" },
        { "arabic_name": "سلطة رايتا", "english_name": "Raita salad", "price_sar": 12, "image": "images/1000035949.jpg" },
        { "arabic_name": "بطاطس مقلية", "english_name": "French Fries", "price_sar": 10, "image": "images/1000035954.jpg" },
        { "arabic_name": "سبرينغ رول", "english_name": "Spring Roll", "price_sar": 17, "image": "images/1000035955.jpg" },
        { "arabic_name": "كبة", "english_name": "Kibbeh", "price_sar": 16, "image": "images/1000035959.jpg" },
        { "arabic_name": "فتوش", "english_name": "Fatosh", "price_sar": 15, "image": "images/1000034412.jpg" },
        { "arabic_name": "سلطة روسية", "english_name": "Russain salad", "price_sar": 21, "image": "images/1000034413.jpg" },
        { "arabic_name": "مشكل مقبلات ساخن", "english_name": "Mix Hot Appetizers", "price_sar": 25, "image": "images/1000034415.jpg" },
        { "arabic_name": "سمبوسة", "english_name": "Samosas", "description_en": "Chicken, cheese, vegetables", "price_sar": 16, "image": "images/1000034416.jpg" }
    ],
    "البرياني الهندي": [
        { "arabic_name": "أرز برياني سادة", "english_name": "Plain Biriyani", "price_sar": 16, "image": "images/1000034417.jpg" },
        { "arabic_name": "برياني خضار", "english_name": "Vegetable Biriyani", "price_sar": 23, "image": "images/1000034418.jpg" },
        { "arabic_name": "برياني دجاج", "english_name": "Chicken Biriyani", "price_sar": 33, "image": "images/1000034420.jpg" },
        { "arabic_name": "برياني لحم", "english_name": "Mutton Biriyani", "price_sar": 37, "image": "images/1000034421.jpg" },
        { "arabic_name": "برياني سمك", "english_name": "Fish Biriyani", "price_sar": 39, "image": "images/1000034422.jpg" },
        { "arabic_name": "برياني روبيان", "english_name": "Prawn Biriyani", "price_sar": 39, "image": "images/1000034423.jpg" }
    ],
    "مسالا دجاج": [
        { "arabic_name": "دجاج جالفريزي", "english_name": "Chicken Jalfrazi", "price_sar": 34, "image": "images/1000034426.jpg" },
        { "arabic_name": "دجاج بالزعفران", "english_name": "Chicken Zafrani", "price_sar": 45, "image": "images/1000034427.jpg" },
        { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achari", "price_sar": 34, "image": "images/1000035949.jpg" },
        { "arabic_name": "دجاج بالكاري", "english_name": "Chicken Curry", "price_sar": 40, "image": "images/1000035954.jpg" },
        { "arabic_name": "مرغ مكاني", "english_name": "Butter Chicken", "price_sar": 42, "image": "images/1000035955.jpg" },
        { "arabic_name": "دجاج كاداي", "english_name": "Kadai Chicken", "price_sar": 40, "image": "images/1000035959.jpg" },
        { "arabic_name": "دجاج بالفلفل", "english_name": "Chicken Mirchi", "price_sar": 34, "image": "images/1000034412.jpg" },
        { "arabic_name": "دجاج ميراتا", "english_name": "Chicken Merata", "price_sar": 38, "image": "images/1000034413.jpg" },
        { "arabic_name": "دجاج 65", "english_name": "Chicken 65", "price_sar": 34, "image": "images/1000034415.jpg" },
        { "arabic_name": "دجاج كورما", "english_name": "Chicken Korma", "price_sar": 34, "image": "images/1000034416.jpg" },
        { "arabic_name": "دجاج تكا مسالا", "english_name": "Chicken Tikka Masala", "price_sar": 42, "image": "images/1000034417.jpg" },
        { "arabic_name": "دجاج مانجوري", "english_name": "Chicken Manjuri", "price_sar": 41, "image": "images/1000034418.jpg" },
        { "arabic_name": "دجاج ادراكي", "english_name": "Chicken Adraki", "price_sar": 39, "image": "images/1000034420.jpg" },
        { "arabic_name": "لولي بوب", "english_name": "Chicken Lollipop", "price_sar": 38, "image": "images/1000034421.jpg" },
        { "arabic_name": "دجاج سيزلر", "english_name": "Sezlar Chicken", "price_sar": 39, "image": "images/1000034422.jpg" }
    ],
    "مسالا خضروات": [
        { "arabic_name": "كولابوري الخضار", "english_name": "Vegetable Kolhapuri", "price_sar": 32, "image": "images/1000034423.jpg" },
        { "arabic_name": "خضروات مشكلة بالكاري", "english_name": "Mix Vegetable Curry", "price_sar": 29, "image": "images/1000034426.jpg" },
        { "arabic_name": "ألو دوم كاري", "english_name": "Aloo Dum Curry", "price_sar": 29, "image": "images/1000034427.jpg" },
        { "arabic_name": "منجوري خضار", "english_name": "Vegtable Mangory", "price_sar": 29, "image": "images/1000035949.jpg" },
        { "arabic_name": "بطاطس حارة", "english_name": "Spice Potatos", "price_sar": 16, "image": "images/1000035954.jpg" }
    ],
    "مسالا لحم": [
        { "arabic_name": "لحم جالفريزي", "english_name": "Mutton Jalfrazi", "price_sar": 38, "image": "images/1000035955.jpg" },
        { "arabic_name": "لحم بالزعفران", "english_name": "Mutton Zafrani", "price_sar": 45, "image": "images/1000035959.jpg" },
        { "arabic_name": "لحم أشاري", "english_name": "Mutton Achari", "price_sar": 38, "image": "images/1000034412.jpg" },
        { "arabic_name": "لحم كاري بالعظم", "english_name": "Mutton Curry", "price_sar": 44, "image": "images/1000034413.jpg" },
        { "arabic_name": "لحم كاداي", "english_name": "Kadai Mutton", "price_sar": 38, "image": "images/1000034415.jpg" },
        { "arabic_name": "لحم بالفلفل", "english_name": "Mutton MIRCHI", "price_sar": 38, "image": "images/1000034416.jpg" },
        { "arabic_name": "لحم ميراتا", "english_name": "Mutton MERATA", "price_sar": 39, "image": "images/1000034417.jpg" }
    ],
    "مسالا بحريات": [
        { "arabic_name": "سمك هونج كونج", "english_name": "Hong Kong Fish", "price_sar": 41, "image": "images/1000034418.jpg" },
        { "arabic_name": "سمك بنجابي", "english_name": "FISH PNJABY", "price_sar": 42, "image": "images/1000034420.jpg" },
        { "arabic_name": "سمك أبولو", "english_name": "Fish APOLLO", "price_sar": 41, "image": "images/1000034421.jpg" },
        { "arabic_name": "سمك بالزبدة والثوم", "english_name": "Fish Garlic & Butter", "price_sar": 41, "image": "images/1000034422.jpg" },
        { "arabic_name": "جمبري بالفلفل", "english_name": "Prawns Mirchi", "price_sar": 42, "image": "images/1000034423.jpg" },
        { "arabic_name": "جمبري ميراتا", "english_name": "Prawns Merata", "price_sar": 45, "image": "images/1000034426.jpg" },
        { "arabic_name": "جمبري جالفريزي", "english_name": "Prawn Jalfrezi", "price_sar": 42, "image": "images/1000034427.jpg" },
        { "arabic_name": "سمك كاري", "english_name": "Fish Curry", "price_sar": 45, "image": "images/1000035949.jpg" },
        { "arabic_name": "سمك مسالا", "english_name": "Fish Masala", "price_sar": 41, "image": "images/1000035954.jpg" },
        { "arabic_name": "سمك كورما", "english_name": "Fish Korma", "price_sar": 41, "image": "images/1000035955.jpg" },
        { "arabic_name": "سمك كادي", "english_name": "Fish Kadai", "price_sar": 42, "image": "images/1000035959.jpg" },
        { "arabic_name": "جمبري كاري", "english_name": "Prawns Curry", "price_sar": 45, "image": "images/1000034412.jpg" },
        { "arabic_name": "جمبري مسالا", "english_name": "Prawns Masala", "price_sar": 41, "image": "images/1000034413.jpg" },
        { "arabic_name": "جمبري كورما", "english_name": "Prawns Korma", "price_sar": 41, "image": "images/1000034415.jpg" },
        { "arabic_name": "جمبري كادي", "english_name": "Prawns Kadai", "price_sar": 42, "image": "images/1000034416.jpg" }
    ],
    "مشويات التندوري": [
        { "arabic_name": "مشكل مشوي (كبير)", "english_name": "Mixed Grilled \"large\"", "price_sar": 80, "image": "images/1000034417.jpg" },
        { "arabic_name": "مشكل مشوي (وسط)", "english_name": "Mixed Grilled \"medium\"", "price_sar": 55, "image": "images/1000034418.jpg" },
        { "arabic_name": "دجاج بالثوم", "english_name": "Chicken Garlic Kabab", "price_sar": 34, "image": "images/1000034420.jpg" },
        { "arabic_name": "كباب لحم", "english_name": "Mutton Seek Kabab", "price_sar": 37, "image": "images/1000034421.jpg" },
        { "arabic_name": "لحم شبنامي", "english_name": "Mutton Shabnami", "price_sar": 41, "image": "images/1000034422.jpg" },
        { "arabic_name": "سمك تكا", "english_name": "Fish Tikka", "price_sar": 44, "image": "images/1000034423.jpg" },
        { "arabic_name": "روبيان تندوري", "english_name": "Prawns Tandoori", "price_sar": 44, "image": "images/1000034426.jpg" },
        { "arabic_name": "دجاج تكا", "english_name": "Chicken Tikka", "price_sar": 34, "image": "images/1000034427.jpg" },
        { "arabic_name": "دجاج رشمي", "english_name": "Chicken Reshmi", "price_sar": 34, "image": "images/1000035949.jpg" },
        { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achri", "price_sar": 34, "image": "images/1000035954.jpg" },
        { "arabic_name": "كباب سيخ دجاج", "english_name": "Chicken Seek Kabab", "price_sar": 34, "image": "images/1000035955.jpg" },
        { "arabic_name": "روبيان تكا", "english_name": "PRAWNS TIKKA", "price_sar": 44, "image": "images/1000035959.jpg" },
        { "arabic_name": "جريلد تشيكن", "english_name": "Grilled Chicken", "price_sar": 29, "image": "images/1000034412.jpg" }
    ],
    "المطبخ الصيني": [
        { "arabic_name": "أرز مقلي شيزوان", "english_name": "Schezwan fried rice", "price_sar": 38, "image": "images/1000034413.jpg" },
        { "arabic_name": "أرز مقلي سنغافوري", "english_name": "Singapore fried rice", "price_sar": 40, "image": "images/1000034415.jpg" },
        { "arabic_name": "أرز مقلي بالخضروات", "english_name": "Vegetable fried rice", "price_sar": 33, "image": "images/1000034416.jpg" },
        { "arabic_name": "أرز مقلي بالدجاج", "english_name": "Chicken fried rice", "price_sar": 38, "image": "images/1000034417.jpg" },
        { "arabic_name": "أرز مقلي بالروبيان", "english_name": "Prawn fried rice", "price_sar": 42, "image": "images/1000034418.jpg" },
        { "arabic_name": "نودلز سنغافورة", "english_name": "Singapore noodles", "price_sar": 38, "image": "images/1000034420.jpg" },
        { "arabic_name": "نودلز الخضروات", "english_name": "Vegetable noodles", "price_sar": 34, "image": "images/1000034421.jpg" },
        { "arabic_name": "نودلز الدجاج", "english_name": "Chicken noodles", "price_sar": 38, "image": "images/1000034422.jpg" },
        { "arabic_name": "مومو لحم", "english_name": "Momo Meat", "price_sar": 25, "image": "images/1000034423.jpg" },
        { "arabic_name": "مومو دجاج", "english_name": "Momo Chicken", "price_sar": 23, "image": "images/1000034426.jpg" },
        { "arabic_name": "نودلز الروبيان", "english_name": "Prawn noodles", "price_sar": 45, "image": "images/1000034427.jpg" },
        { "arabic_name": "نودلز السمك", "english_name": "Fish noodles", "price_sar": 42, "image": "images/1000035949.jpg" },
        { "arabic_name": "دجاج ديناميت", "english_name": "Dynamit Chicken", "price_sar": 42, "image": "images/1000035954.jpg" },
        { "arabic_name": "دجاج شيلي", "english_name": "Chilly chicken", "price_sar": 35, "image": "images/1000035955.jpg" },
        { "arabic_name": "لحم شيلي", "english_name": "Chilly mutton", "price_sar": 37, "image": "images/1000035959.jpg" },
        { "arabic_name": "سمك شيلي", "english_name": "Chilly fish", "price_sar": 40, "image": "images/1000034412.jpg" },
        { "arabic_name": "روبيان شيلي", "english_name": "Chilly prawn", "price_sar": 40, "image": "images/1000034413.jpg" },
        { "arabic_name": "روبيان ديناميت", "english_name": "Dynamite Shrimp", "price_sar": 41, "image": "images/1000034415.jpg" }
    ],
    "خبز هندي": [
        { "arabic_name": "خبز مشكل", "english_name": "Mix bread", "price_sar": 7, "image": "images/1000034416.jpg" },
        { "arabic_name": "خبز نان", "english_name": "Naan bread", "price_sar": 1, "image": "images/1000034417.jpg" },
        { "arabic_name": "خبز جارلك نان", "english_name": "Garlic naan bread", "price_sar": 2, "image": "images/1000034418.jpg" },
        { "arabic_name": "خبز تشيزنان", "english_name": "Cheese bread", "price_sar": 3, "image": "images/1000034420.jpg" },
        { "arabic_name": "خبز كيمانان", "english_name": "Kema nan bread", "price_sar": 6, "image": "images/1000034421.jpg" },
        { "arabic_name": "خبز بترنان", "english_name": "Butter naan bread", "price_sar": 2, "image": "images/1000034422.jpg" }
    ],
    "عصيرات": [
        { "arabic_name": "برتقال", "english_name": "Orange", "price_sar": 14, "image": "images/1000034423.jpg" },
        { "arabic_name": "ليمون نعناع", "english_name": "Lemon Mint", "price_sar": 15, "image": "images/1000034426.jpg" },
        { "arabic_name": "ليمون", "english_name": "Lemon", "price_sar": 14, "image": "images/1000034427.jpg" },
        { "arabic_name": "فراولة", "english_name": "Strawberry", "price_sar": 14, "image": "images/1000035949.jpg" },
        { "arabic_name": "مانجو", "english_name": "Mango", "price_sar": 14, "image": "images/1000035954.jpg" },
        { "arabic_name": "كوكتيل", "english_name": "Cocktail", "price_sar": 15, "image": "images/1000035955.jpg" },
        { "arabic_name": "كوكتيل طبقات", "english_name": "Cocktail Layers", "price_sar": 15, "image": "images/1000035959.jpg" },
        { "arabic_name": "كأس شراب سعودي", "english_name": "Saudi Drink Cup", "price_sar": 13, "image": "images/1000034412.jpg" },
        { "arabic_name": "شراب سعودي وسط", "english_name": "Saudi Drink Medium", "price_sar": 23, "image": "images/1000034413.jpg" },
        { "arabic_name": "شراب سعودي كبير", "english_name": "Saudi Drink Large", "price_sar": 35, "image": "images/1000034415.jpg" },
        { "arabic_name": "بيبسي", "english_name": "PEPSI", "price_sar": 3, "image": "images/1000034416.jpg" },
        { "arabic_name": "سفن أب", "english_name": "Seven UP", "price_sar": 3, "image": "images/1000034417.jpg" },
        { "arabic_name": "حمضيات", "english_name": "Citrus", "price_sar": 3, "image": "images/1000034418.jpg" },
        { "arabic_name": "ماء", "english_name": "Water", "price_sar": 2, "image": "images/1000034420.jpg" }
    ]
};

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentLanguage = 'ar';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    updateCartDisplay();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Close cart modal when clicking outside
    document.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cart-modal');
        if (event.target === cartModal) {
            toggleCart();
        }
    });
}

// Load and display menu
function loadMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    Object.keys(menuData).forEach(category => {
        const section = createMenuSection(category, menuData[category]);
        menuContainer.appendChild(section);
    });
}

// Create menu section
function createMenuSection(categoryName, items) {
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.setAttribute('data-category', categoryName);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'section-title-container';
    
    const title = document.createElement('h2');
    title.textContent = categoryName;
    titleContainer.appendChild(title);
    
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    
    items.forEach(item => {
        const menuItem = createMenuItem(item);
        grid.appendChild(menuItem);
    });
    
    section.appendChild(titleContainer);
    section.appendChild(grid);
    
    return section;
}

// Create individual menu item
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'item-image';
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.arabic_name;
    img.onerror = function() {
        this.src = 'images/merata_logo.png'; // Fallback image
    };
    
    imageDiv.appendChild(img);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'item-content';
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'item-header';
    
    const nameH3 = document.createElement('h3');
    nameH3.textContent = currentLanguage === 'ar' ? item.arabic_name : item.english_name;
    
    const priceSpan = document.createElement('span');
    priceSpan.className = 'item-price';
    priceSpan.textContent = `${item.price_sar} ريال`;
    
    headerDiv.appendChild(nameH3);
    headerDiv.appendChild(priceSpan);
    
    const descriptionP = document.createElement('p');
    descriptionP.className = 'item-description';
    descriptionP.textContent = item.description_en || item.english_name;
    
    const addButton = document.createElement('button');
    addButton.className = 'add-to-cart-btn';
    addButton.textContent = 'إضافة للسلة';
    addButton.onclick = () => addToCart(item);
    
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(descriptionP);
    contentDiv.appendChild(addButton);
    
    menuItem.appendChild(imageDiv);
    menuItem.appendChild(contentDiv);
    
    return menuItem;
}

// Filter menu by category
function filterCategory(category) {
    const sections = document.querySelectorAll('.menu-section');
    const buttons = document.querySelectorAll('.category-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide sections
    sections.forEach(section => {
        if (category === 'all' || section.getAttribute('data-category') === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Add item to cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.arabic_name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: item.arabic_name,
            englishName: item.english_name,
            price: item.price_sar,
            quantity: 1,
            image: item.image
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showSuccessMessage('تم إضافة العنصر إلى السلة!');
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

// Update item quantity
function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Remove item from cart
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

// Close cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('active');
}

// Open WhatsApp inquiry
function openWhatsAppInquiry() {
    const phoneNumber = '+966508813919';
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن منيو مطعم ميراتا');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.getElementById('success-message');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    successDiv.style.opacity = '1';
    
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 300);
    }, 2000);
}

// Language toggle function (for future use)
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    loadMenu();
}

// Complete order function (will be handled by payment integration)
function completeOrder() {
    if (typeof showPaymentOptions === 'function') {
        showPaymentOptions();
    } else {
        // Fallback to WhatsApp if payment integration is not loaded
        const orderDetails = formatOrderForWhatsApp();
        const phoneNumber = '+966508813919';
        const message = encodeURIComponent(orderDetails);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        // Clear cart
        cart = [];
        localStorage.removeItem('cart');
        updateCartDisplay();
        closeCart();
        showSuccessMessage('تم إرسال طلبك! سيتم التواصل معك قريباً.');
    }
}

// Format order for WhatsApp (fallback function)
function formatOrderForWhatsApp() {
    let message = `🍽️ *طلب جديد من مطعم ميراتا*\n\n`;
    
    if (cart.length === 0) {
        return message + 'السلة فارغة';
    }
    
    message += `📋 *تفاصيل الطلب:*\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   الكمية: ${item.quantity}\n`;
        message += `   السعر: ${item.price} ريال\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💰 *المجموع الكلي: ${total} ريال*\n\n`;
    
    const notes = document.getElementById('order-notes')?.value;
    if (notes && notes.trim()) {
        message += `📝 *ملاحظات:* ${notes}\n\n`;
    }
    
    message += `🕐 *وقت الطلب:* ${new Date().toLocaleString('ar-SA')}\n`;
    message += `\nشكراً لاختياركم مطعم ميراتا! 🌟`;
    
    return message;
}

