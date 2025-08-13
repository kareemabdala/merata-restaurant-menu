// Progressive Web App Features for Merata Restaurant Menu
// Service Worker, Push Notifications, App Install, Offline Support

// PWA Configuration
const PWA_CONFIG = {
    name: 'مطعم ميراتا',
    shortName: 'ميراتا',
    description: 'منيو مطعم ميراتا الرقمي - أفضل الأطباق الهندية الأصيلة',
    themeColor: '#FF6B35',
    backgroundColor: '#FFFFFF',
    display: 'standalone',
    orientation: 'portrait',
    startUrl: '/',
    scope: '/'
};

// Initialize PWA features
document.addEventListener('DOMContentLoaded', function() {
    initializePWA();
    setupInstallPrompt();
    setupPushNotifications();
    setupOfflineIndicator();
    createManifest();
});

// Initialize PWA
function initializePWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        registerServiceWorker();
    }
    
    // Setup app install banner
    setupInstallBanner();
    
    // Setup offline/online detection
    setupNetworkDetection();
    
    // Setup background sync
    setupBackgroundSync();
}

// Register Service Worker
async function registerServiceWorker() {
    try {
        // Create service worker content
        const swContent = `
const CACHE_NAME = 'merata-menu-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style_enhanced.css',
    '/script_enhanced.js',
    '/advanced_features.js',
    '/pwa_features.js',
    '/payment_integration_new.js',
    '/images/merata_logo.png'
];

// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Background sync
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Handle background sync tasks
    return Promise.resolve();
}

// Push notification
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'إشعار جديد من مطعم ميراتا',
        icon: '/images/merata_logo.png',
        badge: '/images/merata_logo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'عرض المنيو',
                icon: '/images/menu-icon.png'
            },
            {
                action: 'close',
                title: 'إغلاق',
                icon: '/images/close-icon.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('مطعم ميراتا', options)
    );
});

// Notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
        `;
        
        // Create service worker file
        const swBlob = new Blob([swContent], { type: 'application/javascript' });
        const swUrl = URL.createObjectURL(swBlob);
        
        const registration = await navigator.serviceWorker.register(swUrl);
        console.log('Service Worker registered successfully:', registration);
        
        // Setup update detection
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    showUpdateAvailable();
                }
            });
        });
        
    } catch (error) {
        console.log('Service Worker registration failed:', error);
    }
}

// Setup install prompt
function setupInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });
    
    window.addEventListener('appinstalled', () => {
        hideInstallButton();
        showNotification('تم تثبيت التطبيق بنجاح!');
    });
    
    // Show install button
    function showInstallButton() {
        const installButton = document.createElement('button');
        installButton.className = 'install-app-btn';
        installButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            تثبيت التطبيق
        `;
        
        installButton.onclick = async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
                hideInstallButton();
            }
        };
        
        const style = document.createElement('style');
        style.textContent = `
            .install-app-btn {
                position: fixed;
                bottom: 270px;
                left: 30px;
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                border: none;
                padding: 12px 16px;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Cairo', sans-serif;
                font-size: 0.9rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                z-index: 1001;
                transition: all 0.3s ease;
                animation: slideInFromLeft 0.5s ease-out;
            }
            
            .install-app-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            }
            
            @media (max-width: 768px) {
                .install-app-btn {
                    bottom: 200px;
                    left: 20px;
                    padding: 10px 14px;
                    font-size: 0.8rem;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(installButton);
    }
    
    function hideInstallButton() {
        const installButton = document.querySelector('.install-app-btn');
        if (installButton) {
            installButton.remove();
        }
    }
}

// Setup install banner
function setupInstallBanner() {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return; // App is already installed
    }
    
    // Show install banner after some time
    setTimeout(() => {
        if (!localStorage.getItem('installBannerDismissed')) {
            showInstallBanner();
        }
    }, 10000); // Show after 10 seconds
}

// Show install banner
function showInstallBanner() {
    const banner = document.createElement('div');
    banner.className = 'install-banner';
    banner.innerHTML = `
        <div class="install-banner-content">
            <div class="install-banner-text">
                <h4>تثبيت تطبيق مطعم ميراتا</h4>
                <p>احصل على تجربة أفضل مع التطبيق المثبت</p>
            </div>
            <div class="install-banner-actions">
                <button onclick="dismissInstallBanner()" class="dismiss-btn">لاحقاً</button>
                <button onclick="triggerInstall()" class="install-btn">تثبيت</button>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .install-banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #FF6B35, #F7931E);
            color: white;
            padding: 15px 20px;
            z-index: 1006;
            animation: slideInFromTop 0.5s ease-out;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .install-banner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .install-banner-text h4 {
            margin: 0 0 5px 0;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .install-banner-text p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .install-banner-actions {
            display: flex;
            gap: 10px;
        }
        
        .install-banner-actions button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .dismiss-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }
        
        .dismiss-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        
        .install-btn {
            background: white;
            color: #FF6B35;
        }
        
        .install-btn:hover {
            background: #f0f0f0;
        }
        
        @keyframes slideInFromTop {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .install-banner-content {
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
            
            .install-banner-text h4 {
                font-size: 1rem;
            }
            
            .install-banner-text p {
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(banner);
    
    // Adjust body padding to account for banner
    document.body.style.paddingTop = '80px';
}

// Dismiss install banner
function dismissInstallBanner() {
    const banner = document.querySelector('.install-banner');
    if (banner) {
        banner.style.animation = 'slideInFromTop 0.3s ease-out reverse';
        setTimeout(() => {
            banner.remove();
            document.body.style.paddingTop = '0';
        }, 300);
    }
    localStorage.setItem('installBannerDismissed', 'true');
}

// Trigger install
function triggerInstall() {
    const installButton = document.querySelector('.install-app-btn');
    if (installButton) {
        installButton.click();
    }
    dismissInstallBanner();
}

// Setup push notifications
function setupPushNotifications() {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
        return;
    }
    
    // Add notification permission button
    const notificationButton = document.createElement('button');
    notificationButton.className = 'notification-permission-btn';
    notificationButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        تفعيل الإشعارات
    `;
    
    notificationButton.onclick = requestNotificationPermission;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification-permission-btn {
            position: fixed;
            bottom: 350px;
            left: 30px;
            background: linear-gradient(135deg, #9B59B6, #8E44AD);
            color: white;
            border: none;
            padding: 12px 16px;
            border-radius: 25px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            z-index: 1001;
            transition: all 0.3s ease;
            animation: slideInFromLeft 0.5s ease-out;
        }
        
        .notification-permission-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .notification-permission-btn.hidden {
            display: none;
        }
        
        @media (max-width: 768px) {
            .notification-permission-btn {
                bottom: 280px;
                left: 20px;
                padding: 10px 14px;
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Only show if permission not granted
    if (Notification.permission === 'default') {
        document.body.appendChild(notificationButton);
    }
}

// Request notification permission
async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            showNotification('تم تفعيل الإشعارات بنجاح!');
            
            // Hide permission button
            const button = document.querySelector('.notification-permission-btn');
            if (button) {
                button.classList.add('hidden');
            }
            
            // Send welcome notification
            setTimeout(() => {
                new Notification('مرحباً بك في مطعم ميراتا!', {
                    body: 'ستصلك إشعارات بالعروض والأطباق الجديدة',
                    icon: './images/merata_logo.png',
                    badge: './images/merata_logo.png'
                });
            }, 1000);
            
        } else {
            showNotification('لم يتم تفعيل الإشعارات', 'warning');
        }
    } catch (error) {
        console.error('Error requesting notification permission:', error);
    }
}

