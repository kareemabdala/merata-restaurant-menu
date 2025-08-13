// Enhanced Menu Script for Merata Restaurant
// Menu data from JSON file
const menuData = {
    "الشوربات": [
        { "arabic_name": "شوربة ميراتا", "english_name": "Merata Soup", "price_sar": 18, "image": "./images/1000034412.jpg", "description_ar": "شوربة مميزة بنكهة خاصة من مطعم ميراتا" },
        { "arabic_name": "شوربة عدس", "english_name": "Lentil Soup", "price_sar": 16, "image": "./images/1000034413.jpg", "description_ar": "شوربة عدس طبيعية ومغذية" },
        { "arabic_name": "شوربة هوتشور", "english_name": "Hotchure Soup", "price_sar": 16, "image": "./images/1000034415.jpg", "description_ar": "شوربة هندية حارة ولذيذة" },
        { "arabic_name": "شوربة كريمة بالدجاج", "english_name": "Chicken Cream Soup", "price_sar": 16, "image": "./images/1000034416.jpg", "description_ar": "شوربة كريمية غنية بقطع الدجاج الطرية" },
        { "arabic_name": "وجبة أطفال", "english_name": "Children's Meal", "description_ar": "أرز، خضروات، كباب دجاج، شيش طاووق، بطاطس، عصير", "price_sar": 27, "image": "./images/1000034417.jpg" }
    ],
    "المقبلات": [
        { "arabic_name": "ورق عنب", "english_name": "Grape Leave", "price_sar": 14, "image": "./images/1000034418.jpg", "description_ar": "ورق عنب محشي بالأرز والخضروات" },
        { "arabic_name": "حمص", "english_name": "Hummus", "price_sar": 11, "image": "./images/1000034420.jpg", "description_ar": "حمص طبيعي بالطحينة وزيت الزيتون" },
        { "arabic_name": "متبل", "english_name": "Mutabal", "price_sar": 11, "image": "./images/1000034421.jpg", "description_ar": "متبل الباذنجان المشوي بالطحينة" },
        { "arabic_name": "تبولة", "english_name": "Taboulah", "price_sar": 14, "image": "./images/1000034422.jpg", "description_ar": "سلطة البقدونس الطازجة مع الطماطم والبرغل" },
        { "arabic_name": "سلطة خضراء", "english_name": "Green Salad", "price_sar": 11, "image": "./images/1000034423.jpg", "description_ar": "خضروات طازجة متنوعة" },
        { "arabic_name": "مشكل ميراتا", "english_name": "Mix Merata", "price_sar": 23, "image": "./images/1000034426.jpg", "description_ar": "تشكيلة مميزة من المقبلات الشهية" },
        { "arabic_name": "سلطة سيزر", "english_name": "Caesar Salad", "price_sar": 25, "image": "./images/1000034427.jpg", "description_ar": "سلطة سيزر الكلاسيكية مع الدجاج المشوي" },
        { "arabic_name": "سلطة رايتا", "english_name": "Raita salad", "price_sar": 12, "image": "./images/1000035949.jpg", "description_ar": "سلطة هندية منعشة باللبن والخيار" },
        { "arabic_name": "بطاطس مقلية", "english_name": "French Fries", "price_sar": 10, "image": "./images/1000035954.jpg", "description_ar": "بطاطس مقلية ذهبية ومقرمشة" },
        { "arabic_name": "سبرينغ رول", "english_name": "Spring Roll", "price_sar": 17, "image": "./images/1000035955.jpg", "description_ar": "لفائف الخضروات المقرمشة" },
        { "arabic_name": "كبة", "english_name": "Kibbeh", "price_sar": 16, "image": "./images/1000035959.jpg", "description_ar": "كبة مقلية محشوة باللحم والبصل" },
        { "arabic_name": "فتوش", "english_name": "Fatosh", "price_sar": 15, "image": "./images/1000034412.jpg", "description_ar": "سلطة الفتوش التقليدية مع الخبز المحمص" },
        { "arabic_name": "سلطة روسية", "english_name": "Russian salad", "price_sar": 21, "image": "./images/1000034413.jpg", "description_ar": "سلطة روسية بالخضروات والمايونيز" },
        { "arabic_name": "مشكل مقبلات ساخن", "english_name": "Mix Hot Appetizers", "price_sar": 25, "image": "./images/1000034415.jpg", "description_ar": "تشكيلة من المقبلات الساخنة المتنوعة" },
        { "arabic_name": "سمبوسة", "english_name": "Samosas", "description_ar": "سمبوسة محشوة بالدجاج، الجبن، أو الخضروات", "price_sar": 16, "image": "./images/1000034416.jpg" }
    ],
    "البرياني الهندي": [
        { "arabic_name": "أرز برياني سادة", "english_name": "Plain Biriyani", "price_sar": 16, "image": "./images/1000034417.jpg", "description_ar": "أرز برياني عطري بالتوابل الهندية" },
        { "arabic_name": "برياني خضار", "english_name": "Vegetable Biriyani", "price_sar": 23, "image": "./images/1000034418.jpg", "description_ar": "برياني بالخضروات المشكلة والتوابل" },
        { "arabic_name": "برياني دجاج", "english_name": "Chicken Biriyani", "price_sar": 33, "image": "./images/1000034420.jpg", "description_ar": "برياني بقطع الدجاج الطرية والأرز العطري" },
        { "arabic_name": "برياني لحم", "english_name": "Mutton Biriyani", "price_sar": 37, "image": "./images/1000034421.jpg", "description_ar": "برياني باللحم الطري والتوابل الخاصة" },
        { "arabic_name": "برياني سمك", "english_name": "Fish Biriyani", "price_sar": 39, "image": "./images/1000034422.jpg", "description_ar": "برياني بقطع السمك الطازجة" },
        { "arabic_name": "برياني روبيان", "english_name": "Prawn Biriyani", "price_sar": 39, "image": "./images/1000034423.jpg", "description_ar": "برياني بالروبيان الطازج والتوابل العطرة" }
    ],
    "مسالا دجاج": [
        { "arabic_name": "دجاج جالفريزي", "english_name": "Chicken Jalfrazi", "price_sar": 34, "image": "./images/1000034426.jpg", "description_ar": "دجاج مطبوخ مع الخضروات والتوابل الهندية" },
        { "arabic_name": "دجاج بالزعفران", "english_name": "Chicken Zafrani", "price_sar": 45, "image": "./images/1000034427.jpg", "description_ar": "دجاج فاخر بالزعفران والكريمة" },
        { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achari", "price_sar": 34, "image": "./images/1000035949.jpg", "description_ar": "دجاج بنكهة المخلل الهندي الحار" },
        { "arabic_name": "دجاج بالكاري", "english_name": "Chicken Curry", "price_sar": 40, "image": "./images/1000035954.jpg", "description_ar": "دجاج كاري تقليدي بالتوابل العطرة" },
        { "arabic_name": "مرغ مكاني", "english_name": "Butter Chicken", "price_sar": 42, "image": "./images/1000035955.jpg", "description_ar": "دجاج بالزبدة والكريمة - الطبق الأشهر" },
        { "arabic_name": "دجاج كاداي", "english_name": "Kadai Chicken", "price_sar": 40, "image": "./images/1000035959.jpg", "description_ar": "دجاج مطبوخ في مقلاة الكاداي التقليدية" },
        { "arabic_name": "دجاج بالفلفل", "english_name": "Chicken Mirchi", "price_sar": 34, "image": "./images/1000034412.jpg", "description_ar": "دجاج حار بالفلفل الأخضر" },
        { "arabic_name": "دجاج ميراتا", "english_name": "Chicken Merata", "price_sar": 38, "image": "./images/1000034413.jpg", "description_ar": "دجاج بالوصفة الخاصة لمطعم ميراتا" },
        { "arabic_name": "دجاج 65", "english_name": "Chicken 65", "price_sar": 34, "image": "./images/1000034415.jpg", "description_ar": "دجاج مقلي حار على الطريقة الهندية" },
        { "arabic_name": "دجاج كورما", "english_name": "Chicken Korma", "price_sar": 34, "image": "./images/1000034416.jpg", "description_ar": "دجاج كورما الكريمي بالمكسرات" },
        { "arabic_name": "دجاج تكا مسالا", "english_name": "Chicken Tikka Masala", "price_sar": 42, "image": "./images/1000034417.jpg", "description_ar": "دجاج تكا في صلصة المسالا الغنية" },
        { "arabic_name": "دجاج مانجوري", "english_name": "Chicken Manjuri", "price_sar": 41, "image": "./images/1000034418.jpg", "description_ar": "دجاج مانجوري الحار والمقرمش" },
        { "arabic_name": "دجاج ادراكي", "english_name": "Chicken Adraki", "price_sar": 39, "image": "./images/1000034420.jpg", "description_ar": "دجاج بالزنجبيل الطازج" },
        { "arabic_name": "لولي بوب", "english_name": "Chicken Lollipop", "price_sar": 38, "image": "./images/1000034421.jpg", "description_ar": "أجنحة دجاج على شكل مصاصة مقلية ومتبلة" },
        { "arabic_name": "دجاج سيزلر", "english_name": "Sezlar Chicken", "price_sar": 39, "image": "./images/1000034422.jpg", "description_ar": "دجاج سيزلر على الصاج الساخن" }
    ],
    "مسالا خضروات": [
        { "arabic_name": "كولابوري الخضار", "english_name": "Vegetable Kolhapuri", "price_sar": 32, "image": "./images/1000034423.jpg", "description_ar": "خضروات كولابوري الحارة والعطرة" },
        { "arabic_name": "خضروات مشكلة بالكاري", "english_name": "Mix Vegetable Curry", "price_sar": 29, "image": "./images/1000034426.jpg", "description_ar": "خضروات متنوعة بصلصة الكاري" },
        { "arabic_name": "ألو دوم كاري", "english_name": "Aloo Dum Curry", "price_sar": 29, "image": "./images/1000034427.jpg", "description_ar": "بطاطس مطبوخة بالتوابل الهندية" },
        { "arabic_name": "منجوري خضار", "english_name": "Vegetable Mangory", "price_sar": 29, "image": "./images/1000035949.jpg", "description_ar": "خضروات منجوري المقرمشة والحارة" },
        { "arabic_name": "بطاطس حارة", "english_name": "Spice Potatos", "price_sar": 16, "image": "./images/1000035954.jpg", "description_ar": "بطاطس حارة بالتوابل الهندية" }
    ],
    "مسالا لحم": [
        { "arabic_name": "لحم جالفريزي", "english_name": "Mutton Jalfrazi", "price_sar": 38, "image": "./images/1000035955.jpg", "description_ar": "لحم مطبوخ مع الخضروات والتوابل" },
        { "arabic_name": "لحم بالزعفران", "english_name": "Mutton Zafrani", "price_sar": 45, "image": "./images/1000035959.jpg", "description_ar": "لحم فاخر بالزعفران والكريمة" },
        { "arabic_name": "لحم أشاري", "english_name": "Mutton Achari", "price_sar": 38, "image": "./images/1000034412.jpg", "description_ar": "لحم بنكهة المخلل الهندي" },
        { "arabic_name": "لحم كاري بالعظم", "english_name": "Mutton Curry", "price_sar": 44, "image": "./images/1000034413.jpg", "description_ar": "لحم كاري تقليدي بالعظم" },
        { "arabic_name": "لحم كاداي", "english_name": "Kadai Mutton", "price_sar": 38, "image": "./images/1000034415.jpg", "description_ar": "لحم مطبوخ في مقلاة الكاداي" },
        { "arabic_name": "لحم بالفلفل", "english_name": "Mutton MIRCHI", "price_sar": 38, "image": "./images/1000034416.jpg", "description_ar": "لحم حار بالفلفل الأخضر" },
        { "arabic_name": "لحم ميراتا", "english_name": "Mutton MERATA", "price_sar": 39, "image": "./images/1000034417.jpg", "description_ar": "لحم بالوصفة الخاصة لمطعم ميراتا" }
    ],
    "مسالا بحريات": [
        { "arabic_name": "سمك هونج كونج", "english_name": "Hong Kong Fish", "price_sar": 41, "image": "./images/1000034418.jpg", "description_ar": "سمك على الطريقة الآسيوية" },
        { "arabic_name": "سمك بنجابي", "english_name": "FISH PNJABY", "price_sar": 42, "image": "./images/1000034420.jpg", "description_ar": "سمك بنجابي بالتوابل الهندية" },
        { "arabic_name": "سمك أبولو", "english_name": "Fish APOLLO", "price_sar": 41, "image": "./images/1000034421.jpg", "description_ar": "سمك أبولو المقلي والمتبل" },
        { "arabic_name": "سمك بالزبدة والثوم", "english_name": "Fish Garlic & Butter", "price_sar": 41, "image": "./images/1000034422.jpg", "description_ar": "سمك بالزبدة والثوم العطري" },
        { "arabic_name": "جمبري بالفلفل", "english_name": "Prawns Mirchi", "price_sar": 42, "image": "./images/1000034423.jpg", "description_ar": "جمبري حار بالفلفل الأخضر" },
        { "arabic_name": "جمبري ميراتا", "english_name": "Prawns Merata", "price_sar": 45, "image": "./images/1000034426.jpg", "description_ar": "جمبري بالوصفة الخاصة لمطعم ميراتا" },
        { "arabic_name": "جمبري جالفريزي", "english_name": "Prawn Jalfrezi", "price_sar": 42, "image": "./images/1000034427.jpg", "description_ar": "جمبري مع الخضروات والتوابل" },
        { "arabic_name": "سمك كاري", "english_name": "Fish Curry", "price_sar": 45, "image": "./images/1000035949.jpg", "description_ar": "سمك كاري بالتوابل العطرة" },
        { "arabic_name": "سمك مسالا", "english_name": "Fish Masala", "price_sar": 41, "image": "./images/1000035954.jpg", "description_ar": "سمك مسالا بالصلصة الحارة" },
        { "arabic_name": "سمك كورما", "english_name": "Fish Korma", "price_sar": 41, "image": "./images/1000035955.jpg", "description_ar": "سمك كورما الكريمي" },
        { "arabic_name": "سمك كادي", "english_name": "Fish Kadai", "price_sar": 42, "image": "./images/1000035959.jpg", "description_ar": "سمك مطبوخ في مقلاة الكاداي" },
        { "arabic_name": "جمبري كاري", "english_name": "Prawns Curry", "price_sar": 45, "image": "./images/1000034412.jpg", "description_ar": "جمبري كاري بالتوابل الهندية" },
        { "arabic_name": "جمبري مسالا", "english_name": "Prawns Masala", "price_sar": 41, "image": "./images/1000034413.jpg", "description_ar": "جمبري مسالا بالصلصة الغنية" },
        { "arabic_name": "جمبري كورما", "english_name": "Prawns Korma", "price_sar": 41, "image": "./images/1000034415.jpg", "description_ar": "جمبري كورما الكريمي بالمكسرات" },
        { "arabic_name": "جمبري كادي", "english_name": "Prawns Kadai", "price_sar": 42, "image": "./images/1000034416.jpg", "description_ar": "جمبري مطبوخ في مقلاة الكاداي التقليدية" }
    ],
    "مشويات التندوري": [
        { "arabic_name": "مشكل مشوي (كبير)", "english_name": "Mixed Grilled \"large\"", "price_sar": 80, "image": "./images/1000034417.jpg", "description_ar": "تشكيلة كبيرة من المشويات المتنوعة" },
        { "arabic_name": "مشكل مشوي (وسط)", "english_name": "Mixed Grilled \"medium\"", "price_sar": 55, "image": "./images/1000034418.jpg", "description_ar": "تشكيلة متوسطة من المشويات اللذيذة" },
        { "arabic_name": "دجاج بالثوم", "english_name": "Chicken Garlic Kabab", "price_sar": 34, "image": "./images/1000034420.jpg", "description_ar": "كباب دجاج بالثوم المشوي" },
        { "arabic_name": "كباب لحم", "english_name": "Mutton Seek Kabab", "price_sar": 37, "image": "./images/1000034421.jpg", "description_ar": "كباب لحم سيخ مشوي على الفحم" },
        { "arabic_name": "لحم شبنامي", "english_name": "Mutton Shabnami", "price_sar": 41, "image": "./images/1000034422.jpg", "description_ar": "لحم شبنامي المشوي بالتوابل الخاصة" },
        { "arabic_name": "سمك تكا", "english_name": "Fish Tikka", "price_sar": 44, "image": "./images/1000034423.jpg", "description_ar": "قطع سمك تكا مشوية ومتبلة" },
        { "arabic_name": "روبيان تندوري", "english_name": "Prawns Tandoori", "price_sar": 44, "image": "./images/1000034426.jpg", "description_ar": "روبيان تندوري مشوي في الفرن الطيني" },
        { "arabic_name": "دجاج تكا", "english_name": "Chicken Tikka", "price_sar": 34, "image": "./images/1000034427.jpg", "description_ar": "قطع دجاج تكا مشوية ومتبلة" },
        { "arabic_name": "دجاج رشمي", "english_name": "Chicken Reshmi", "price_sar": 34, "image": "./images/1000035949.jpg", "description_ar": "دجاج رشمي الناعم والطري" },
        { "arabic_name": "دجاج أشاري", "english_name": "Chicken Achri", "price_sar": 34, "image": "./images/1000035954.jpg", "description_ar": "دجاج مشوي بنكهة المخلل" },
        { "arabic_name": "كباب سيخ دجاج", "english_name": "Chicken Seek Kabab", "price_sar": 34, "image": "./images/1000035955.jpg", "description_ar": "كباب دجاج سيخ مشوي على الفحم" },
        { "arabic_name": "روبيان تكا", "english_name": "PRAWNS TIKKA", "price_sar": 44, "image": "./images/1000035959.jpg", "description_ar": "روبيان تكا مشوي ومتبل" },
        { "arabic_name": "جريلد تشيكن", "english_name": "Grilled Chicken", "price_sar": 29, "image": "./images/1000034412.jpg", "description_ar": "دجاج مشوي بسيط ولذيذ" }
    ],
    "المطبخ الصيني": [
        { "arabic_name": "أرز مقلي شيزوان", "english_name": "Schezwan fried rice", "price_sar": 38, "image": "./images/1000034413.jpg", "description_ar": "أرز مقلي حار على الطريقة الصينية" },
        { "arabic_name": "أرز مقلي سنغافوري", "english_name": "Singapore fried rice", "price_sar": 40, "image": "./images/1000034415.jpg", "description_ar": "أرز مقلي سنغافوري بالتوابل الآسيوية" },
        { "arabic_name": "أرز مقلي بالخضروات", "english_name": "Vegetable fried rice", "price_sar": 33, "image": "./images/1000034416.jpg", "description_ar": "أرز مقلي بالخضروات الطازجة" },
        { "arabic_name": "أرز مقلي بالدجاج", "english_name": "Chicken fried rice", "price_sar": 38, "image": "./images/1000034417.jpg", "description_ar": "أرز مقلي بقطع الدجاج الطرية" },
        { "arabic_name": "أرز مقلي بالروبيان", "english_name": "Prawn fried rice", "price_sar": 42, "image": "./images/1000034418.jpg", "description_ar": "أرز مقلي بالروبيان الطازج" },
        { "arabic_name": "نودلز سنغافورة", "english_name": "Singapore noodles", "price_sar": 38, "image": "./images/1000034420.jpg", "description_ar": "نودلز سنغافورة بالتوابل الآسيوية" },
        { "arabic_name": "نودلز الخضروات", "english_name": "Vegetable noodles", "price_sar": 34, "image": "./images/1000034421.jpg", "description_ar": "نودلز بالخضروات المشكلة" },
        { "arabic_name": "نودلز الدجاج", "english_name": "Chicken noodles", "price_sar": 38, "image": "./images/1000034422.jpg", "description_ar": "نودلز بقطع الدجاج اللذيذة" },
        { "arabic_name": "مومو لحم", "english_name": "Momo Meat", "price_sar": 25, "image": "./images/1000034423.jpg", "description_ar": "زلابية مومو محشوة باللحم" },
        { "arabic_name": "مومو دجاج", "english_name": "Momo Chicken", "price_sar": 23, "image": "./images/1000034426.jpg", "description_ar": "زلابية مومو محشوة بالدجاج" },
        { "arabic_name": "نودلز الروبيان", "english_name": "Prawn noodles", "price_sar": 45, "image": "./images/1000034427.jpg", "description_ar": "نودلز بالروبيان الطازج" },
        { "arabic_name": "نودلز السمك", "english_name": "Fish noodles", "price_sar": 42, "image": "./images/1000035949.jpg", "description_ar": "نودلز بقطع السمك الطازجة" },
        { "arabic_name": "دجاج ديناميت", "english_name": "Dynamit Chicken", "price_sar": 42, "image": "./images/1000035954.jpg", "description_ar": "دجاج ديناميت الحار والمقرمش" },
        { "arabic_name": "دجاج شيلي", "english_name": "Chilly chicken", "price_sar": 35, "image": "./images/1000035955.jpg", "description_ar": "دجاج شيلي الحار على الطريقة الصينية" },
        { "arabic_name": "لحم شيلي", "english_name": "Chilly mutton", "price_sar": 37, "image": "./images/1000035959.jpg", "description_ar": "لحم شيلي حار ولذيذ" },
        { "arabic_name": "سمك شيلي", "english_name": "Chilly fish", "price_sar": 40, "image": "./images/1000034412.jpg", "description_ar": "سمك شيلي حار ومقرمش" },
        { "arabic_name": "روبيان شيلي", "english_name": "Chilly prawn", "price_sar": 40, "image": "./images/1000034413.jpg", "description_ar": "روبيان شيلي حار ولذيذ" },
        { "arabic_name": "روبيان ديناميت", "english_name": "Dynamite Shrimp", "price_sar": 41, "image": "./images/1000034415.jpg", "description_ar": "روبيان ديناميت مقرمش وحار" }
    ],
    "خبز هندي": [
        { "arabic_name": "خبز مشكل", "english_name": "Mix bread", "price_sar": 7, "image": "./images/1000034416.jpg", "description_ar": "تشكيلة من الخبز الهندي المتنوع" },
        { "arabic_name": "خبز نان", "english_name": "Naan bread", "price_sar": 1, "image": "./images/1000034417.jpg", "description_ar": "خبز نان تقليدي طري" },
        { "arabic_name": "خبز جارلك نان", "english_name": "Garlic naan bread", "price_sar": 2, "image": "./images/1000034418.jpg", "description_ar": "خبز نان بالثوم العطري" },
        { "arabic_name": "خبز تشيزنان", "english_name": "Cheese bread", "price_sar": 3, "image": "./images/1000034420.jpg", "description_ar": "خبز نان محشو بالجبن" },
        { "arabic_name": "خبز كيمانان", "english_name": "Kema nan bread", "price_sar": 6, "image": "./images/1000034421.jpg", "description_ar": "خبز نان محشو باللحم المفروم" },
        { "arabic_name": "خبز بترنان", "english_name": "Butter naan bread", "price_sar": 2, "image": "./images/1000034422.jpg", "description_ar": "خبز نان بالزبدة الطازجة" }
    ],
    "عصيرات": [
        { "arabic_name": "برتقال", "english_name": "Orange", "price_sar": 14, "image": "./images/1000034423.jpg", "description_ar": "عصير برتقال طازج ومنعش" },
        { "arabic_name": "ليمون نعناع", "english_name": "Lemon Mint", "price_sar": 15, "image": "./images/1000034426.jpg", "description_ar": "عصير ليمون بالنعناع المنعش" },
        { "arabic_name": "ليمون", "english_name": "Lemon", "price_sar": 14, "image": "./images/1000034427.jpg", "description_ar": "عصير ليمون طازج" },
        { "arabic_name": "فراولة", "english_name": "Strawberry", "price_sar": 14, "image": "./images/1000035949.jpg", "description_ar": "عصير فراولة طبيعي ولذيذ" },
        { "arabic_name": "مانجو", "english_name": "Mango", "price_sar": 14, "image": "./images/1000035954.jpg", "description_ar": "عصير مانجو استوائي منعش" },
        { "arabic_name": "كوكتيل", "english_name": "Cocktail", "price_sar": 15, "image": "./images/1000035955.jpg", "description_ar": "كوكتيل فواكه مشكلة" },
        { "arabic_name": "كوكتيل طبقات", "english_name": "Cocktail Layers", "price_sar": 15, "image": "./images/1000035959.jpg", "description_ar": "كوكتيل فواكه بطبقات ملونة" },
        { "arabic_name": "كأس شراب سعودي", "english_name": "Saudi Drink Cup", "price_sar": 13, "image": "./images/1000034412.jpg", "description_ar": "مشروب سعودي تقليدي في كأس" },
        { "arabic_name": "شراب سعودي وسط", "english_name": "Saudi Drink Medium", "price_sar": 23, "image": "./images/1000034413.jpg", "description_ar": "مشروب سعودي تقليدي حجم وسط" },
        { "arabic_name": "شراب سعودي كبير", "english_name": "Saudi Drink Large", "price_sar": 35, "image": "./images/1000034415.jpg", "description_ar": "مشروب سعودي تقليدي حجم كبير" },
        { "arabic_name": "بيبسي", "english_name": "PEPSI", "price_sar": 5, "image": "./images/1000034416.jpg", "description_ar": "مشروب بيبسي بارد" },
        { "arabic_name": "سفن أب", "english_name": "7UP", "price_sar": 5, "image": "./images/1000034417.jpg", "description_ar": "مشروب سفن أب منعش" },
        { "arabic_name": "ميراندا", "english_name": "MIRANDA", "price_sar": 5, "image": "./images/1000034418.jpg", "description_ar": "مشروب ميراندا بنكهة البرتقال" },
        { "arabic_name": "ماء", "english_name": "WATER", "price_sar": 2, "image": "./images/1000034420.jpg", "description_ar": "مياه معدنية طبيعية" }
    ]
};

// Translations
const translations = {
    ar: {
        title: "مطعم ميراتا",
        subtitle: "تجربة طعام استثنائية مع أفضل الأطباق الهندية الأصيلة",
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
        cancelButton: "إلغاء",
        clearCart: "مسح السلة",
        searchPlaceholder: "ابحث عن طبق...",
        noResults: "لا توجد نتائج",
        noResultsMessage: "لم يتم العثور على أطباق تطابق بحثك",
        loading: "جاري التحميل..."
    },
    en: {
        title: "Merata Restaurant",
        subtitle: "An exceptional dining experience with the finest authentic Indian dishes",
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
        cancelButton: "Cancel",
        clearCart: "Clear Cart",
        searchPlaceholder: "Search for a dish...",
        noResults: "No Results",
        noResultsMessage: "No dishes found matching your search",
        loading: "Loading..."
    }
};

// Current language
let currentLang = 'ar';

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Search functionality
let currentSearchTerm = '';
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    updateCartDisplay();
    updateStaticTexts();
    
    // Add loading animation
    showLoading();
    setTimeout(() => {
        hideLoading();
    }, 1000);
});

