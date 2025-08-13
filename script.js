        // Menu data from JSON file
        const menuData = {
            "الشوربات": [
                { "arabic_name": "شوربة ميراتا", "english_name": "Merata Soup", "price_sar": 18, "image": "./images/1000034412.jpg" },
                { "arabic_name": "شوربة عدس", "english_name": "Lentil Soup", "price_sar": 16, "image": "./images/1000034413.jpg" },
                { "arabic_name": "شوربة هوتشور", "english_name": "Hotchure Soup", "price_sar": 16, "image": "./images/1000034415.jpg" },
                { "arabic_name": "شوربة كريمة بالدجاج", "english_name": "Chicken Cream Soup", "price_sar": 16, "image": "./images/1000034416.jpg" },
                { "arabic_name": "وجبة أطفال", "english_name": "Children's Meal", "description_en": "Rice, vegetables, chicken kebab, shish tawouk, potato, juice", "price_sar": 27, "image": "./images/1000034417.jpg" }
            ],
            "المقبلات": [
                { "arabic_name": "ورق عنب", "english_name": "Grape Leave", "price_sar": 14, "image": "./images/1000034418.jpg" },
                { "arabic_name": "حمص", "english_name": "Hummus", "price_sar": 11, "image": "./images/1000034420.jpg" },
                { "arabic_name": "متبل", "english_name": "Mutabal", "price_sar": 11, "image": "./images/1000034421.jpg" },
                { "arabic_name": "تبولة", "english_name": "Taboulah", "price_sar": 14, "image": "./images/1000034422.jpg" },
                { "arabic_name": "سلطة خضراء", "english_name": "Green Salad", "price_sar": 11, "image": "./images/1000034423.jpg" },
                { "arabic_name": "مشكل ميراتا", "english_name": "Mix Merata", "price_sar": 23, "image": "./images/1000034426.jpg" },
                { "arabic_name": "سلطة سيزر", "english_name": "Ceasar Salad", "price_sar": 25, "image": "./images/1000034427.jpg" },
                { "arabic_name": "سلطة رايتا", "english_name": "Raita salad", "price_sar": 12, "image": "./images/1000035949.jpg" },
                { "arabic_name": "بطاطس مقلية", "english_name": "French Fries", "price_sar": 10, "image": "./images/1000035954.jpg" },
                { "arabic_name": "سبرينغ رول", "english_name": "Spring Roll", "price_sar": 17, "image": "./images/1000035955.jpg" },
                { "arabic_name": "كبة", "english_name": "Kibbeh", "price_sar": 16, "image": "./images/1000035959.jpg" },
                { "arabic_name": "فتوش", "english_name": "Fatosh", "price_sar": 15, "image": "./images/1000037253.jpg" },
                { "arabic_name": "سلطة روسية", "english_name": "Russain salad", "price_sar": 21, "image": "./images/1000037255.jpg" },
                { "arabic_name": "مشكل مقبلات ساخن", "english_name": "Mix Hot Appetizers", "price_sar": 25, "image": "./images/1000037257.jpg" },
                { "arabic_name": "سمبوسة", "english_name": "Samosas", "description_en": "Chicken, cheese, vegetables", "price_sar": 16, "image": "./images/1000034412.jpg" }
            ],
            "البرياني الهندي": [
                { "arabic_name": "أرز برياني سادة", "english_name": "Plain Biriyani", "price_sar": 16, "image": "./images/1000034413.jpg" },
                { "arabic_name": "برياني خضار", "english_name": "Vegetable Biriyani", "price_sar": 23, "image": "./images/1000034415.jpg" },
                { "arabic_name": "برياني دجاج", "english_name": "Chicken Biriyani", "price_sar": 33, "image": "./images/1000034416.jpg" },
                { "arabic_name": "برياني لحم", "english_name": "Mutton Biriyani", "price_sar": 37, "image": "./images/1000034417.jpg" },
                { "arabic_name": "برياني سمك", "english_name": "Fish Biriyani", "price_sar": 39, "image": "./images/1000034418.jpg" },
                { "arabic_name": "برياني روبيان", "english_name": "Prawn Biriyani", "price_sar": 39, "image": "./images/1000034420.jpg" }
            ],
            "مسالا دجاج": [
                { "arabic_name": "دجاج جالفريزي", "english_name": "Chicken Jalfrazi", "price_sar": 34, "image": "./images/1000034421.jpg" },
                { "arabic_name": "دجاج بالزعفران", "english_name": "Chicken Zafrani", "price_sar": 45, "image": "./images/1000034422.jpg" },
                { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achari", "price_sar": 34, "image": "./images/1000034423.jpg" },
                { "arabic_name": "دجاج بالكاري", "english_name": "Chicken Curry", "price_sar": 40, "image": "./images/1000034426.jpg" },
                { "arabic_name": "مرغ مكاني", "english_name": "Butter Chicken", "price_sar": 42, "image": "./images/1000034427.jpg" },
                { "arabic_name": "دجاج كاداي", "english_name": "Kadai Chicken", "price_sar": 40, "image": "./images/1000035949.jpg" },
                { "arabic_name": "دجاج بالفلفل", "english_name": "Chicken Mirchi", "price_sar": 34, "image": "./images/1000035954.jpg" },
                { "arabic_name": "دجاج ميراتا", "english_name": "Chicken Merata", "price_sar": 38, "image": "./images/1000035955.jpg" },
                { "arabic_name": "دجاج 65", "english_name": "Chicken 65", "price_sar": 34, "image": "./images/1000035959.jpg" },
                { "arabic_name": "دجاج كورما", "english_name": "Chicken Korma", "price_sar": 34, "image": "./images/1000037253.jpg" },
                { "arabic_name": "دجاج تكا مسالا", "english_name": "Chicken Tikka Masala", "price_sar": 42, "image": "./images/1000037255.jpg" },
                { "arabic_name": "دجاج مانجوري", "english_name": "Chicken Manjuri", "price_sar": 41, "image": "./images/1000037257.jpg" },
                { "arabic_name": "دجاج ادراكي", "english_name": "Chicken Adraki", "price_sar": 39, "image": "./images/1000034412.jpg" },
                { "arabic_name": "لولي بوب", "english_name": "Chicken Lollipop", "price_sar": 38, "image": "./images/1000034413.jpg" },
                { "arabic_name": "دجاج سيزلر", "english_name": "Sezlar Chicken", "price_sar": 39, "image": "./images/1000034415.jpg" }
            ],
            "مسالا خضروات": [
                { "arabic_name": "كولابوري الخضار", "english_name": "Vegetable Kolhapuri", "price_sar": 32, "image": "./images/1000034416.jpg" },
                { "arabic_name": "خضروات مشكلة بالكاري", "english_name": "Mix Vegetable Curry", "price_sar": 29, "image": "./images/1000034417.jpg" },
                { "arabic_name": "ألو دوم كاري", "english_name": "Aloo Dum Curry", "price_sar": 29, "image": "./images/1000034418.jpg" },
                { "arabic_name": "منجوري خضار", "english_name": "Vegtable Mangory", "price_sar": 29, "image": "./images/1000034420.jpg" },
                { "arabic_name": "بطاطس حارة", "english_name": "Spice Potatos", "price_sar": 16, "image": "./images/1000034421.jpg" }
            ],
            "مسالا لحم": [
                { "arabic_name": "لحم جالفريزي", "english_name": "Mutton Jalfrazi", "price_sar": 38, "image": "./images/1000034422.jpg" },
                { "arabic_name": "لحم بالزعفران", "english_name": "Mutton Zafrani", "price_sar": 45, "image": "./images/1000034423.jpg" },
                { "arabic_name": "لحم أشاري", "english_name": "Mutton Achari", "price_sar": 38, "image": "./images/1000034426.jpg" },
                { "arabic_name": "لحم كاري بالعظم", "english_name": "Mutton Curry", "price_sar": 44, "image": "./images/1000034427.jpg" },
                { "arabic_name": "لحم كاداي", "english_name": "Kadai Mutton", "price_sar": 38, "image": "./images/1000035949.jpg" },
                { "arabic_name": "لحم بالفلفل", "english_name": "Mutton MIRCHI", "price_sar": 38, "image": "./images/1000035954.jpg" },
                { "arabic_name": "لحم ميراتا", "english_name": "Mutton MERATA", "price_sar": 39, "image": "./images/1000035955.jpg" }
            ],
            "مسالا بحريات": [
                { "arabic_name": "سمك هونج كونج", "english_name": "Hong Kong Fish", "price_sar": 41, "image": "./images/1000035959.jpg" },
                { "arabic_name": "سمك بنجابي", "english_name": "FISH PNJABY", "price_sar": 42, "image": "./images/1000037253.jpg" },
                { "arabic_name": "سمك أبولو", "english_name": "Fish APOLLO", "price_sar": 41, "image": "./images/1000037255.jpg" },
                { "arabic_name": "سمك بالزبدة والثوم", "english_name": "Fish Garlic & Butter", "price_sar": 41, "image": "./images/1000037257.jpg" },
                { "arabic_name": "جمبري بالفلفل", "english_name": "Prawns Mirchi", "price_sar": 42, "image": "./images/1000034412.jpg" },
                { "arabic_name": "جمبري ميراتا", "english_name": "Prawns Merata", "price_sar": 45, "image": "./images/1000034413.jpg" },
                { "arabic_name": "جمبري جالفريزي", "english_name": "Prawn Jalfrezi", "price_sar": 42, "image": "./images/1000034415.jpg" },
                { "arabic_name": "سمك كاري", "english_name": "Fish Curry", "price_sar": 45, "image": "./images/1000034416.jpg" },
                { "arabic_name": "سمك مسالا", "english_name": "Fish Masala", "price_sar": 41, "image": "./images/1000034417.jpg" },
                { "arabic_name": "سمك كورما", "english_name": "Fish Korma", "price_sar": 41, "image": "./images/1000034418.jpg" },
                { "arabic_name": "سمك كادي", "english_name": "Fish Kadai", "price_sar": 42, "image": "./images/1000034420.jpg" },
                { "arabic_name": "جمبري كاري", "english_name": "Prawns Curry", "price_sar": 45, "image": "./images/1000034421.jpg" },
                { "arabic_name": "جمبري مسالا", "english_name": "Prawns Masala", "price_sar": 41, "image": "./images/1000034422.jpg" },
                { "arabic_name": "جمبري كورما", "english_name": "Prawns Korma", "price_sar": 41, "image": "./images/1000034423.jpg" },
                { "arabic_name": "جمبري كادي", "english_name": "Prawns Kadai", "price_sar": 42, "image": "./images/1000034426.jpg" }
            ],
            "مشويات التندوري": [
                { "arabic_name": "مشكل مشوي (كبير)", "english_name": "Mixed Grilled \"large\"", "price_sar": 80, "image": "./images/1000034427.jpg" },
                { "arabic_name": "مشكل مشوي (وسط)", "english_name": "Mixed Grilled \"medium\"", "price_sar": 55, "image": "./images/1000035949.jpg" },
                { "arabic_name": "دجاج بالثوم", "english_name": "Chicken Garlic Kabab", "price_sar": 34, "image": "./images/1000035954.jpg" },
                { "arabic_name": "كباب لحم", "english_name": "Mutton Seek Kabab", "price_sar": 37, "image": "./images/1000035955.jpg" },
                { "arabic_name": "لحم شبنامي", "english_name": "Mutton Shabnami", "price_sar": 41, "image": "./images/1000035959.jpg" },
                { "arabic_name": "سمك تكا", "english_name": "Fish Tikka", "price_sar": 44, "image": "./images/1000037253.jpg" },
                { "arabic_name": "روبيان تندوري", "english_name": "Prawns Tandoori", "price_sar": 44, "image": "./images/1000037255.jpg" },
                { "arabic_name": "دجاج تكا", "english_name": "Chicken Tikka", "price_sar": 34, "image": "./images/1000037257.jpg" },
                { "arabic_name": "دجاج رشمي", "english_name": "Chicken Reshmi", "price_sar": 34, "image": "./images/1000034412.jpg" },
                { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achri", "price_sar": 34, "image": "./images/1000034413.jpg" },
                { "arabic_name": "كباب سيخ دجاج", "english_name": "Chicken Seek Kabab", "price_sar": 34, "image": "./images/1000034415.jpg" },
                { "arabic_name": "روبيان تكا", "english_name": "PRAWNS TIKKA", "price_sar": 44, "image": "./images/1000034416.jpg" },
                { "arabic_name": "جريلد تشيكن", "english_name": "Grilled Chicken", "price_sar": 29, "image": "./images/1000034417.jpg" }
            ],
            "المطبخ الصيني": [
                { "arabic_name": "أرز مقلي شيزوان", "english_name": "Schezwan fried rice", "price_sar": 38, "image": "./images/1000034418.jpg" },
                { "arabic_name": "أرز مقلي سنغافوري", "english_name": "Singapore fried rice", "price_sar": 40, "image": "./images/1000034420.jpg" },
                { "arabic_name": "أرز مقلي بالخضروات", "english_name": "Vegetable fried rice", "price_sar": 33, "image": "./images/1000034421.jpg" },
                { "arabic_name": "أرز مقلي بالدجاج", "english_name": "Chicken fried rice", "price_sar": 38, "image": "./images/1000034422.jpg" },
                { "arabic_name": "أرز مقلي بالروبيان", "english_name": "Prawn fried rice", "price_sar": 42, "image": "./images/1000034423.jpg" },
                { "arabic_name": "نودلز سنغافورة", "english_name": "Singapore noodles", "price_sar": 38, "image": "./images/1000034426.jpg" },
                { "arabic_name": "نودلز الخضروات", "english_name": "Vegetable noodles", "price_sar": 34, "image": "./images/1000034427.jpg" },
                { "arabic_name": "نودلز الدجاج", "english_name": "Chicken noodles", "price_sar": 38, "image": "./images/1000035949.jpg" },
                { "arabic_name": "مومو لحم", "english_name": "Momo Meat", "price_sar": 25, "image": "./images/1000035954.jpg" },
                { "arabic_name": "مومو دجاج", "english_name": "Momo Chicken", "price_sar": 23, "image": "./images/1000035955.jpg" },
                { "arabic_name": "نودلز الروبيان", "english_name": "Prawn noodles", "price_sar": 45, "image": "./images/1000035959.jpg" },
                { "arabic_name": "نودلز السمك", "english_name": "Fish noodles", "price_sar": 42, "image": "./images/1000037253.jpg" },
                { "arabic_name": "دجاج ديناميت", "english_name": "Dynamit Chicken", "price_sar": 42, "image": "./images/1000037255.jpg" },
                { "arabic_name": "دجاج شيلي", "english_name": "Chilly chicken", "price_sar": 35, "image": "./images/1000037257.jpg" },
                { "arabic_name": "لحم شيلي", "english_name": "Chilly mutton", "price_sar": 37, "image": "./images/1000034412.jpg" },
                { "arabic_name": "سمك شيلي", "english_name": "Chilly fish", "price_sar": 40, "image": "./images/1000034413.jpg" },
                { "arabic_name": "روبيان شيلي", "english_name": "Chilly prawn", "price_sar": 40, "image": "./images/1000034415.jpg" },
                { "arabic_name": "روبيان ديناميت", "english_name": "Dynamite Shrimp", "price_sar": 41, "image": "./images/1000034416.jpg" }
            ],
            "خبز هندي": [
                { "arabic_name": "خبز مشكل", "english_name": "Mix bread", "price_sar": 7, "image": "./images/1000034417.jpg" },
                { "arabic_name": "خبز نان", "english_name": "Naan bread", "price_sar": 1, "image": "./images/1000034418.jpg" },
                { "arabic_name": "خبز جارلك نان", "english_name": "Garlic naan bread", "price_sar": 2, "image": "./images/1000034420.jpg" },
                { "arabic_name": "خبز تشيزنان", "english_name": "Cheese bread", "price_sar": 3, "image": "./images/1000034421.jpg" },
                { "arabic_name": "خبز كيمانان", "english_name": "Kema nan bread", "price_sar": 6, "image": "./images/1000034422.jpg" },
                { "arabic_name": "خبز بترنان", "english_name": "Butter naan bread", "price_sar": 2, "image": "./images/1000034423.jpg" }
            ],
            "عصيرات": [
                { "arabic_name": "برتقال", "english_name": "Orange", "price_sar": 14, "image": "./images/1000034426.jpg" },
                { "arabic_name": "ليمون نعناع", "english_name": "Lemon Mint", "price_sar": 15, "image": "./images/1000034427.jpg" },
                { "arabic_name": "ليمون", "english_name": "Lemon", "price_sar": 14, "image": "./images/1000035949.jpg" },
                { "arabic_name": "فراولة", "english_name": "Strawberry", "price_sar": 14, "image": "./images/1000035954.jpg" },
                { "arabic_name": "مانجو", "english_name": "Mango", "price_sar": 14, "image": "./images/1000035955.jpg" },
                { "arabic_name": "كوكتيل", "english_name": "Cocktail", "price_sar": 15, "image": "./images/1000035959.jpg" },
                { "arabic_name": "كوكتيل طبقات", "english_name": "Cocktail Layers", "price_sar": 15, "image": "./images/1000037253.jpg" },
                { "arabic_name": "كأس شراب سعودي", "english_name": "Saudi Drink Cup", "price_sar": 13, "image": "./images/1000037255.jpg" },
                { "arabic_name": "شراب سعودي وسط", "english_name": "Saudi Drink Medium", "price_sar": 23, "image": "./images/1000037257.jpg" },
                { "arabic_name": "شراب سعودي كبير", "english_name": "Saudi Drink Large", "price_sar": 35, "image": "./images/1000034412.jpg" },
                { "arabic_name": "بيبسي", "english_name": "PEPSI", "price_sar": 3, "image": "./images/1000034413.jpg" },
                { "arabic_name": "سفن أب", "english_name": "Seven UP", "price_sar": 3, "image": "./images/1000034415.jpg" },
                { "arabic_name": "حمضيات", "english_name": "Citrus", "price_sar": 3, "image": "./images/1000034416.jpg" },
                { "arabic_name": "مياة", "english_name": "Water", "price_sar": 1, "image": "./images/1000034417.jpg" }
            ]
        };

        // Language translations
        const translations = {
            ar: {
                title: "مطعم ميراتا",
                subtitle: "تجربة طعام استثنائية مع أفضل الأطباق العربية والعالمية",
                qrText: "امسح الكود للطلب السريع",
                langButton: "English",
                allCategories: "جميع الأصناف",
                cartTitle: "سلة التسوق",
                emptyCart: "السلة فارغة",
                pickupMethod: "طريقة الاستلام:",
                fromBranch: "من الفرع",
                localDining: "محلي (داخل الفرع)",
                orderNotes: "ملاحظات على الطلب:",
                notesPlaceholder: "أضف أي ملاحظات خاصة بطلبك...",
                total: "المجموع:",
                completeOrder: "إتمام الطلب",
                addToCart: "إضافة للسلة",
                removeItem: "حذف",
                successMessage: "تم إضافة العنصر إلى السلة!",
                sar: "ريال",
                confirmClearCartTitle: "تأكيد حذف السلة",
                confirmClearCartMessage: "هل أنت متأكد من حذف جميع الأصناف من السلة؟",
                confirmClearCartSubMessage: "لا يمكن التراجع عن هذا الإجراء!",
                confirmButton: "تأكيد الحذف",
                cancelButton: "إلغاء"
            },
            en: {
                title: "Merata Restaurant",
                subtitle: "An exceptional dining experience with the finest Arabic and international dishes",
                qrText: "Scan for quick order",
                langButton: "العربية",
                allCategories: "All Categories",
                cartTitle: "Shopping Cart",
                emptyCart: "Cart is empty",
                pickupMethod: "Pickup Method:",
                fromBranch: "From Branch",
                localDining: "Dine In",
                orderNotes: "Order Notes:",
                notesPlaceholder: "Add any special notes for your order...",
                total: "Total:",
                completeOrder: "Complete Order",
                addToCart: "Add to Cart",
                removeItem: "Delete",
                successMessage: "Item added to cart!",
                sar: "SAR",
                confirmClearCartTitle: "Confirm Cart Deletion",
                confirmClearCartMessage: "Are you sure you want to remove all items from the cart?",
                confirmClearCartSubMessage: "This action cannot be undone!",
                confirmButton: "Confirm Delete",
                cancelButton: "Cancel"
            }
        };

        // Current language
        let currentLang = 'ar';

        // Cart functionality
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderMenu();
            updateCartDisplay();
            updateStaticTexts(); // Call to update static texts on load
        });

        // Language toggle function
        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            // Update HTML attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            // Update static text elements
            updateStaticTexts();
            
            // Re-render menu with new language
            renderMenu();
            
            // Update cart display
            updateCartDisplay();
        }

        // Update static text elements
        function updateStaticTexts() {
            const t = translations[currentLang];
            
            // Update header
            document.querySelector('.header h1').textContent = t.title;
            document.querySelector('.header p').textContent = t.subtitle;
            // document.querySelector('.qr-text').textContent = t.qrText; // QR section removed
            
            // Update language button (if exists)
            const langButton = document.querySelector('.lang-switcher button');
            if (langButton) {
                langButton.textContent = t.langButton;
            }
            
            // Update cart modal
            document.querySelector('.cart-modal-header h2').textContent = t.cartTitle;
            document.querySelector('.empty-cart p').textContent = t.emptyCart;
            document.querySelector('.pickup-options > label').textContent = t.pickupMethod;
            document.querySelector('label[for="pickup-branch"]').textContent = t.fromBranch;
            document.querySelector('label[for="pickup-local"]').textContent = t.localDining;
            document.querySelector('.notes-section label').textContent = t.orderNotes;
            document.getElementById('order-notes').placeholder = t.notesPlaceholder;
            document.getElementById('total-label').textContent = t.total;
            document.getElementById('currency-label').textContent = t.sar;
            document.getElementById('checkout-btn').textContent = t.completeOrder;
            document.getElementById('success-message').textContent = t.successMessage;

            // Update confirmation modal texts
            document.getElementById('confirmation-title').textContent = t.confirmClearCartTitle;
            document.getElementById('confirmation-message').textContent = t.confirmClearCartMessage;
            document.getElementById('confirmation-sub-message').textContent = t.confirmClearCartSubMessage;
            document.getElementById('confirm-delete-btn').textContent = t.confirmButton;
            document.getElementById('cancel-delete-btn').textContent = t.cancelButton;

            // Update category buttons
            document.querySelector('.category-btn.active').textContent = t.allCategories;
            // You might need to iterate through all category buttons if their text changes with language
            // For now, assuming only 'all categories' changes or is handled by the filterCategory function
        }

        // Render menu items
        function renderMenu() {
            const menuContainer = document.getElementById('menu-container');
            menuContainer.innerHTML = ''; // Clear existing menu items

            for (const category in menuData) {
                const section = document.createElement('div');
                section.className = 'menu-section';
                section.id = category.replace(/\s/g, '-') + '-section'; // Create a valid ID
                section.setAttribute('data-category', category); // Add data-category attribute

                const sectionTitleContainer = document.createElement('div');
                sectionTitleContainer.className = 'section-title-container';
                const title = document.createElement('h2');
                title.textContent = category;
                sectionTitleContainer.appendChild(title);
                section.appendChild(sectionTitleContainer);

                const grid = document.createElement('div');
                grid.className = 'menu-grid';

                menuData[category].forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'menu-item';

                    // Item Image
                    if (item.image) {
                        const itemImageDiv = document.createElement('div');
                        itemImageDiv.className = 'item-image';
                        const img = document.createElement('img');
                        img.src = item.image;
                        img.alt = item.arabic_name;
                        itemImageDiv.appendChild(img);
                        itemDiv.appendChild(itemImageDiv);
                    }

                    const itemContent = document.createElement('div');
                    itemContent.className = 'item-content';

                    const itemHeader = document.createElement('div');
                    itemHeader.className = 'item-header';

                    const itemName = document.createElement('h3');
                    itemName.textContent = item.arabic_name;
                    itemHeader.appendChild(itemName);

                    const itemPrice = document.createElement('span');
                    itemPrice.className = 'item-price';
                    itemPrice.textContent = `${item.price_sar} ${translations[currentLang].sar}`;
                    itemHeader.appendChild(itemPrice);

                    itemContent.appendChild(itemHeader);

                    const itemDescription = document.createElement('p');
                    itemDescription.className = 'item-description';
                    itemDescription.textContent = item.description_ar || item.description_en || ''; // Use description if available
                    itemContent.appendChild(itemDescription);

                    const addToCartBtn = document.createElement('button');
                    addToCartBtn.className = 'add-to-cart-btn';
                    addToCartBtn.textContent = translations[currentLang].addToCart;
                    addToCartBtn.onclick = () => addToCart(item);
                    itemContent.appendChild(addToCartBtn);

                    itemDiv.appendChild(itemContent);
                    grid.appendChild(itemDiv);
                });

                section.appendChild(grid);
                menuContainer.appendChild(section);
            }
        }

        // Filter menu items by category
        function filterCategory(category) {
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(btn => {
                if (btn.onclick.toString().includes(`filterCategory('${category}')`)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            const menuSections = document.querySelectorAll('.menu-section');
            menuSections.forEach(section => {
                if (category === 'all' || section.getAttribute('data-category') === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }

        // Add item to cart
        function addToCart(item) {
            const existingItemIndex = cart.findIndex(cartItem => cartItem.arabic_name === item.arabic_name);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            showSuccessMessage();
        }

        // Update cart display
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCountSpan = document.getElementById('cart-count');
            const emptyCartDiv = document.querySelector('.empty-cart');
            const cartTotalDiv = document.getElementById('cart-total');
            const checkoutBtn = document.getElementById('checkout-btn');
            const totalAmountSpan = document.getElementById('total-amount');

            cartItemsContainer.innerHTML = ''; // Clear existing items

            if (cart.length === 0) {
                if (emptyCartDiv) emptyCartDiv.style.display = 'block';
                if (cartTotalDiv) cartTotalDiv.style.display = 'none';
                if (checkoutBtn) checkoutBtn.style.display = 'none';
            } else {
                if (emptyCartDiv) emptyCartDiv.style.display = 'none';
                if (cartTotalDiv) cartTotalDiv.style.display = 'flex';
                if (checkoutBtn) checkoutBtn.style.display = 'block';

                let total = 0;
                cart.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'cart-item';
                    itemDiv.innerHTML = `
                        <div class="cart-item-info">
                            <span class="cart-item-name">${item.arabic_name || 'غير محدد'}</span>
                            <span class="cart-item-price">${item.price_sar || 0} ${translations[currentLang].sar}</span>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="changeQuantity('${item.arabic_name}', -1)">-</button>
                            <span class="quantity-display">${item.quantity || 1}</span>
                            <button class="quantity-btn" onclick="changeQuantity('${item.arabic_name}', 1)">+</button>
                            <button class="remove-item-btn" onclick="removeItem('${item.arabic_name}')">${translations[currentLang].removeItem}</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemDiv);
                    total += (item.price_sar || 0) * (item.quantity || 1);
                });
                if (totalAmountSpan) totalAmountSpan.textContent = total.toFixed(2);
            }
            if (cartCountSpan) cartCountSpan.textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        }

        // Change item quantity in cart
        function changeQuantity(itemName, delta) {
            const itemIndex = cart.findIndex(item => item.arabic_name === itemName);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += delta;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }

        // Remove item from cart
        function removeItem(itemName) {
            cart = cart.filter(item => item.arabic_name !== itemName);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }

        // Toggle cart modal
        function toggleCart() {
            document.getElementById('cart-modal').classList.toggle('active');
        }

        // Show success message
        function showSuccessMessage() {
            const successMessage = document.getElementById('success-message');
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 2000);
        }

        // WhatsApp Inquiry
        function openWhatsAppInquiry() {
            let message = `مرحباً، أود أن أطلب:
`;
            let total = 0;

            if (cart.length === 0) {
                message += "سلة التسوق فارغة.";
            } else {
                cart.forEach(item => {
                    message += `- ${item.arabic_name} (الكمية: ${item.quantity}) - ${item.price_sar * item.quantity} ${translations[currentLang].sar}\n`;
                    total += item.price_sar * item.quantity;
                });
                message += `\nالمجموع الكلي: ${total.toFixed(2)} ${translations[currentLang].sar}`;
            }

            const orderNotes = document.getElementById('order-notes').value;
            if (orderNotes) {
                message += `\nملاحظات: ${orderNotes}`;
            }

            const pickupMethod = document.querySelector('input[name="pickup-method"]:checked').value;
            message += `\nطريقة الاستلام: ${pickupMethod === 'branch' ? translations[currentLang].fromBranch : translations[currentLang].localDining}`;

            const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent(message)}`; // Replace with actual WhatsApp number
            window.open(whatsappUrl, '_blank');
        }

        // Confirmation Modal for clearing cart
        const confirmationModal = document.getElementById('confirmation-modal');
        const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
        const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
        const clearCartBtn = document.getElementById('clear-cart-btn'); // Assuming you have a button to clear all items

        // Function to show the confirmation modal
        function showConfirmationModal() {
            confirmationModal.classList.add('active');
        }

        // Function to hide the confirmation modal
        function hideConfirmationModal() {
            confirmationModal.classList.remove('active');
        }

        // Event listener for the 

