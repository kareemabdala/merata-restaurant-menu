// Payment Integration for Merata Restaurant
// Updated payment methods: WhatsApp, Cash on Delivery, Mada, Visa, MasterCard, Apple Pay

// Payment methods configuration
const paymentMethods = {
    whatsapp: {
        enabled: true,
        phoneNumber: '+966508813919'
    },
    cashOnDelivery: {
        enabled: true
    },
    cards: {
        enabled: true,
        supportedCards: ['mada', 'visa', 'mastercard', 'applepay']
    }
};

// Initialize payment methods when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePaymentMethods();
});

// Initialize all payment methods
function initializePaymentMethods() {
    setupWhatsAppPayment();
    setupCardPayments();
    console.log('Payment methods initialized: WhatsApp, Cash on Delivery, Cards (Mada, Visa, MasterCard, Apple Pay)');
}

// Setup WhatsApp payment option
function setupWhatsAppPayment() {
    console.log('WhatsApp payment option configured');
}

// Setup card payment options
function setupCardPayments() {
    console.log('Card payment options configured: Mada, Visa, MasterCard, Apple Pay');
}

// Create WhatsApp order button
function createWhatsAppButton(containerId) {
    const container = document.querySelector(containerId);
    if (!container) return;

    const button = document.createElement('button');
    button.className = 'whatsapp-payment-btn payment-btn';
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        طلب عبر واتساب
    `;
    
    button.onclick = function() {
        sendWhatsAppOrder();
    };
    
    container.appendChild(button);
}

// Create cash on delivery button
function createCashOnDeliveryButton(containerId) {
    const container = document.querySelector(containerId);
    if (!container) return;

    const button = document.createElement('button');
    button.className = 'cash-payment-btn payment-btn';
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
        الدفع عند الاستلام
    `;
    
    button.onclick = function() {
        handleCashOnDelivery();
    };
    
    container.appendChild(button);
}

// Create card payment buttons
function createCardPaymentButtons(containerId) {
    const container = document.querySelector(containerId);
    if (!container) return;

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-payment-container';
    
    // Mada
    const madaBtn = document.createElement('button');
    madaBtn.className = 'card-payment-btn payment-btn mada-btn';
    madaBtn.innerHTML = `
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwNzY0QSIvPgo8dGV4dCB4PSI1IiB5PSIxNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSI+bWFkYTwvdGV4dD4KPC9zdmc+" alt="Mada" style="width: 40px; height: 24px;">
        مدى
    `;
    madaBtn.onclick = () => handleCardPayment('mada');
    
    // Visa
    const visaBtn = document.createElement('button');
    visaBtn.className = 'card-payment-btn payment-btn visa-btn';
    visaBtn.innerHTML = `
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzFFNDc5QiIvPgo8dGV4dCB4PSI4IiB5PSIxNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSI+VklTQTwvdGV4dD4KPC9zdmc+" alt="Visa" style="width: 40px; height: 24px;">
        فيزا
    `;
    visaBtn.onclick = () => handleCardPayment('visa');
    
    // MasterCard
    const mastercardBtn = document.createElement('button');
    mastercardBtn.className = 'card-payment-btn payment-btn mastercard-btn';
    mastercardBtn.innerHTML = `
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEyIiByPSI2IiBmaWxsPSIjRkY1RjAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjEyIiByPSI2IiBmaWxsPSIjRkY1RjAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4=" alt="MasterCard" style="width: 40px; height: 24px;">
        ماستركارد
    `;
    mastercardBtn.onclick = () => handleCardPayment('mastercard');
    
    // Apple Pay
    const applePayBtn = document.createElement('button');
    applePayBtn.className = 'card-payment-btn payment-btn applepay-btn';
    applePayBtn.innerHTML = `
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMTUuNSA4QzE1LjUgNi41IDE2LjUgNS41IDE4IDUuNUMxOC41IDUuNSAxOSA2IDE5IDYuNUMxOSA3IDE4LjUgNy41IDE4IDcuNUMxNi41IDcuNSAxNS41IDcgMTUuNSA4WiIgZmlsbD0id2hpdGUiLz4KPHRleHQgeD0iNSIgeT0iMTciIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4IiBmaWxsPSJ3aGl0ZSI+QXBwbGUgUGF5PC90ZXh0Pgo8L3N2Zz4=" alt="Apple Pay" style="width: 40px; height: 24px;">
        آبل باي
    `;
    applePayBtn.onclick = () => handleCardPayment('applepay');
    
    cardContainer.appendChild(madaBtn);
    cardContainer.appendChild(visaBtn);
    cardContainer.appendChild(mastercardBtn);
    cardContainer.appendChild(applePayBtn);
    
    container.appendChild(cardContainer);
}