// Loading functions
function showLoading() {
    document.getElementById('loading-spinner').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-spinner').style.display = 'none';
}

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
    
    // Update language button
    const langButton = document.getElementById('lang-btn');
    if (langButton) {
        langButton.textContent = t.langButton;
    }
    
    // Update search placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = t.searchPlaceholder;
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

    // Update clear cart button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.textContent = t.clearCart;
    }

    // Update category buttons
    const allCategoriesBtn = document.querySelector('.category-btn.active');
    if (allCategoriesBtn && allCategoriesBtn.onclick.toString().includes("'all'")) {
        allCategoriesBtn.textContent = t.allCategories;
    }

    // Update no results message
    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.innerHTML = `<h3>${t.noResults}</h3><p>${t.noResultsMessage}</p>`;
    }

    // Update loading message
    const loadingSpinner = document.querySelector('.loading-spinner p');
    if (loadingSpinner) {
        loadingSpinner.textContent = t.loading;
    }
}

// Search menu items
function searchMenu() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    currentSearchTerm = searchTerm;
    renderMenu();
}

// Render menu items
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    const noResults = document.getElementById('no-results');
    menuContainer.innerHTML = '';
    
    let hasResults = false;

    for (const category in menuData) {
        // Skip category if not matching current filter
        if (currentCategory !== 'all' && category !== currentCategory) {
            continue;
        }

        const filteredItems = menuData[category].filter(item => {
            if (!currentSearchTerm) return true;
            
            const searchFields = [
                item.arabic_name?.toLowerCase() || '',
                item.english_name?.toLowerCase() || '',
                item.description_ar?.toLowerCase() || '',
                item.description_en?.toLowerCase() || ''
            ];
            
            return searchFields.some(field => field.includes(currentSearchTerm));
        });

        if (filteredItems.length === 0) continue;

        hasResults = true;
        
        const section = document.createElement('div');
        section.className = 'menu-section';
        section.id = category.replace(/\s/g, '-') + '-section';
        section.setAttribute('data-category', category);

        const sectionTitleContainer = document.createElement('div');
        sectionTitleContainer.className = 'section-title-container';
        const title = document.createElement('h2');
        title.textContent = category;
        sectionTitleContainer.appendChild(title);
        section.appendChild(sectionTitleContainer);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        filteredItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            // Item Image
            if (item.image) {
                const itemImageDiv = document.createElement('div');
                itemImageDiv.className = 'item-image';
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.arabic_name;
                img.loading = 'lazy'; // Lazy loading for better performance
                img.onerror = function() {
                    this.src = './images/placeholder.jpg'; // Fallback image
                };
                itemImageDiv.appendChild(img);
                itemDiv.appendChild(itemImageDiv);
            }

            const itemContent = document.createElement('div');
            itemContent.className = 'item-content';

            const itemHeader = document.createElement('div');
            itemHeader.className = 'item-header';

            const itemName = document.createElement('h3');
            itemName.textContent = currentLang === 'ar' ? item.arabic_name : item.english_name;
            itemHeader.appendChild(itemName);

            const itemPrice = document.createElement('span');
            itemPrice.className = 'item-price';
            itemPrice.textContent = `${item.price_sar} ${translations[currentLang].sar}`;
            itemHeader.appendChild(itemPrice);

            itemContent.appendChild(itemHeader);

            const itemDescription = document.createElement('p');
            itemDescription.className = 'item-description';
            const description = currentLang === 'ar' ? 
                (item.description_ar || item.description_en || '') : 
                (item.description_en || item.description_ar || '');
            itemDescription.textContent = description;
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

    // Show/hide no results message
    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
}

