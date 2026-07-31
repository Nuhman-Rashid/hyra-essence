/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review, FAQItem } from './types';

export const BRAND_NAME = 'HYRA ESSENCE';
export const WHATSAPP_NUMBER = '919526228491';
export const WHATSAPP_LINK_BASE = 'https://wa.me/919526228491';

export const CATEGORIES = [
  {
    id: 'churidars',
    name: 'Churidars',
    description: 'Timeless elegance. Traditional silhouettes reimagined for the modern Kerala woman.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_black_churidhar_pjmehc',
    count: 13
  },
  {
    id: 'kurtas',
    name: 'Kurtas',
    description: 'Effortless grace. Tailored from the finest silks and linens for day-to-night styling.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/300_mc7ipo',
    count: 18
  },
  {
    id: 'co-ord-sets',
    name: 'Co-ord Sets',
    description: 'Chic matching ensembles. Effortless coordination with contemporary tailored cuts.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/400_M-2XL_p7sbdv',
    count: 8
  },
  {
    id: 'materials',
    name: 'Materials',
    description: 'Premium unstitched fabric sets. Custom-tailor your dream outfit with high-grade weaves.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/750_MT_vzkl0v',
    count: 15
  },
  {
    id: 'pants',
    name: 'Pants',
    description: 'Tailored trousers, palazzos & culottes. Designed for effortless comfort and versatile styling.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/850_28_30_32_x3eayr',
    count: 2
  },
  {
    id: 'night-wear',
    name: 'Night Wear',
    description: 'Comfortable loungewear & sleepwear. Soft cotton and silk kaftans designed for restful luxury.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/450_emka8u',
    count: 2
  },
  {
    id: 'prayer-dresses',
    name: 'Prayer Dresses',
    description: 'Serene & modest devotion attire. Lightweight, breathable cotton & rayon dresses designed for supreme comfort.',
    image: 'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0687_dxrxvj',
    count: 2
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "ch-08",
    "name": "Pakistani Churidhar",
    "category": "churidars",
    "price": 999,
    "originalPrice": 1499,
    "fabric": "Pure Chanderi Silk-Cotton Blend",
    "description": "Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.",
    "sizes": [
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/999_L-XXXL_tpqtx9",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Hand-block printed using authentic natural vegetable indigo dyes",
      "High-grade Chanderi weave with lightweight feel",
      "Contrast piping details",
      "Breathable cotton lining"
    ],
  },
  {
    "id": "ch-09",
    "name": "Churidhar",
    "category": "churidars",
    "price": 999,
    "originalPrice": 1499,
    "fabric": "Imported Cotton",
    "description": "Stay stylish and comfortable with this Imported Cotton Churidhar. Crafted from premium-quality imported cotton, it offers exceptional softness, breathability, and a comfortable fit. Perfect for daily wear, office, college, and casual outings.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/999_M_-_2XL_uldods",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Imported Cotton Fabric",
      "Soft & Breathable Material",
      "Comfortable All-Day Fit",
      "Ideal for Daily & Casual Wear"
    ],
  },
  {
    "id": "ch-00",
    "name": "Pakistani Churidhar",
    "category": "churidars",
    "price": 1099,
    "originalPrice": 1599,
    "fabric": "Rayon top & Cotton Shall",
    "description": "designed for comfort and timeless beauty. The premium rayon top offers a soft, breathable feel with a graceful drape, making it perfect for all-day wear. Paired with a lightweight cotton shawl, this outfit combines sophistication with effortless comfort.",
    "sizes": [
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_black_churidhar_pjmehc",
    ],
    "washCare": "Dry clean recommended to preserve the delicate silver embroidery and sheer fabric drape. Alternatively, gentle hand wash in cold water.",
    "deliveryInfo": "Ships within 24-48 hours from Thalassery, Kannur, Kerala. Express delivery across Kerala in 1-2 business days. All-India delivery in 4-6 business days.",
    "features": [
      "Premium Soft Rayon Top",
      "Lightweight & Breathable Cotton Shawl",
      "Comfortable Fit for Everyday Wear",
      "Elegant Pakistani-Inspired Design",
      "Suitable for Casual, Office & Festive Occasions",
      "Soft, Skin-Friendly Fabric",
      "Easy to Wash & Maintain"
    ],
    "isNewArrival": true,
    "isFeatured": true,
    "isBestSeller": true,
  },
  {
    "id": "ch-03",
    "name": "Pakistani Churidhar",
    "category": "churidars",
    "price": 1099,
    "originalPrice": 1500,
    "fabric": "Rayon top & Cotton Shall",
    "description": "Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.",
    "sizes": [
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_L-XXXL_2_xqo76m",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Soft Rayon Top",
      "Lightweight & Breathable Cotton Shawl",
      "Comfortable Fit for Everyday Wear",
      "Elegant Pakistani-Inspired Design",
      "Suitable for Casual, Office & Festive Occasions",
      "Soft, Skin-Friendly Fabric",
      "Easy to Wash & Maintain"
    ],
  },
  {
    "id": "ch-04",
    "name": "Pakistani Churidhar",
    "category": "churidars",
    "price": 1099,
    "originalPrice": 1500,
    "fabric": "Rayon top & Cotton Shall",
    "description": "Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.",
    "sizes": [
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0572_gqxtjn",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Soft Rayon Top",
      "Lightweight & Breathable Cotton Shawl",
      "Comfortable Fit for Everyday Wear",
      "Elegant Pakistani-Inspired Design",
      "Suitable for Casual, Office & Festive Occasions",
      "Soft, Skin-Friendly Fabric",
      "Easy to Wash & Maintain"
    ],
  },
  {
    "id": "ch-10",
    "name": "Churidar",
    "category": "churidars",
    "price": 1199,
    "originalPrice": 1699,
    "fabric": "Roman silk",
    "description": "Made from premium-quality Roman silk, it features a smooth texture, rich finish, and comfortable fit, making it an ideal choice for festive occasions, parties, and elegant everyday wear.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1199_M_-_XXL_vfwww6",
      "https://res.cloudinary.com/tlzj92qq/image/upload/v1785482850/IMG_0831_uvugrl.png"
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Roman Silk Fabric",
      "Smooth & Luxurious Finish",
      "Comfortable & Elegant Fit",
      "Perfect for Festive & Party Wear"
    ],
  },
  {
    "id": "ch-05",
    "name": " Churidhar",
    "category": "churidars",
    "price": 1399,
    "originalPrice": 1600,
    "fabric": "Muslin churidhar & Rayon pant",
    "description": "Grace meets comfort in this elegant Muslin Churidhar set paired with a soft Rayon Pant. Crafted from lightweight, breathable fabrics, its perfect for everyday wear, office, college, and casual outings. A stylish blend of comfort and timeless elegance.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1399_M_-_XXL_yc8hql",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Soft Muslin Fabric",
      "Comfortable Rayon Pant",
      "Lightweight & Breathable",
      "Perfect for Daily & Casual Wear"
    ],
  },
  {
    "id": "ch-07",
    "name": "Chanderi silk churidhar",
    "category": "churidars",
    "price": 1499,
    "originalPrice": 1999,
    "fabric": "Pure Chanderi Silk-Cotton Blend",
    "description": "Crafted from premium Chanderi silk, it offers a luxurious feel, graceful shine, and exceptional comfort—perfect for festive celebrations, special occasions, and elegant everyday wear.",
    "sizes": [
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/sqo8qmuqhunohgbzgyey",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Chanderi Silk Fabric",
      "Soft & Comfortable Feel",
      "Elegant Traditional Design",
      "Perfect for Festive & Special Occasions"
    ],
  },
  {
    "id": "ch-11",
    "name": "Churidhar",
    "category": "churidars",
    "price": 1499,
    "originalPrice": 2299,
    "fabric": "Roman silk",
    "description": "Designed with premium Roman silk, it offers a smooth texture, graceful drape, and lasting comfort. Perfect for festive occasions, family gatherings, office wear, and special events.",
    "sizes": [
      "3XL",
      "4XL",
      "5XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1499_3XL_-_5XL_h1jyo7",
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Roman Silk Fabric",
      "Soft & Smooth Texture",
      "Elegant & Comfortable Fit",
      "Ideal for Festive & Everyday Wear"
    ],
  },
  {
    "id": "ch-06",
    "name": "Shifon Churidhar",
    "category": "churidars",
    "price": 1999,
    "originalPrice": 3499,
    "fabric": "Shifon",
    "description": "Made from soft, lightweight fabric, it offers a graceful drape and all-day comfort, making it perfect for casual outings, festive occasions, and everyday wear.",
    "sizes": [
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0447_uuyqg0",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0857_lalaal",
     " https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0855_rp8skz",
     "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0858_mcysrs"
    ],
    "washCare": "Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.",
    "deliveryInfo": "Standard delivery time 3-5 days. Free shipping across Kerala.",
    "features": [
      "Premium Soft Chiffon Fabric",
      "Lightweight & Breathable",
      "Elegant & Comfortable Fit",
      "Perfect for Casual & Festive Wear"
    ],
  },
  {
    "id": "ch-02",
    "name": "Churidhar",
    "category": "churidars",
    "price": 2099,
    "originalPrice": 2549,
    "fabric": "Rayon Churidhar & shifon shall",
    "description": "Designed for the festive collegiate look, weightless organza and embellished with delicate hand-embroidered floral motifs along the neckline. Paired with comfortable patiyala pants.",
    "sizes": [
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/2099_2XL_FOUR_COLOUR_jr0xz0",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0688_dt32bj",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0692_awivmr",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0690_c3drti"
    ],
    "washCare": "Dry clean only. Iron on ultra-low heat setting with a protective cloth layer.",
    "deliveryInfo": "Ships within 2 days. Express delivery option available for Kochi and Trivandrum.",
    "features": [
      "Delicate hand-done botanical beadwork",
      "Exquisite scalloped edges on the dupatta",
      "Perfect for campus festivals and formal gatherings"
    ],
    "isBestSeller": true,
  },
  {
    "id": "ku-01",
    "name": "Long Kurta",
    "category": "kurtas",
    "price": 299,
    "originalPrice": 799,
    "fabric": "Cotton",
    "description": "Made from premium-quality cotton, it offers a soft feel, breathable comfort, and a timeless design, making it perfect for daily wear, office, college, and casual outings.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/300_mc7ipo",
    ],
    "washCare": "Dry clean recommended. Gentle hand wash in lukewarm water with wool/silk wash liquid if necessary.",
    "deliveryInfo": "Ships within 24 hours. Delivery within Kerala in 1-2 days.",
    "features": [
      "Premium Cotton Fabric",
      "Soft & Breathable Material",
      "Comfortable Regular Fit",
      "Perfect for Daily & Casual Wear"
    ],
    "isNewArrival": true,
    "isFeatured": true,
    "isBestSeller": true,
  },
  {
    "id": "ku-02",
    "name": "Short Kurti",
    "category": "kurtas",
    "price": 499,
    "originalPrice": 799,
    "fabric": "100% Cotton",
    "description": "Made from premium-quality cotton, it offers a soft feel, breathable comfort, and a timeless design, making it perfect for daily wear, office, college, and casual outings.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/500_S_-_2XL_q4nkwa",
    ],
    "washCare": "Machine wash on cold, gentle cycle. Hang dry in shade. Warm iron while slightly damp for that crisp linen luxury feel.",
    "deliveryInfo": "Ships in 1-2 business days. Delivered in sustainable eco-packaging.",
    "features": [
      "Premium Cotton Fabric",
      "Soft & Breathable Material",
      "Comfortable Regular Fit",
      "Perfect for Daily & Casual Wear"
    ],
  },
  {
    "id": "ku-03",
    "name": "Short Kurta",
    "category": "kurtas",
    "price": 549,
    "originalPrice": 749,
    "fabric": "Imported Cotton",
    "description": "Woven with dedication. This rich saffron-hued kurta features fine hand-spun cotton yarns blended with linen. The slightly irregular, organic texture represents the beauty of traditional slow fashion.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/550_S_-_2XL_evpifk",
    ],
    "washCare": "Gentle hand wash. Do not bleach. Reverse iron.",
    "deliveryInfo": "Standard Kerala delivery in 3 days. Standard rest of India in 5 days.",
    "features": [
      "Premium Imported Cotton Fabric",
      "Soft & Breathable Material",
      "Comfortable Regular Fit",
      "Perfect for Daily & Casual Wear"
    ],
  },
  {
    "id": "ku-04",
    "name": "Short Kurta",
    "category": "kurtas",
    "price": 649,
    "originalPrice": 749,
    "fabric": "Imported Cotton",
    "description": "Woven with dedication. This rich saffron-hued kurta features fine hand-spun cotton yarns blended with linen. The slightly irregular, organic texture represents the beauty of traditional slow fashion.",
    "sizes": [
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/650_XXL_vleeo2",
    ],
    "washCare": "Gentle hand wash. Do not bleach. Reverse iron.",
    "deliveryInfo": "Standard Kerala delivery in 3 days. Standard rest of India in 5 days.",
    "features": [
      "Premium Imported Cotton Fabric",
      "Soft & Breathable Material",
      "Comfortable Regular Fit",
      "Perfect for Daily & Casual Wear"
    ],
  },
  {
    "id": "co-01",
    "name": "2PCS Co-ord-sets",
    "category": "co-ord-sets",
    "price": 399,
    "originalPrice": 3499,
    "fabric": "Mixed Cotton",
    "description": "Crafted from premium mixed cotton fabric, it offers a soft feel, breathable comfort, and a modern coordinated look—perfect for casual outings, travel, office wear, and everyday fashion.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/400_M-2XL_p7sbdv",
    ],
    "washCare": "Dry clean recommended, or machine wash on delicate cycle. Warm iron.",
    "deliveryInfo": "Standard free shipping across India. Ships in 2 days.",
    "features": [
      "Premium Mixed Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish 2-Piece Coordinated Set",
      "Perfect for Daily & Casual Wear"
    ],
    "isFeatured": true,
  },
  {
    "id": "co-02",
    "name": "Cotton Co-ord Set",
    "category": "co-ord-sets",
    "price": 499,
    "originalPrice": 3899,
    "fabric": "Cotton ",
    "description": "Made from premium-quality cotton, it offers a soft feel, breathable comfort, and a timeless design, making it perfect for daily wear, office, college, and casual outings.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_yzmlqj",
    ],
    "washCare": "Dry clean strictly recommended to preserve the silk luster and weave.",
    "deliveryInfo": "Ships within 24-48 hours. Express delivery available across Kerala.",
    "features": [
      "Premium Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish Coordinated Design",
      "Perfect for Daily & Casual Wear"
    ],
    "isNewArrival": true,
  },
  {
    "id": "co-03",
    "name": "Premium Rayon Co-ord Set",
    "category": "co-ord-sets",
    "price": 499,
    "originalPrice": 3199,
    "fabric": "Wrinkle-free Japanese Pleated Crepe",
    "description": "Crafted from high-quality rayon fabric, it offers a soft feel, breathable comfort, and a flattering fit. Perfect for everyday wear, office, travel, and casual outings with effortless style.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_nibgjj",
    ],
    "washCare": "Gentle machine wash or hand wash in cold water. Do not iron directly on pleats.",
    "deliveryInfo": "Standard shipping in 3-5 business days across India.",
    "features": [
      "Premium Soft Rayon Fabric",
      "Lightweight & Breathable",
      "Stylish Coordinated Design",
      "Perfect for Daily & Casual Wear"
    ],
    "isBestSeller": true,
  },
  {
    "id": "co-04",
    "name": "Cotton Co-ord Set",
    "category": "co-ord-sets",
    "price": 499,
    "originalPrice": 3699,
    "fabric": "Mixed Cotton",
    "description": "Crafted from premium mixed cotton fabric, it offers a soft feel, breathable comfort, and a modern coordinated look—perfect for casual outings, travel, office wear, and everyday fashion.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_rrikfc",
    ],
    "washCare": "Hand wash separately in cold water with mild detergent. Line dry in shade.",
    "deliveryInfo": "Ships within 24 hours from Kochi. Free delivery across Kerala.",
    "features": [
      "Premium Mixed Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish 2-Piece Coordinated Set",
      "Perfect for Daily & Casual Wear"
    ],
    "isFeatured": true,
  },
  {
    "id": "co-05",
    "name": "Cotton Co-ord Set",
    "category": "co-ord-sets",
    "price": 549,
    "originalPrice": 2899,
    "fabric": " Cotton",
    "description": "Made from premium-quality cotton, it offers a soft feel, breathable comfort, and a timeless design, making it perfect for daily wear, office, college, and casual outings.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M_-_XXL_pzfqvo",
    ],
    "washCare": "Wash separately before first wear as natural indigo dyes may bleed slightly. Dry in shade.",
    "deliveryInfo": "Standard free shipping across India in 3-5 business days.",
    "features": [
      "Premium Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish Coordinated Design",
      "Perfect for Daily & Casual Wear"
    ],
  },
  {
    "id": "co-06",
    "name": " Pure Cotton Co-ord Set",
    "category": "co-ord-sets",
    "price": 549,
    "originalPrice": 4499,
    "fabric": "100% Cotton ",
    "description": "Crafted from 100% pure cotton, it offers a soft feel, breathable comfort, and a modern coordinated look—perfect for daily wear, office, travel, and casual outings.",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M-XXL_vqpv1m",
    ],
    "washCare": "Dry clean recommended or gentle hand wash in cold water with silk shampoo.",
    "deliveryInfo": "Express shipping available. Ships within 24 hours.",
    "features": [
      "Premium 100% Pure Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish Coordinated Design",
      "Perfect for Daily & Casual Wear"
    ],
    "isNewArrival": true,
  },
  {
    "id": "co-07",
    "name": "Rayon Co-ord Set",
    "category": "co-ord-sets",
    "price": 549,
    "originalPrice": 3299,
    "fabric": "Rayon",
    "description": "Made from premium rayon fabric, it offers a soft touch, breathable comfort, and a flattering fit. Perfect for daily wear, office, travel, and casual outings",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/649_M-XXXL_xsmkh2",
    ],
    "washCare": "Machine wash gentle on cold. Hang dry in shade. Warm iron while slightly damp.",
    "deliveryInfo": "Ships within 1-2 business days. Free delivery across Kerala.",
    "features": [
      "Premium Rayon Fabric",
      "Soft & Breathable Material",
      "Stylish Coordinated Design",
      "Comfortable All-Day Wear"
    ],
  },
  {
    "id": "co-08",
    "name": "Premium Cotton Co-ord Set",
    "category": "co-ord-sets",
    "price": 899,
    "originalPrice": 4999,
    "fabric": "100% Premium Cotton",
    "description": "Crafted from 100% premium cotton, it offers a soft feel, breathable comfort, and a modern coordinated look—perfect for daily wear, office, travel, and casual outings",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/900_M_-_3XL_cdtelu",
    ],
    "washCare": "Dry clean strictly recommended to protect the metallic zari threadwork.",
    "deliveryInfo": "Ships within 24 hours. Express courier delivery across India.",
    "features": [
      "Premium 100% Pure Cotton Fabric",
      "Soft & Breathable Material",
      "Stylish Coordinated Design",
      "Perfect for Daily & Casual Wear"
    ],
    "isFeatured": true,
  },
  {
    "id": "mat-01",
    "name": " Material Set",
    "category": "materials",
    "price": 749,
    "originalPrice": 2299,
    "fabric": "Jaam Cotton",
    "description": "Made from soft, breathable cotton, it offers excellent comfort, durability, and a beautiful finish—ideal for stitching elegant churidhars, kurtas, and ethnic wear.",
    "sizes": [
      "Unstitched (2.5m Top / 2m Bottom)",
      "Custom Tailoring Available"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/750_MT_vzkl0v",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0837_rmlffy",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-31_at_2.12.29_PM_clceiu"
    ],
    "washCare": "Hand wash in cold water with similar colors. Do not wring. Line dry.",
    "deliveryInfo": "Ships within 48 hours. Express shipping available on checkout request via WhatsApp.",
    "features": [
      "Premium Jaam Cotton Fabric",
      "Soft & Breathable Material",
      "Durable & Comfortable Quality",
      "Ideal for Custom Stitching"
    ],
    "isFeatured": true,
  },
  {
    "id": "mat-02",
    "name": " Material ",
    "category": "materials",
    "price": 799,
    "originalPrice": 999,
    "fabric": "Soft Rayon",
    "description": "Premium Soft Rayon Material – Soft, breathable, lightweight, and comfortable fabric with a graceful fall. Ideal for stitching kurtis, churidars, gowns, and ethnic wear.",
    "sizes": [
      "Unstitched (2.5m Top / 2m Bottom)",
      "Custom Tailoring Available"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_MT_vuu2cz",
    ],
    "washCare": "Gentle hand wash in cold water with mild starch or dry clean recommended to preserve gold zari weave.",
    "deliveryInfo": "Ships within 24-48 hours from Thalassery, Kannur, Kerala. Free express delivery across Kerala.",
    "features": [
      "Authentic Kerala handloom weaves",
      "Includes matching Kasavu dupatta with tassels",
      "Lightweight, breathable, and culturally rich"
    ],
    "isNewArrival": true,
    "isBestSeller": true,
  },
  {
    "id": "mat-03",
    "name": "Material",
    "category": "materials",
    "price": 1499,
    "originalPrice": 3499,
    "fabric": "Banaras silk Soft Organza Shawl",
    "description": "An opulent statement unstitched material set for weddings and celebrations. Crafted from sheer Chanderi silk with delicate floral silver and gold zari motifs, paired with a matching bottom fabric and a scalloped organza dupatta.",
    "sizes": [
      "Unstitched (2.5m Top / 2.5m Bottom)",
      "Custom Tailoring Available"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_o8ieim",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/mt_e17ljf"

    ],
    "washCare": "Dry clean strictly recommended to preserve the metallic embroidery and delicate Chanderi silk weave.",
    "deliveryInfo": "Ships within 24 hours. Express delivery across Kerala and India.",
    "features": [
      "Premium Banaras Silk Fabric",
      "Soft & Lightweight Organza Shawl",
      "Elegant Traditional Finish",
      "Ideal for Festive & Wedding Wear"
    ],
    "isFeatured": true,
  },
  {
    "id": "mat-04",
    "name": "Material",
    "category": "materials",
    "price": 1499,
    "originalPrice": 1999,
    "fabric": "chanderi silk",
    "description": "Featuring a luxurious texture, graceful finish, and lightweight comfort, its perfect for creating stunning outfits for festive occasions, weddings, and celebrations.",
    "sizes": [
      "Unstitched (2.5m Top / 2m Bottom)",
      "Custom Tailoring Available"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_z63vn6",
    ],
    "washCare": "Wash separately in cold water before first wear as natural indigo dyes may bleed slightly. Dry in shade.",
    "deliveryInfo": "Standard free shipping across India in 3-5 business days.",
    "features": [
      "Elegant Traditional Finish",
      "Ideal for Festive & Wedding Wear"
    ],
  },
  {
    "id": "mat-05",
    "name": "Material",
    "category": "materials",
    "price": 1799,
    "originalPrice": 1999,
    "fabric": "Crepe Silk",
    "description": "Featuring a smooth texture, graceful drape, and luxurious finish, its perfect for stitching stylish churidhars, kurtas, dresses, and festive outfits.",
    "sizes": [
      "Unstitched (2.5m Top / 2m Bottom)",
      "Custom Tailoring Available"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1800_MT_qrfcw4",
    ],
    "washCare": "Wash separately in cold water before first wear as natural indigo dyes may bleed slightly. Dry in shade.",
    "deliveryInfo": "Standard free shipping across India in 3-5 business days.",
    "features": [
            "Elegant Traditional Finish",
      "Ideal for Festive & Wedding Wear"
    ],
  },
  {
    "id": "pa-03",
    "name": "Palazzo Pants",
    "category": "pants",
    "price": 299,
    "originalPrice": 499,
    "fabric": "Chanderi Silk & Cotton Blend",
    "description": "Flowing wide-leg palazzo pants crafted from a luxurious Chanderi silk and cotton blend. Features subtle gold zari piping along the hem, offering an opulent drape that pairs perfectly with ethnic kurtas and modern tunics alike.",
    "sizes": [
      "28",
      "30",
      "32",
      "36"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0686_o7dibg",
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0851_asvgtj",
       "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0852_gqxrzg",
          "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0853_x7gw8l",
         " https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0854_ym5ezc"
    ],
    "washCare": "Dry clean recommended or gentle hand wash in cold water.",
    "deliveryInfo": "Ships within 24 hours. Free delivery across Kerala.",
    "features": [
      "Luxurious wide-leg palazzo silhouette",
      "Delicate gold zari accent trim along the hem",
      "Soft cotton lining for superior comfort",
      "Versatile styling for festive and formal wear"
    ],
    "isBestSeller": true,
  },
  {
    "id": "pa-02",
    "name": "Boot cut",
    "category": "pants",
    "price": 799,
    "originalPrice": 2199,
    "fabric": "jean",
    "description": "Designed for a flattering fit, they offer all-day comfort with a modern silhouette, making them perfect for office wear, casual outings, and everyday fashion.",
    "sizes": [
      "28",
      "30",
      "32",
      "36"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_28_30_32_36_ekfsux",
    ],
    "washCare": "Dry clean recommended or gentle hand wash in cold water.",
    "deliveryInfo": "Ships within 24 hours. Free delivery across Kerala.",
    "features": [
      "Flattering Boot Cut Design",
      "Soft & Comfortable Fabric",
      "Stretchable & Easy to Wear",
      "Perfect for Daily & Office Wear"
    ],
    "isBestSeller": true,
  },
  {
    "id": "pa-01",
    "name": "Baggy jeans",
    "category": "pants",
    "price": 849,
    "originalPrice": 1899,
    "fabric": "Jean",
    "description": "Designed for a relaxed fit and all-day comfort, they offer a modern streetwear look thats perfect for casual outings, travel, college, and everyday wear.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/850_28_30_32_x3eayr",
    ],
    "washCare": "Gentle machine wash on cold or hand wash. Hang dry in shade. Warm iron while slightly damp.",
    "deliveryInfo": "Ships within 24-48 hours. Express delivery across Kerala in 1-2 business days.",
    "features": [
      "Premium Denim Fabric",
      "Relaxed Baggy Fit",
      "Durable & Comfortable",
      "Perfect for Casual & Everyday Wear"
    ],
    "isNewArrival": true,
  },
  {
    "id": "nw-01",
    "name": "Malabar Cotton Loungewear Set",
    "category": "night-wear",
    "price": 449,
    "originalPrice": 1499,
    "fabric": "100% Pure Soft Cotton",
    "description": "Ultra-soft, breathable cotton nightwear set designed for serene tropical comfort. Features a relaxed button-up top with delicate piping and comfortable drawstring pajama trousers.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/450_emka8u",
    ],
    "washCare": "Machine wash gentle on cold with mild detergent. Hang dry in shade.",
    "deliveryInfo": "Ships within 24 hours. Free delivery across Kerala.",
    "features": [
      "100% pure breathable cotton weave",
      "Relaxed fit with adjustable drawstring waist",
      "Soft contrast piping along collar and cuffs",
      "Ideal for restful sleep and cozy lounging"
    ],
    "isNewArrival": true,
  },
  {
    "id": "nw-02",
    "name": "Rayon Khaftan",
    "category": "night-wear",
    "price": 399,
    "originalPrice":499,
    "fabric": "Premium 100% Pure Rayon",
    "description": "Made from premium soft rayon fabric, it offers a lightweight feel, breathable comfort, and a relaxed fit, making it perfect for a restful nights sleep and comfortable lounging at home.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0687_dxrxvj",
    ],
    "washCare": "Machine wash gentle on cold with mild detergent. Hang dry in shade.",
    "deliveryInfo": "Ships within 24 hours. Free delivery across Kerala.",
    "features": [
      "100% Premium Soft Rayon Fabric",
      "Lightweight & Breathable",
      "Relaxed & Comfortable Fit",
      "Perfect for Nightwear & Loungewear"
    ],
    "isNewArrival": true,
  },
  {
    "id": "pd-01",
    "name": "Prayer Dress",
    "category": "prayer-dresses",
    "price": 399,
    "originalPrice": 499,
    "fabric": "Soft Crepe",
    "description": "Crafted from ultra-soft, breathable 100% cotton, this elegant prayer dress offers complete modest coverage and maximum comfort during daily prayers and peaceful reflection.",
    "sizes": [
      "Free Size"
    ],
    "images": [
      "https://res.cloudinary.com/tlzj92qq/image/upload/v1785482166/IMG_0441_y5ootj.jpg"
    ],
    "washCare": "Machine wash gentle or hand wash in cold water with mild detergent.",
    "deliveryInfo": "Ships within 24 hours. Free shipping across Kerala.",
    "features": [
      "100% Pure Breathable Cotton Fabric",
      "Full Length & Modest Coverage",
      "Soft Integrated Headscarf Design",
      "Easy Slip-on Design for Daily Prayer"
    ],
    "isNewArrival": true,
  },
  {
    "id": "pd-02",
    "name": "Prayer Dress",
    "category": "prayer-dresses",
    "price": 349,
    "originalPrice": 399,
    "fabric": "Soft Crepe",
    "description": "Designed with lightweight and silky-soft viscose rayon for a graceful drape and cool feel. Features comfortable elasticated wrist cuffs and an easy-wear silhouette.",
    "sizes": [
      "Free Size"
    ],
    "images": [
      "https://res.cloudinary.com/tlzj92qq/image/upload/v1785482167/IMG_0439_y1m1jn.jpg"
    ],
    "washCare": "Gentle hand wash in cold water. Line dry in shade.",
    "deliveryInfo": "Ships within 24 hours. Free delivery across Kerala.",
    "features": [
      "Premium Soft Viscose Rayon",
      "Comfortable Elasticated Cuffs",
      "Lightweight & Cool Touch",
      "Ideal for Daily Prayers & Travel"
    ],
    "isNewArrival": true,
  }
];

