        // Menu data from JSON file
        const menuData = {
            "الشوربات": [
                { "arabic_name": "شوربة ميراتا", "english_name": "Merata Soup", "price_sar": 18 },
                { "arabic_name": "شوربة عدس", "english_name": "Lentil Soup", "price_sar": 16 },
                { "arabic_name": "شوربة هوتشور", "english_name": "Hotchure Soup", "price_sar": 16 },
                { "arabic_name": "شوربة كريمة بالدجاج", "english_name": "Chicken Cream Soup", "price_sar": 16 },
                { "arabic_name": "وجبة أطفال", "english_name": "Children's Meal", "description_en": "Rice, vegetables, chicken kebab, shish tawouk, potato, juice", "price_sar": 27 }
            ],
            "المقبلات": [
                { "arabic_name": "ورق عنب", "english_name": "Grape Leave", "price_sar": 14 },
                { "arabic_name": "حمص", "english_name": "Hummus", "price_sar": 11 },
                { "arabic_name": "متبل", "english_name": "Mutabal", "price_sar": 11 },
                { "arabic_name": "تبولة", "english_name": "Taboulah", "price_sar": 14 },
                { "arabic_name": "سلطة خضراء", "english_name": "Green Salad", "price_sar": 11 },
                { "arabic_name": "مشكل ميراتا", "english_name": "Mix Merata", "price_sar": 23 },
                { "arabic_name": "سلطة سيزر", "english_name": "Ceasar Salad", "price_sar": 25 },
                { "arabic_name": "سلطة رايتا", "english_name": "Raita salad", "price_sar": 12 },
                { "arabic_name": "بطاطس مقلية", "english_name": "French Fries", "price_sar": 10 },
                { "arabic_name": "سبرينغ رول", "english_name": "Spring Roll", "price_sar": 17 },
                { "arabic_name": "كبة", "english_name": "Kibbeh", "price_sar": 16 },
                { "arabic_name": "فتوش", "english_name": "Fatosh", "price_sar": 15 },
                { "arabic_name": "سلطة روسية", "english_name": "Russain salad", "price_sar": 21 },
                { "arabic_name": "مشكل مقبلات ساخن", "english_name": "Mix Hot Appetizers", "price_sar": 25 },
                { "arabic_name": "سمبوسة", "english_name": "Samosas", "description_en": "Chicken, cheese, vegetables", "price_sar": 16 }
            ],
            "البرياني الهندي": [
                { "arabic_name": "أرز برياني سادة", "english_name": "Plain Biriyani", "price_sar": 16 },
                { "arabic_name": "برياني خضار", "english_name": "Vegetable Biriyani", "price_sar": 23 },
                { "arabic_name": "برياني دجاج", "english_name": "Chicken Biriyani", "price_sar": 33 },
                { "arabic_name": "برياني لحم", "english_name": "Mutton Biriyani", "price_sar": 37 },
                { "arabic_name": "برياني سمك", "english_name": "Fish Biriyani", "price_sar": 39 },
                { "arabic_name": "برياني روبيان", "english_name": "Prawn Biriyani", "price_sar": 39 }
            ],
            "مسالا دجاج": [
                { "arabic_name": "دجاج جالفريزي", "english_name": "Chicken Jalfrazi", "price_sar": 34 },
                { "arabic_name": "دجاج بالزعفران", "english_name": "Chicken Zafrani", "price_sar": 45 },
                { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achari", "price_sar": 34 },
                { "arabic_name": "دجاج بالكاري", "english_name": "Chicken Curry", "price_sar": 40 },
                { "arabic_name": "مرغ مكاني", "english_name": "Butter Chicken", "price_sar": 42 },
                { "arabic_name": "دجاج كاداي", "english_name": "Kadai Chicken", "price_sar": 40 },
                { "arabic_name": "دجاج بالفلفل", "english_name": "Chicken Mirchi", "price_sar": 34 },
                { "arabic_name": "دجاج ميراتا", "english_name": "Chicken Merata", "price_sar": 38 },
                { "arabic_name": "دجاج 65", "english_name": "Chicken 65", "price_sar": 34 },
                { "arabic_name": "دجاج كورما", "english_name": "Chicken Korma", "price_sar": 34 },
                { "arabic_name": "دجاج تكا مسالا", "english_name": "Chicken Tikka Masala", "price_sar": 42 },
                { "arabic_name": "دجاج مانجوري", "english_name": "Chicken Manjuri", "price_sar": 41 },
                { "arabic_name": "دجاج ادراكي", "english_name": "Chicken Adraki", "price_sar": 39 },
                { "arabic_name": "لولي بوب", "english_name": "Chicken Lollipop", "price_sar": 38 },
                { "arabic_name": "دجاج سيزلر", "english_name": "Sezlar Chicken", "price_sar": 39 }
            ],
            "مسالا خضروات": [
                { "arabic_name": "كولابوري الخضار", "english_name": "Vegetable Kolhapuri", "price_sar": 32 },
                { "arabic_name": "خضروات مشكلة بالكاري", "english_name": "Mix Vegetable Curry", "price_sar": 29 },
                { "arabic_name": "ألو دوم كاري", "english_name": "Aloo Dum Curry", "price_sar": 29 },
                { "arabic_name": "منجوري خضار", "english_name": "Vegtable Mangory", "price_sar": 29 },
                { "arabic_name": "بطاطس حارة", "english_name": "Spice Potatos", "price_sar": 16 }
            ],
            "مسالا لحم": [
                { "arabic_name": "لحم جالفريزي", "english_name": "Mutton Jalfrazi", "price_sar": 38 },
                { "arabic_name": "لحم بالزعفران", "english_name": "Mutton Zafrani", "price_sar": 45 },
                { "arabic_name": "لحم أشاري", "english_name": "Mutton Achari", "price_sar": 38 },
                { "arabic_name": "لحم كاري بالعظم", "english_name": "Mutton Curry", "price_sar": 44 },
                { "arabic_name": "لحم كاداي", "english_name": "Kadai Mutton", "price_sar": 38 },
                { "arabic_name": "لحم بالفلفل", "english_name": "Mutton MIRCHI", "price_sar": 38 },
                { "arabic_name": "لحم ميراتا", "english_name": "Mutton MERATA", "price_sar": 39 }
            ],
            "مسالا بحريات": [
                { "arabic_name": "سمك هونج كونج", "english_name": "Hong Kong Fish", "price_sar": 41 },
                { "arabic_name": "سمك بنجابي", "english_name": "FISH PNJABY", "price_sar": 42 },
                { "arabic_name": "سمك أبولو", "english_name": "Fish APOLLO", "price_sar": 41 },
                { "arabic_name": "سمك بالزبدة والثوم", "english_name": "Fish Garlic & Butter", "price_sar": 41 },
                { "arabic_name": "جمبري بالفلفل", "english_name": "Prawns Mirchi", "price_sar": 42 },
                { "arabic_name": "جمبري ميراتا", "english_name": "Prawns Merata", "price_sar": 45 },
                { "arabic_name": "جمبري جالفريزي", "english_name": "Prawn Jalfrezi", "price_sar": 42 },
                { "arabic_name": "سمك كاري", "english_name": "Fish Curry", "price_sar": 45 },
                { "arabic_name": "سمك مسالا", "english_name": "Fish Masala", "price_sar": 41 },
                { "arabic_name": "سمك كورما", "english_name": "Fish Korma", "price_sar": 41 },
                { "arabic_name": "سمك كادي", "english_name": "Fish Kadai", "price_sar": 42 },
                { "arabic_name": "جمبري كاري", "english_name": "Prawns Curry", "price_sar": 45 },
                { "arabic_name": "جمبري مسالا", "english_name": "Prawns Masala", "price_sar": 41 },
                { "arabic_name": "جمبري كورما", "english_name": "Prawns Korma", "price_sar": 41 },
                { "arabic_name": "جمبري كادي", "english_name": "Prawns Kadai", "price_sar": 42 }
            ],
            "مشويات التندوري": [
                { "arabic_name": "مشكل مشوي (كبير)", "english_name": "Mixed Grilled \"large\"", "price_sar": 80 },
                { "arabic_name": "مشكل مشوي (وسط)", "english_name": "Mixed Grilled \"medium\"", "price_sar": 55 },
                { "arabic_name": "دجاج بالثوم", "english_name": "Chicken Garlic Kabab", "price_sar": 34 },
                { "arabic_name": "كباب لحم", "english_name": "Mutton Seek Kabab", "price_sar": 37 },
                { "arabic_name": "لحم شبنامي", "english_name": "Mutton Shabnami", "price_sar": 41 },
                { "arabic_name": "سمك تكا", "english_name": "Fish Tikka", "price_sar": 44 },
                { "arabic_name": "روبيان تندوري", "english_name": "Prawns Tandoori", "price_sar": 44 },
                { "arabic_name": "دجاج تكا", "english_name": "Chicken Tikka", "price_sar": 34 },
                { "arabic_name": "دجاج رشمي", "english_name": "Chicken Reshmi", "price_sar": 34 },
                { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achri", "price_sar": 34 },
                { "arabic_name": "كباب سيخ دجاج", "english_name": "Chicken Seek Kabab", "price_sar": 34 },
                { "arabic_name": "روبيان تكا", "english_name": "PRAWNS TIKKA", "price_sar": 44 },
                { "arabic_name": "جريلد تشيكن", "english_name": "Grilled Chicken", "price_sar": 29 }
            ],
            "المطبخ الصيني": [
                { "arabic_name": "أرز مقلي شيزوان", "english_name": "Schezwan fried rice", "price_sar": 38 },
                { "arabic_name": "أرز مقلي سنغافوري", "english_name": "Singapore fried rice", "price_sar": 40 },
                { "arabic_name": "أرز مقلي بالخضروات", "english_name": "Vegetable fried rice", "price_sar": 33 },
                { "arabic_name": "أرز مقلي بالدجاج", "english_name": "Chicken fried rice", "price_sar": 38 },
                { "arabic_name": "أرز مقلي بالروبيان", "english_name": "Prawn fried rice", "price_sar": 42 },
                { "arabic_name": "نودلز سنغافورة", "english_name": "Singapore noodles", "price_sar": 38 },
                { "arabic_name": "نودلز الخضروات", "english_name": "Vegetable noodles", "price_sar": 34 },
                { "arabic_name": "نودلز الدجاج", "english_name": "Chicken noodles", "price_sar": 38 },
                { "arabic_name": "مومو لحم", "english_name": "Momo Meat", "price_sar": 25 },
                { "arabic_name": "مومو دجاج", "english_name": "Momo Chicken", "price_sar": 23 },
                { "arabic_name": "نودلز الروبيان", "english_name": "Prawn noodles", "price_sar": 45 },
                { "arabic_name": "نودلز السمك", "english_name": "Fish noodles", "price_sar": 42 },
                { "arabic_name": "دجاج ديناميت", "english_name": "Dynamit Chicken", "price_sar": 42 },
                { "arabic_name": "دجاج شيلي", "english_name": "Chilly chicken", "price_sar": 35 },
                { "arabic_name": "لحم شيلي", "english_name": "Chilly mutton", "price_sar": 37 },
                { "arabic_name": "سمك شيلي", "english_name": "Chilly fish", "price_sar": 40 },
                { "arabic_name": "روبيان شيلي", "english_name": "Chilly prawn", "price_sar": 40 },
                { "arabic_name": "روبيان ديناميت", "english_name": "Dynamite Shrimp", "price_sar": 41 }
            ],
            "خبز هندي": [
                { "arabic_name": "خبز مشكل", "english_name": "Mix bread", "price_sar": 7 },
                { "arabic_name": "خبز نان", "english_name": "Naan bread", "price_sar": 1 },
                { "arabic_name": "خبز جارلك نان", "english_name": "Garlic naan bread", "price_sar": 2 },
                { "arabic_name": "خبز تشيزنان", "english_name": "Cheese bread", "price_sar": 3 },
                { "arabic_name": "خبز كيمانان", "english_name": "Kema nan bread", "price_sar": 6 },
                { "arabic_name": "خبز بترنان", "english_name": "Butter naan bread", "price_sar": 2 }
            ],
            "عصيرات": [
                { "arabic_name": "برتقال", "english_name": "Orange", "price_sar": 14 },
                { "arabic_name": "ليمون نعناع", "english_name": "Lemon Mint", "price_sar": 15 },
                { "arabic_name": "ليمون", "english_name": "Lemon", "price_sar": 14 },
                { "arabic_name": "فراولة", "english_name": "Strawberry", "price_sar": 14 },
                { "arabic_name": "مانجو", "english_name": "Mango", "price_sar": 14 },
                { "arabic_name": "كوكتيل", "english_name": "Cocktail", "price_sar": 15 },
                { "arabic_name": "كوكتيل طبقات", "english_name": "Cocktail Layers", "price_sar": 15 },
                { "arabic_name": "كأس شراب سعودي", "english_name": "Saudi Drink Cup", "price_sar": 13 },
                { "arabic_name": "شراب سعودي وسط", "english_name": "Saudi Drink Medium", "price_sar": 23 },
                { "arabic_name": "شراب سعودي كبير", "english_name": "Saudi Drink Large", "price_sar": 35 },
                { "arabic_name": "بيبسي", "english_name": "PEPSI", "price_sar": 3 },
                { "arabic_name": "سفن أب", "english_name": "Seven UP", "price_sar": 3 },
                { "arabic_name": "حمضيات", "english_name": "Citrus", "price_sar": 3 },
                { "arabic_name": "مياة", "english_name": "Water", "price_sar": 1 }
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
                sar: "ريال"
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
                sar: "SAR"
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
            document.querySelector('.qr-text').textContent = t.qrText;
            
            // Update language button
            document.querySelector('.lang-switcher button').textContent = t.langButton;
            
            // Update cart modal
            document.querySelector('.cart-modal-header h2').textContent = t.cartTitle;
            document.querySelector('.empty-cart p').textContent = t.emptyCart;
            document.querySelector('.pickup-options > label').textContent = t.pickupMethod;
            document.querySelector('label[for="pickup-branch"]').textContent = t.fromBranch;
            document.querySelector('label[for="pickup-local"]').t
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)