// Filter menu items by category
function filterCategory(category) {
    currentCategory = category;
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const clickedButton = Array.from(categoryButtons).find(btn => 
        btn.onclick.toString().includes(`filterCategory('${category}')`)
    );
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    renderMenu();
}

// Add item to cart
function addToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.arabic_name === item.arabic_name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push({ 
            ...item, 
            quantity: 1,
            name: item.arabic_name // Ensure name property exists
        });
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
    const paymentMethodsSection = document.getElementById('payment-methods-section');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const totalAmountSpan = document.getElementById('total-amount');

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        if (emptyCartDiv) emptyCartDiv.style.display = 'block';
        if (cartTotalDiv) cartTotalDiv.style.display = 'none';
        if (paymentMethodsSection) paymentMethodsSection.style.display = 'none';
        if (clearCartBtn) clearCartBtn.style.display = 'none';
    } else {
        if (emptyCartDiv) emptyCartDiv.style.display = 'none';
        if (cartTotalDiv) cartTotalDiv.style.display = 'flex';
        if (paymentMethodsSection) paymentMethodsSection.style.display = 'block';
        if (clearCartBtn) clearCartBtn.style.display = 'block';

        let total = 0;
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.arabic_name || item.name || 'غير محدد'}</span>
                    <span class="cart-item-price">${item.price_sar || 0} ${translations[currentLang].sar}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="changeQuantity('${item.arabic_name || item.name}', -1)">-</button>
                    <span class="quantity-display">${item.quantity || 1}</span>
                    <button class="quantity-btn" onclick="changeQuantity('${item.arabic_name || item.name}', 1)">+</button>
                    <button class="remove-item-btn" onclick="removeItem('${item.arabic_name || item.name}')">${translations[currentLang].removeItem}</button>
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
    const itemIndex = cart.findIndex(item => (item.arabic_name || item.name) === itemName);
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
    cart = cart.filter(item => (item.arabic_name || item.name) !== itemName);
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
    let message = `مرحباً، أود الاستفسار عن المنيو والأطباق المتاحة في مطعم ميراتا.`;
    
    if (cart.length > 0) {
        message = `مرحباً، أود أن أطلب:\n\n`;
        let total = 0;

        cart.forEach(item => {
            const itemName = item.arabic_name || item.name || 'غير محدد';
            const itemPrice = (item.price_sar || 0) * (item.quantity || 1);
            message += `- ${itemName} (الكمية: ${item.quantity || 1}) - ${itemPrice} ${translations[currentLang].sar}\n`;
            total += itemPrice;
        });
        
        message += `\nالمجموع الكلي: ${total.toFixed(2)} ${translations[currentLang].sar}`;

        const orderNotes = document.getElementById('order-notes').value;
        if (orderNotes) {
            message += `\nملاحظات: ${orderNotes}`;
        }

        const pickupMethod = document.querySelector('input[name="pickup-method"]:checked');
        if (pickupMethod) {
            const methodText = pickupMethod.value === 'branch' ? translations[currentLang].fromBranch : translations[currentLang].localDining;
            message += `\nطريقة الاستلام: ${methodText}`;
        }
    }

    const whatsappUrl = `https://wa.me/+966508813919?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Confirmation Modal functions
function showConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('active');
}

function hideConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('active');
}

function confirmClearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartDisplay();
    hideConfirmationModal();
    showSuccessMessage();
}

// Complete order function - No longer needed as payment methods are integrated in cart
// Payment methods are now directly accessible in the cart modal

// Enhanced error handling for images
function handleImageError(img) {
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = '<span>صورة غير متاحة</span>';
    img.parentNode.appendChild(placeholder);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cart-modal');
        const confirmModal = document.getElementById('confirmation-modal');
        
        if (cartModal.classList.contains('active')) {
            toggleCart();
        }
        if (confirmModal.classList.contains('active')) {
            hideConfirmationModal();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(searchMenu, 300);

// Update search input event
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debouncedSearch);
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger some action
        } else {
            // Swipe down - could trigger some action
        }
    }
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track cart actions
const originalAddToCart = addToCart;
addToCart = function(item) {
    trackEvent('add_to_cart', { item_name: item.arabic_name, price: item.price_sar });
    return originalAddToCart(item);
};

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