// Send order via WhatsApp
function sendWhatsAppOrder() {
    const orderDetails = formatOrderForWhatsApp();
    const phoneNumber = paymentMethods.whatsapp.phoneNumber;
    const message = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    clearCartAndCloseModal();
    showSuccessMessage('تم إرسال طلبك عبر واتساب! سيتم التواصل معك قريباً.');
}

// Handle cash on delivery
function handleCashOnDelivery() {
    const orderDetails = formatOrderForWhatsApp();
    orderDetails += '\n\n💰 *طريقة الدفع:* الدفع عند الاستلام';
    
    const phoneNumber = paymentMethods.whatsapp.phoneNumber;
    const message = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    clearCartAndCloseModal();
    showSuccessMessage('تم تأكيد طلبك للدفع عند الاستلام! سيتم التواصل معك قريباً.');
}

// Handle card payment
function handleCardPayment(cardType) {
    const cardNames = {
        'mada': 'مدى',
        'visa': 'فيزا',
        'mastercard': 'ماستركارد',
        'applepay': 'آبل باي'
    };
    
    const orderDetails = formatOrderForWhatsApp();
    orderDetails += `\n\n💳 *طريقة الدفع المفضلة:* ${cardNames[cardType]}`;
    
    const phoneNumber = paymentMethods.whatsapp.phoneNumber;
    const message = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    clearCartAndCloseModal();
    showSuccessMessage(`تم إرسال طلبك مع تفضيل الدفع بـ ${cardNames[cardType]}! سيتم التواصل معك لإتمام عملية الدفع.`);
}

// Format order details for WhatsApp
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
    
    // Add pickup method if selected
    const pickupMethod = document.querySelector('input[name="pickup-method"]:checked');
    if (pickupMethod) {
        const methodText = pickupMethod.nextElementSibling ? pickupMethod.nextElementSibling.textContent : 'غير محدد';
        message += `📍 *طريقة الاستلام:* ${methodText}\n\n`;
    }
    
    // Add notes if any
    const notes = document.getElementById('order-notes')?.value;
    if (notes && notes.trim()) {
        message += `📝 *ملاحظات:* ${notes}\n\n`;
    }
    
    message += `🕐 *وقت الطلب:* ${new Date().toLocaleString('ar-SA')}\n`;
    message += `\nشكراً لاختياركم مطعم ميراتا! 🌟`;
    
    return message;
}

// Clear cart and close modal
function clearCartAndCloseModal() {
    // Clear cart
    cart = [];
    localStorage.removeItem('cart');
    updateCartDisplay();
    
    // Close payment modal
    closePaymentModal();
    
    // Close cart modal
    closeCart();
}

// Show payment options modal
function showPaymentOptions() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (total === 0) {
        alert('السلة فارغة');
        return;
    }
    
    // Create payment options modal
    const modal = document.createElement('div');
    modal.className = 'payment-modal';
    modal.innerHTML = `
        <div class="payment-modal-content">
            <div class="payment-modal-header">
                <h3>اختر طريقة الدفع</h3>
                <button class="close-payment-btn" onclick="closePaymentModal()">&times;</button>
            </div>
            <div class="payment-total">
                <h4>المجموع الكلي: ${total} ريال</h4>
            </div>
            <div class="payment-options">
                <div class="payment-option">
                    <h4>📱 طلب عبر واتساب</h4>
                    <p>سيتم إرسال تفاصيل طلبك عبر واتساب للمطعم</p>
                    <div id="whatsapp-button-container"></div>
                </div>
                <div class="payment-option">
                    <h4>💰 الدفع عند الاستلام</h4>
                    <p>ادفع نقداً عند استلام طلبك</p>
                    <div id="cash-button-container"></div>
                </div>
                <div class="payment-option">
                    <h4>💳 الدفع بالبطاقة</h4>
                    <p>طرق الدفع المتاحة:</p>
                    <div id="card-buttons-container"></div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Initialize payment buttons
    createWhatsAppButton('#whatsapp-button-container');
    createCashOnDeliveryButton('#cash-button-container');
    createCardPaymentButtons('#card-buttons-container');
    
    // Show modal
    modal.style.display = 'flex';
}

// Close payment modal
function closePaymentModal() {
    const modal = document.querySelector('.payment-modal');
    if (modal) {
        modal.remove();
    }
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Update checkout modal to include payment options
function updateCheckoutModal() {
    // This will be called from the main script when checkout button is clicked
    // The main script should call showPaymentOptions() instead of the old checkout function
}

// Initialize payment integration when the script loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Payment integration loaded: WhatsApp, Cash on Delivery, Cards (Mada, Visa, MasterCard, Apple Pay)');
});