export const REVIEWS: Review[] = [];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I place an order?',
    answer: 'Simply browse our collections, click on any product, select your size, and tap the "Order via WhatsApp" button. This will open WhatsApp on your phone or computer with a pre-filled message detailing the product and size you want. Our team will immediately assist you to confirm your shipping details and complete the booking.'
  },
  {
    question: 'What are the available payment options?',
    answer: 'Once you place your order request on WhatsApp, we will provide you with secure payment details. We support Google Pay (GPay), PhonePe, Paytm, BHIM UPI, and direct Bank Transfers. Cash on Delivery (COD) is available for selected pin codes inside Kerala.'
  },
  {
    question: 'How do I select the right size?',
    answer: 'We provide a detailed Size Chart on each product page. Our sizes range from XS to XXL. If you are unsure, just text us on WhatsApp! Our customer experience assistants can guide you to find the perfect fit based on your bust and waist measurements.'
  },
  {
    question: 'What are your delivery charges and shipping times?',
    answer: 'We offer FREE standard shipping across Kerala on all orders. Standard shipping to other Indian states is free for orders above ₹1,500 (otherwise a flat ₹100 fee applies). Orders are dispatched within 24-48 hours. Delivery takes 2-3 business days within Kerala and 4-6 business days for the rest of India.'
  },
  {
    question: 'What is your return and exchange policy?',
    answer: 'We want you to be absolutely in love with your purchase. We offer a 7-day hassle-free size exchange policy. If the fit isn’t perfect, contact us on WhatsApp within 7 days of receiving your parcel. The product must be unused, unwashed, and have the original tags intact.'
  },
  {
    question: 'Are the colors exactly as shown in the photos?',
    answer: 'We shoot our products in natural sunlight to capture the truest colors possible. However, due to screen calibration differences on various mobile devices and monitors, slight color variations may occur. Our fabrics are premium, and we ensure the physical product looks even more stunning in person.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80',
    likes: '1.2k',
    comments: '42'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=500&q=80',
    likes: '894',
    comments: '18'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80',
    likes: '2.1k',
    comments: '56'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=500&q=80',
    likes: '1.5k',
    comments: '39'
  }
];