// Setup offline indicator
function setupOfflineIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'offline-indicator';
    indicator.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </svg>
        غير متصل بالإنترنت
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .offline-indicator {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #E74C3C;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            display: none;
            align-items: center;
            gap: 8px;
            font-family: 'Cairo', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 1007;
            animation: slideInFromTop 0.3s ease-out;
        }
        
        .offline-indicator.show {
            display: flex;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(indicator);
    
    // Update indicator based on connection status
    function updateConnectionStatus() {
        if (navigator.onLine) {
            indicator.classList.remove('show');
        } else {
            indicator.classList.add('show');
        }
    }
    
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
    updateConnectionStatus();
}

// Setup network detection
function setupNetworkDetection() {
    // Monitor connection quality
    if ('connection' in navigator) {
        const connection = navigator.connection;
        
        function updateConnectionInfo() {
            const effectiveType = connection.effectiveType;
            if (effectiveType === 'slow-2g' || effectiveType === '2g') {
                showNotification('اتصال إنترنت بطيء - قد تستغرق الصور وقتاً أطول للتحميل', 'warning');
            }
        }
        
        connection.addEventListener('change', updateConnectionInfo);
        updateConnectionInfo();
    }
}

// Setup background sync
function setupBackgroundSync() {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
        // Register background sync for cart data
        navigator.serviceWorker.ready.then(registration => {
            return registration.sync.register('background-sync');
        }).catch(err => {
            console.log('Background sync registration failed:', err);
        });
    }
}

// Show update available notification
function showUpdateAvailable() {
    const updateBanner = document.createElement('div');
    updateBanner.className = 'update-banner';
    updateBanner.innerHTML = `
        <div class="update-banner-content">
            <div class="update-banner-text">
                <h4>تحديث متاح</h4>
                <p>يتوفر إصدار جديد من التطبيق</p>
            </div>
            <div class="update-banner-actions">
                <button onclick="dismissUpdateBanner()" class="dismiss-btn">لاحقاً</button>
                <button onclick="applyUpdate()" class="update-btn">تحديث</button>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .update-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #3498DB, #2980B9);
            color: white;
            padding: 15px 20px;
            z-index: 1006;
            animation: slideInFromBottom 0.5s ease-out;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .update-banner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        @keyframes slideInFromBottom {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(updateBanner);
}

// Dismiss update banner
function dismissUpdateBanner() {
    const banner = document.querySelector('.update-banner');
    if (banner) {
        banner.style.animation = 'slideInFromBottom 0.3s ease-out reverse';
        setTimeout(() => banner.remove(), 300);
    }
}

// Apply update
function applyUpdate() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ action: 'skipWaiting' });
                window.location.reload();
            }
        });
    }
    dismissUpdateBanner();
}

// Create web app manifest
function createManifest() {
    const manifest = {
        name: PWA_CONFIG.name,
        short_name: PWA_CONFIG.shortName,
        description: PWA_CONFIG.description,
        start_url: PWA_CONFIG.startUrl,
        scope: PWA_CONFIG.scope,
        display: PWA_CONFIG.display,
        orientation: PWA_CONFIG.orientation,
        theme_color: PWA_CONFIG.themeColor,
        background_color: PWA_CONFIG.backgroundColor,
        icons: [
            {
                src: './images/merata_logo.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable'
            },
            {
                src: './images/merata_logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
            }
        ],
        categories: ['food', 'restaurant', 'business'],
        lang: 'ar',
        dir: 'rtl'
    };
    
    const manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], {
        type: 'application/json'
    });
    const manifestUrl = URL.createObjectURL(manifestBlob);
    
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = manifestUrl;
    document.head.appendChild(link);
}

// Export functions for global use
window.dismissInstallBanner = dismissInstallBanner;
window.triggerInstall = triggerInstall;
window.dismissUpdateBanner = dismissUpdateBanner;
window.applyUpdate = applyUpdate;

