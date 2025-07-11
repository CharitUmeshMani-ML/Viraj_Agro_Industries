import { Product, ProductCategory, BlogPost, JobOpening } from '../types';

export const mockProducts: Product[] = [
  // Seeds
  { 
    id: 1, 
    name: {
      en: 'Sona Masoori Paddy Seeds',
      hi: 'सोना मसूरी धान के बीज',
      te: 'సోనా మసూరి వరి విత్తనాలు'
    },
    category: ProductCategory.Seeds, 
    price: 850, 
    description: {
      en: 'High-quality, medium-grain rice seeds, popular for their aroma and taste. Suitable for Kharif season.',
      hi: 'उच्च-गुणवत्ता वाले, मध्यम-अनाज के चावल के बीज, जो अपनी सुगंध और स्वाद के लिए लोकप्रिय हैं। खरीफ सीजन के लिए उपयुक्त।',
      te: 'అధిక-నాణ్యత, మధ్యస్థ-ధాన్యం బియ్యం విత్తనాలు, వాటి వాసన మరియు రుచికి ప్రసిద్ధి. ఖరీఫ్ సీజన్‌కు అనుకూలం.'
    },
    imageUrl: 'https://img2.exportersindia.com/product_images/bc-full/2020/8/7362164/kurnool-sona-paddy-seeds-1598699869-5568874.jpeg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { sku: 'PADDY-SM-10KG', label: { en: '10 kg pack', hi: '10 किलो पैक', te: '10 కిలోల ప్యాక్' }, price: 850 },
      { sku: 'PADDY-SM-25KG', label: { en: '25 kg pack', hi: '25 किलो पैक', te: '25 కిలోల ప్యాక్' }, price: 2000 }
    ]
  },
  { 
    id: 2, 
    name: {
      en: 'Hybrid Bajra (Pearl Millet) Seeds',
      hi: 'हाइब्रिड बाजरा (पर्ल मिलेट) के बीज',
      te: 'హైబ్రిడ్ బజ్రా (పెర్ల్ మిల్లెట్) విత్తనాలు'
    },
    category: ProductCategory.Seeds, 
    price: 450, 
    description: {
      en: 'Drought-tolerant hybrid millet seeds with high yield potential and nutritional value.',
      hi: 'सूखा-सहिष्णु हाइब्रिड बाजरा के बीज उच्च उपज क्षमता और पोषण मूल्य के साथ।',
      te: 'అధిక దిగుబడి మరియు పోషక విలువలతో కరువు-తట్టుకునే హైబ్రిడ్ మిల్లెట్ విత్తనాలు.'
    },
    imageUrl: 'https://m.media-amazon.com/images/I/51C9YhujnuL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    id: 3, 
    name: {
      en: 'PKM-1 Tomato Seeds',
      hi: 'पीकेएम-1 टमाटर के बीज',
      te: 'పీకేఎం-1 టొమాటో విత్తనాలు'
    },
    category: ProductCategory.Seeds, 
    price: 150, 
    description: {
      en: 'High-yielding variety of tomato seeds, resistant to common pests and diseases.',
      hi: 'टमाटर के बीजों की उच्च उपज वाली किस्म, जो आम कीटों और बीमारियों के प्रतिरोधी है।',
      te: 'సాధారణ తెగుళ్లు మరియు వ్యాధులకు నిరోధకత కలిగిన అధిక-దిగుబడి రకం టమోటా విత్తనాలు.'
    },
    imageUrl: 'https://www.global-agriculture.com/wp-content/uploads/2022/10/Untitled-1-39-768x427.jpg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Fertilizers
  { 
    id: 4, 
    name: {
      en: 'IFFCO Urea (46% N)',
      hi: 'इफको यूरिया (46% एन)',
      te: 'ఇఫ్కో యూరియా (46% N)'
    },
    category: ProductCategory.Fertilizers, 
    price: 266, 
    description: {
      en: 'Essential nitrogen fertilizer for promoting lush, green leafy growth.',
      hi: 'हरे-भरे पत्तों के विकास को बढ़ावा देने के लिए आवश्यक नाइट्रोजन उर्वरक।',
      te: 'పచ్చని ఆకుల పెరుగుదలను ప్రోత్సహించడానికి అవసరమైన నత్రజని ఎరువు.'
    },
    imageUrl: 'https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-07/UREA_UREA-GRANULED.jpg?auto=compress&cs=tinysrgb&w=800',
    details: [
        {
            label: { en: 'Weight', hi: 'वजन', te: 'బరువు' },
            value: { en: '45kg bag', hi: '45 किलो का बैग', te: '45 కిలోల సంచి' }
        }
    ]
  },
  { 
    id: 5, 
    name: {
      en: 'DAP (Diammonium Phosphate)',
      hi: 'डीएपी (डाईअमोनियम फॉस्फेट)',
      te: 'డిఎపి (డైఅమోనియం ఫాస్ఫేట్)'
    },
    category: ProductCategory.Fertilizers, 
    price: 1350, 
    description: {
      en: 'Provides essential phosphorus and nitrogen to stimulate root development.',
      hi: 'जड़ों के विकास को प्रोत्साहित करने के लिए आवश्यक फास्फोरस और नाइट्रोजन प्रदान करता है।',
      te: 'వేరు అభివృద్ధిని ప్రేరేపించడానికి అవసరమైన ఫాస్పరస్ మరియు నత్రజనిని అందిస్తుంది.'
    },
    imageUrl: 'https://tiimg.tistatic.com/fp/1/006/840/iffco-fertilizer-urea-187.jpg?auto=compress&cs=tinysrgb&w=800',
    details: [
        {
            label: { en: 'Weight', hi: 'वजन', te: 'బరువు' },
            value: { en: '50kg bag', hi: '50 किलो का बैग', te: '50 కిలోల సంచి' }
        }
    ]
  },

  // Pesticides
  { 
    id: 6, 
    name: {
      en: 'Monocrotophos 36% SL',
      hi: 'मोनोक्रोटोफॉस 36% एसएल',
      te: 'మోనోక్రోటోఫాస్ 36% SL'
    },
    category: ProductCategory.Pesticides, 
    price: 400, 
    description: {
      en: 'Systemic and contact insecticide effective against a wide range of sucking and chewing pests.',
      hi: 'चूसने और चबाने वाले कीटों की एक विस्तृत श्रृंखला के खिलाफ प्रभावी प्रणालीगत और संपर्क कीटनाशक।',
      te: 'వివిధ రకాల పీల్చే మరియు నమిలే పురుగులకు వ్యతిరేకంగా పనిచేసే దైహిక మరియు స్పర్శ కీటకనాశిని.'
    },
    imageUrl: 'https://agribegri.com/productimage/565553c84de9774d8d19220115bcee1f-04-05-23-15-08-16.webp?auto=compress&cs=tinysrgb&w=800'
  },
  { id: 7, name: { en: 'Cypermethrin 10% EC', hi: 'साइपरमेथ्रिन 10% ईसी', te: 'సైపర్‌మెత్రిన్ 10% EC' }, category: ProductCategory.Pesticides, price: 280, description: { en: 'A synthetic pyrethroid insecticide used to control various pests on cotton, fruits, and vegetables.', hi: 'कपास, फलों और सब्जियों पर विभिन्न कीटों को नियंत्रित करने के लिए इस्तेमाल किया जाने वाला एक सिंथेटिक पाइरेथ्रोइड कीटनाशक।', te: 'పత్తి, పండ్లు మరియు కూరగాయలపై వివిధ తెగుళ్లను నియంత్రించడానికి ఉపయోగించే సింథటిక్ పైరెథ్రాయిడ్ కీటకనాశిని.' }, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/3/493977336/SS/OF/UP/29991470/cypermethrin-10-ec.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { 
    id: 8, 
    name: { en: 'Organic Vermicompost', hi: 'जैविक वर्मीकम्पोस्ट', te: 'సేంద్రీయ వర్మీకంపోస్ట్' }, 
    category: ProductCategory.Organic, 
    price: 150, 
    description: { en: 'Rich, nutrient-dense compost for improving soil health and fertility naturally.', hi: 'मिट्टी के स्वास्थ्य और उर्वरता में सुधार के लिए पोषक तत्वों से भरपूर खाद।', te: 'మట్టి ఆరోగ్యం మరియు సంతానోత్పత్తిని సహజంగా మెరుగుపరచడానికి గొప్ప, పోషకాలు-దట్టమైన కంపోస్ట్.' }, 
    imageUrl: 'https://radhakrishnaagriculture.in/cdn/shop/files/organic-vermicompost.jpg?auto=compress&cs=tinysrgb&w=800',
    variants: [
      { sku: 'VERMI-2KG', label: { en: '2 kg pack', hi: '2 किलो पैक', te: '2 కిలోల ప్యాక్' }, price: 150 },
      { sku: 'VERMI-5KG', label: { en: '5 kg pack', hi: '5 किलो पैक', te: '5 కిలోల ప్యాక్' }, price: 350 },
      { sku: 'VERMI-10KG', label: { en: '10 kg pack', hi: '10 किलो पैक', te: '10 కిలోల ప్యాక్' }, price: 650 }
    ]
  },
  { id: 9, name: { en: 'Neem Oil Concentrate (1500 PPM)', hi: 'नीम तेल सांद्र (1500 पीपीएम)', te: 'వేప నూనె సాంద్రత (1500 PPM)' }, category: ProductCategory.Organic, price: 550, description: { en: 'Organic solution for mites, fungi, and insects. Effective and eco-friendly pest management.', hi: 'माइट्स, कवक और कीड़ों के लिए जैविक समाधान। प्रभावी और पर्यावरण के अनुकूल कीट प्रबंधन।', te: 'మైట్స్, శిలీంధ్రాలు మరియు కీటకాలకు సేంద్రీయ పరిష్కారం. సమర్థవంతమైన మరియు పర్యావరణ అనుకూలమైన తెగులు నిర్వహణ.' }, imageUrl: 'https://draxe.com/wp-content/uploads/2017/06/NeemOil_fb.jpg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: { en: 'Panchagavya Growth Promoter', hi: 'पंचगव्य ग्रोथ प्रमोटर', te: 'పంచగవ్య గ్రోత్ ప్రమోటర్' }, category: ProductCategory.Organic, price: 250, description: { en: 'An organic product used to enhance plant growth and immunity. 1 Litre bottle.', hi: 'पौधों की वृद्धि और प्रतिरक्षा बढ़ाने के लिए इस्तेमाल किया जाने वाला एक जैविक उत्पाद। 1 लीटर की बोतल।', te: 'మొక్కల పెరుగుదల మరియు రోగనిరోధక శక్తిని పెంచడానికి ఉపయోగించే సేంద్రీయ ఉత్పత్తి. 1 లీటరు సీసా.' }, imageUrl: 'https://sasyamruth.com/wp-content/uploads/2024/03/panchagravya-natural-fertilizer.jpg?auto=compress&cs=tinysrgb&w=800' },
  { 
    id: 11, 
    name: { en: 'Hand-operated Chaff Cutter', hi: 'हाथ से चलने वाला चारा कटर', te: 'చేతితో పనిచేసే చాఫ్ కట్టర్' }, 
    category: ProductCategory.Implements, 
    price: 3500, 
    description: { en: 'Durable manual machine for cutting straw and fodder for livestock. Features hardened steel blades for efficient cutting.', hi: 'पशुओं के लिए पुआल और चारा काटने के लिए टिकाऊ मैनुअल मशीन। कुशल कटाई के लिए कठोर स्टील ब्लेड की सुविधा है।', te: 'పశువుల కోసం గడ్డి మరియు పశుగ్రాసం కత్తిరించడానికి మన్నికైన మాన్యువల్ యంత్రం. సమర్థవంతమైన కట్టింగ్ కోసం గట్టిపడిన స్టీల్ బ్లేడ్‌లను కలిగి ఉంది.' }, 
    imageUrl: 'https://mlhobevaucyf.i.optimole.com/w:1188/h:742/q:mauto/f:best/ig:avif/https://novo3ds.in/wp-content/uploads/2023/06/AG225_chuff_cutter_1.jpg?auto=compress&cs=tinysrgb&w=800',
    details: [
        {
            label: { en: 'Power Source', hi: 'शक्ति का स्रोत', te: 'శక్తి వనరులు' },
            value: { en: 'Manual, Hand-Cranked', hi: 'मैनुअल, हाथ से क्रैंक', te: 'మాన్యువల్, చేతితో క్రాంక్ చేయబడింది' }
        },
        {
            label: { en: 'Material', hi: 'सामग्री', te: 'మెటీరియల్' },
            value: { en: 'Cast Iron Body, Steel Blades', hi: 'कास्ट आयरन बॉडी, स्टील ब्लेड', te: 'కాస్ట్ ఐరన్ బాడీ, స్టీల్ బ్లేడ్లు' }
        },
        {
            label: { en: 'Weight', hi: 'वजन', te: 'బరువు' },
            value: { en: 'Approx. 25 kg', hi: 'लगभग 25 किलो', te: 'సుమారు 25 కిలోలు' }
        }
    ]
  },
  { 
    id: 12, 
    name: { en: 'Manual Seed Drill', hi: 'मैनुअल सीड ड्रिल', te: 'మాన్యువల్ సీడ్ డ్రిల్' }, 
    category: ProductCategory.Implements, 
    price: 2200, 
    description: { en: 'Efficient tool for sowing seeds at a uniform depth and distance in the soil.', hi: 'मिट्टी में समान गहराई और दूरी पर बीज बोने के लिए कुशल उपकरण।', te: 'మట్టిలో ఏకరీతి లోతు మరియు దూరంలో విత్తనాలు విత్తడానికి సమర్థవంతమైన సాధనం.' }, 
    imageUrl: 'https://newagri.in/wp-content/uploads/2023/06/AG288_3_Row_seeder.jpg?q=80&w=800&auto=format=fit&crop' 
  },
  { 
    id: 13, 
    name: { en: 'Knapsack Sprayer (16 Litre)', hi: 'नैपसैक स्प्रेयर (16 लीटर)', te: 'న్యాప్‌సాక్ స్ప్రేయర్ (16 లీటర్లు)' }, 
    category: ProductCategory.Sprays, 
    price: 1200, 
    description: { en: 'Manually operated sprayer for applying fertilizers, pesticides, and herbicides. Ergonomic design for comfort during long hours of use.', hi: 'उर्वरकों, कीटनाशकों और शाकनाशियों के छिड़काव के लिए मैन्युअल रूप से संचालित स्प्रेयर। लंबे समय तक उपयोग के दौरान आराम के लिए एर्गोनोमिक डिजाइन।', te: 'ఎరువులు, పురుగుమందులు మరియు కలుపు సంహారకాలను పిచికారీ చేయడానికి చేతితో పనిచేసే స్ప్రేయర్. ఎక్కువ గంటలు ఉపయోగించినప్పుడు సౌకర్యం కోసం ఎర్గోనామిక్ డిజైన్.' }, 
    imageUrl: 'https://d1utvfg27pmj9q.cloudfront.net/uploads/products/photos/ZZe5mvfCZ2PZzUhf96d7H8GE5OyCgvipetgCE7oJ.webp?q=80&w=800&auto=format=fit&crop',
    details: [
        {
            label: { en: 'Capacity', hi: 'क्षमता', te: 'సామర్థ్యం' },
            value: { en: '16 Litres', hi: '16 लीटर', te: '16 లీటర్లు' }
        },
        {
            label: { en: 'Weight', hi: 'वजन', te: 'బరువు' },
            value: { en: '4.5 kg (empty)', hi: '4.5 किलो (खाली)', te: '4.5 కిలోలు (ఖాళీ)' }
        },
        {
            label: { en: 'Material', hi: 'सामग्री', te: 'మెటీరియల్' },
            value: { en: 'High-Density Polyethylene (HDPE) Tank', hi: 'उच्च-घनत्व पॉलीथीन (एचडीपीई) टैंक', te: 'హై-డెన్సిటీ పాలిథిలిన్ (HDPE) ట్యాంక్' }
        },
        {
            label: { en: 'Operation', hi: 'संचालन', te: 'ఆపరేషన్' },
            value: { en: 'Manual (Left or Right Hand)', hi: 'मैनुअल (बाएं या दाएं हाथ)', te: 'మాన్యువల్ (ఎడమ లేదా కుడి చేతి)' }
        }
    ]
  },
  { 
    id: 14, 
    name: { en: 'Battery Operated Sprayer', hi: 'बैटरी चालित स्प्रेयर', te: 'బ్యాటరీతో పనిచేసే స్ప్రేయర్' }, 
    category: ProductCategory.Sprays, 
    price: 2800, 
    description: { en: 'Rechargeable battery-powered sprayer for effortless and consistent application.', hi: 'आसान और सुसंगत अनुप्रयोग के लिए रिचार्जेबल बैटरी चालित स्प्रेयर।', te: 'శ్రమలేని మరియు స్థిరమైన అప్లికేషన్ కోసం రీఛార్జిబుల్ బ్యాటరీ-శక్తితో పనిచేసే స్ప్రేయర్.' }, 
    imageUrl: 'https://m.media-amazon.com/images/I/51ACQQwS+gL.jpg?auto=compress&cs=tinysrgb&w=800' 
  },
];

export const mockBlogPosts: BlogPost[] = [
  { 
    id: 1, 
    title: {
      en: 'The Ultimate Guide to Companion Planting',
      hi: 'सहयोगी रोपण के लिए अंतिम गाइड',
      te: 'తోడు మొక్కల పెంపకానికి అల్టిమేట్ గైడ్'
    },
    author: 'Jane Doe', 
    date: 'October 26, 2023', 
    excerpt: {
      en: 'Discover which plants grow best together to deter pests and improve growth...',
      hi: 'कीटों को दूर भगाने और विकास में सुधार करने के लिए कौन से पौधे एक साथ सबसे अच्छे उगते हैं, इसकी खोज करें...',
      te: 'తెగుళ్లను నివారించడానికి మరియు పెరుగుదలను మెరుగుపరచడానికి ఏ మొక్కలు కలిసి ఉత్తమంగా పెరుగుతాయో కనుగొనండి...'
    },
    imageUrl: 'https://www.hoselink.com/cdn/shop/articles/head_image_comp_3ef2b12e-2d67-42f3-ba7e-7b79be13c569.jpg', 
    content: 'Full content here...' 
  },
  { 
    id: 2, 
    title: {
      en: 'Soil Health 101: Building a Foundation for Your Garden',
      hi: 'मृदा स्वास्थ्य 101: अपने बगीचे के लिए एक नींव का निर्माण',
      te: 'నేల ఆరోగ్యం 101: మీ తోట కోసం పునాదిని నిర్మించడం'
    }, 
    author: 'John Smith', 
    date: 'October 15, 2023', 
    excerpt: {
      en: 'Healthy soil is the key to a thriving garden. We break down the basics of soil composition...',
      hi: 'स्वस्थ मिट्टी एक संपन्न बगीचे की कुंजी है। हम मिट्टी की संरचना के मूल सिद्धांतों को तोड़ते हैं...',
      te: 'ఆరోగ్యకరమైన నేల వర్ధిల్లుతున్న తోటకు కీలకం. మేము నేల కూర్పు యొక్క ప్రాథమికాలను విచ్ఛిన్నం చేస్తాము...'
    },
    imageUrl: 'https://yourbackyardfarmer.com/wp-content/uploads/2024/09/urban_soil_problem_solutions.jpg', 
    content: 'Full content here...' 
  },
];

export const mockJobOpenings: JobOpening[] = [
  { 
    id: 1, 
    title: {
      en: 'Agronomist',
      hi: 'कृषि विज्ञानी',
      te: 'వ్యవసాయ శాస్త్రవేత్త'
    }, 
    location: 'Head Office, Greenfield', 
    type: 'Full-time', 
    description: {
      en: 'Provide expert advice to farmers on crop management. Requires a degree in Agriculture or related field.',
      hi: 'किसानों को फसल प्रबंधन पर विशेषज्ञ सलाह प्रदान करें। कृषि या संबंधित क्षेत्र में डिग्री की आवश्यकता है।',
      te: 'పంటల యాజమాన్యంపై రైతులకు నిపుణుల సలహాలను అందించండి. వ్యవసాయం లేదా సంబంధిత రంగంలో డిగ్రీ అవసరం.'
    } 
  },
  { 
    id: 2, 
    title: {
      en: 'Warehouse Associate',
      hi: 'वेयरहाउस एसोसिएट',
      te: 'గిడ్డంగి సహాయకుడు'
    }, 
    location: 'Central Distribution Hub', 
    type: 'Full-time', 
    description: {
      en: 'Responsible for inventory management, packing, and shipping of products. Forklift certification is a plus.',
      hi: 'उत्पादों की इन्वेंट्री प्रबंधन, पैकिंग और शिपिंग के लिए जिम्मेदार। फोर्कलिफ्ट प्रमाणीकरण एक प्लस है।',
      te: 'ఉత్పత్తుల జాబితా నిర్వహణ, ప్యాకింగ్ మరియు షిప్పింగ్‌కు బాధ్యత వహించాలి. ఫోర్క్‌లిఫ్ట్ ధృవీకరణ ఒక ప్లస్.'
    } 
  },
];
