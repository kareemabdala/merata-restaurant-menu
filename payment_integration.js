// Payment Integration for Merata Restaurant
// This file handles PayPal and Stripe payment integration

// PayPal Configuration
const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID'; // Replace with actual PayPal Client ID
const STRIPE_PUBLISHABLE_KEY = 'YOUR_STRIPE_PUBLISHABLE_KEY'; // Replace with actual Stripe key

// Payment methods configuration
const paymentMethods = {
    paypal: {
        enabled: true,
        currency: 'SAR'
    },
    stripe: {
        enabled: true,
        currency: 'SAR'
    },
    whatsapp: {
        enabled: true,
        phoneNumber: '+966XXXXXXXXX' // Replace with restaurant's WhatsApp number
    }
};

// Initialize payment methods when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePaymentMethods();
});

// Initialize all payment methods
function initializePaymentMethods() {
    if (paymentMethods.paypal.enabled) {
        loadPayPalSDK();
    }
    
    if (paymentMethods.stripe.enabled) {
        loadStripeSDK();
    }
    
    setupWhatsAppPayment();
}

// Load PayPal SDK
function loadPayPalSDK() {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${paymentMethods.paypal.currency}`;
    script.onload = initializePayPal;
    document.head.appendChild(script);
}

// Initialize PayPal buttons
function initializePayPal() {
    if (typeof paypal !== 'undefined') {
        // PayPal will be initialized when checkout modal opens
        console.log('PayPal SDK loaded successfully');
    }
}

// Load Stripe SDK
function loadStripeSDK() {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = initializeStripe;
    document.head.appendChild(script);
}

// Initialize Stripe
function initializeStripe() {
    if (typeof Stripe !== 'undefined') {
        window.stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
        console.log('Stripe SDK loaded successfully');
    }
}

// Setup WhatsApp payment option
function setupWhatsAppPayment() {
    // WhatsApp payment is handled through message formatting
    console.log('WhatsApp payment option configured');
}

// Create PayPal payment button
function createPayPalButton(containerId, amount, currency = 'SAR') {
    if (typeof paypal === 'undefined') {
        console.error('PayPal SDK not loaded');
        return;
    }

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount.toString(),
                        currency_code: currency
                    },
                    description: 'طلب من مطعم ميراتا - Merata Restaurant Order'
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                showPaymentSuccess('PayPal', details);
                clearCart();
            });
        },
        onError: function(err) {
            showPaymentError('PayPal', err);
        },
        onCancel: function(data) {
            showPaymentCancelled('PayPal');
        }
    }).render(containerId);
}

// Create Stripe payment button
function createStripeButton(containerId, amount, currency = 'SAR') {
    const container = document.querySelector(containerId);
    if (!container || typeof Stripe === 'undefined') {
        console.error('Stripe not available or container not found');
        return;
    }

    const button = document.createElement('button');
    button.className = 'stripe-payment-btn';
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        الدفع بالبطاقة الائتمانية
    `;
    
    button.onclick = function() {
        handleStripePayment(amount, currency);
    };
    
    container.appendChild(button);
}

// Handle Stripe payment
function handleStripePayment(amount, currency) {
    // For static sites, we'll use Stripe Checkout
    // This requires creating a checkout session on the server
    // For now, we'll show a message about contacting the restaurant
    showPaymentInfo('Stripe', 'للدفع بالبطاقة الائتمانية، يرجى التواصل مع المطعم مباشرة');
}

// Create WhatsApp order button
function createWhatsAppButton(containerId) {
    const container = document.querySelector(containerId);
    if (!container) return;

    const button = document.createElement('button');
    button.className = 'whatsapp-payment-btn';
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

// Send order via WhatsApp
function sendWhatsAppOrder() {
    const orderDetails = formatOrderForWhatsApp();
    const phoneNumber = paymentMethods.whatsapp.phoneNumber;
    const message = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}

// Format order details for WhatsApp
function formatOrderForWhatsApp() {
    const t = translations[currentLang];
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
    const pickupMethod = document.querySelector('input[name="pickup"]:checked');
    if (pickupMethod) {
        const method = pickupMethod.value === 'branch' ? 'من الفرع' : 'محلي (داخل الفرع)';
        message += `📍 *طريقة الاستلام:* ${method}\n\n`;
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

// Show payment success message
function showPaymentSuccess(method, details) {
    const message = `تم الدفع بنجاح عبر ${method}!\nرقم المعاملة: ${details.id || 'غير متوفر'}`;
    alert(message);
    
    // You can replace this with a more sophisticated notification system
    showSuccessMessage(`تم الدفع بنجاح عبر ${method}!`);
}

// Show payment error message
function showPaymentError(method, error) {
    const message = `حدث خطأ في الدفع عبر ${method}. يرجى المحاولة مرة أخرى.`;
    alert(message);
    console.error(`${method} payment error:`, error);
}

// Show payment cancelled message
function showPaymentCancelled(method) {
    const message = `تم إلغاء عملية الدفع عبر ${method}.`;
    alert(message);
}

// Show payment info message
function showPaymentInfo(method, message) {
    alert(message);
}

// Update checkout modal to include payment options
function updateCheckoutModal() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!checkoutBtn) return;
    
    // Replace the existing checkout button with payment options
    checkoutBtn.innerHTML = 'اختر طريقة الدفع';
    checkoutBtn.onclick = function() {
        showPaymentOptions();
    };
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
            <div class="payment-options">
                <div class="payment-option">
                    <h4>💳 الدفع الإلكتروني</h4>
                    <div id="paypal-button-container"></div>
                    <div id="stripe-button-container"></div>
                </div>
                <div class="payment-option">
                    <h4>📱 طلب عبر واتساب</h4>
                    <p>سيتم إرسال تفاصيل طلبك عبر واتساب للمطعم</p>
                    <div id="whatsapp-button-container"></div>
                </div>
                <div class="payment-option">
                    <h4>💰 الدفع عند الاستلام</h4>
                    <button class="cash-payment-btn" onclick="handleCashPayment()">
                        اختر الدفع عند الاستلام
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Initialize payment buttons
    if (paymentMethods.paypal.enabled) {
        createPayPalButton('#paypal-button-container', total);
    }
    
    if (paymentMethods.stripe.enabled) {
        createStripeButton('#stripe-button-container', total);
    }
    
    createWhatsAppButton('#whatsapp-button-container');
    
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

// Handle cash payment
function handleCashPayment() {
    sendWhatsAppOrder();
    closePaymentModal();
    showSuccessMessage('تم إرسال طلبك! سيتم التواصل معك قريباً.');
}

// Initialize payment integration when the script loads
document.addEventListener('DOMContentLoaded', function() {
    // Update the existing checkout button
    setTimeout(updateCheckoutModal, 1000); // Wait for cart to initialize
});

