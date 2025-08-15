// Menu images mapping
const menuImages = {
    // الشوربات
    "شوربة كريمة بدجاج": "./images/1000036028.jpg",
    
    // المقبلات
    "سمك أبولو": "./images/1000036027.jpg",
    "سلطة خضراء": "./images/1000036026.jpg",
    
    // البرياني الهندي
    "برياني لحم": "./images/1000036025.jpg",
    
    // مشويات التندوري
    "مشكل تندوري ميراتا": "./images/1000036023.jpg",
    "متبل": "./images/1000036022.jpg",
    "كباب لحم": "./images/1000036021.jpg",
    "كباب سيخ دجاج": "./images/1000036020.jpg",
    
    // المطبخ الصيني
    "ربيان تندوري": "./images/1000036017.jpg",
    "فاتوش": "./images/1000036019.jpg",
    
    // مسالا بحريات
    "دجاج بالفلفل": "./images/1000036015.jpg",
    "دجاج تكا": "./images/1000036016.jpg",
    
    // مسالا لحم
    "برياني سادة": "./images/1000036013.jpg",
    
    // عصيرات
    "عصير برتقال": "./images/1000036012.jpg"
};

// Function to get image for menu item
function getMenuItemImage(itemName) {
    return menuImages[itemName] || './images/default-food.jpg';
}

// Function to add images to menu items
function addImagesToMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('.item-header h3').textContent.trim();
        const imageUrl = getMenuItemImage(itemName);
        
        // Create image element
        const imageElement = document.createElement('div');
        imageElement.className = 'menu-item-image';
        imageElement.innerHTML = `<img src="${imageUrl}" alt="${itemName}" onerror="this.style.display='none'">`;
        
        // Insert image at the beginning of item content
        const itemContent = item.querySelector('.item-content');
        itemContent.insertBefore(imageElement, itemContent.firstChild);
    });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for menu to be rendered first
    setTimeout(addImagesToMenuItems, 500);
});

