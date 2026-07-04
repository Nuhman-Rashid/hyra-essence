/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review, FAQItem } from './types';

export const BRAND_NAME = 'HYRA ESSENCE';
export const WHATSAPP_NUMBER = '918590457509';
export const WHATSAPP_LINK_BASE = 'https://wa.me/918590457509';

export const CATEGORIES = [
  {
    id: 'churidars',
    name: 'Churidars',
    description: 'Timeless elegance. Traditional silhouettes reimagined for the modern Kerala woman.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    count: 12
  },
  {
    id: 'kurtas',
    name: 'Kurtas',
    description: 'Effortless grace. Tailored from the finest silks and linens for day-to-night styling.',
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80',
    count: 18
  },
  {
    id: 'tops',
    name: 'Tops & Tunics',
    description: 'Chic minimalism. Refined contemporary cuts designed for daily comfort and poise.',
    image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80',
    count: 15
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'ch-01',
    name: 'Malabar Heritage Kasavu Churidar',
    category: 'churidars',
    price: 3499,
    originalPrice: 4999,
    fabric: 'Handloom Kerala Cotton with Pure Zari Kasavu border',
    description: 'An homage to Kerala’s rich handloom heritage. This premium Churidar set is crafted from pristine ivory handloom cotton, finished with a classic gold kasavu border. Soft, breathable, and designed with a fluid drape that holds its shape gracefully from morning prayers to evening celebrations.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Dry clean recommended to preserve the metallic zari border. Alternatively, gentle hand wash in cold water with mild detergent.',
    deliveryInfo: 'Ships within 24-48 hours from Kochi, Kerala. Standard delivery across Kerala in 2-3 business days. All-India delivery in 4-6 business days.',
    features: [
      'Pure gold zari border handwoven by traditional artisans',
      'Premium breathable organic Kerala cotton',
      'Includes custom-tailored bottom and sheer soft organza dupatta',
      'Designed with modern slim-fit sleeves'
    ],
    isNewArrival: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 32
  },
  {
    id: 'ch-02',
    name: 'Gulnar Pastel Organza Salwar Set',
    category: 'churidars',
    price: 2999,
    originalPrice: 3899,
    fabric: 'Premium Sheer Organza & Silk Crepe Lining',
    description: 'Designed for the festive collegiate look. Featuring a beautiful dusty rose shade, this salwar set is layered with sheer, weightless organza and embellished with delicate hand-embroidered floral motifs along the neckline. Paired with comfortable semi-elasticated tapered pants.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Dry clean only. Iron on ultra-low heat setting with a protective cloth layer.',
    deliveryInfo: 'Ships within 2 days. Express delivery option available for Kochi and Trivandrum.',
    features: [
      'Delicate hand-done botanical beadwork',
      'Premium soft satin lining for ultimate comfort',
      'Exquisite scalloped edges on the dupatta',
      'Perfect for campus festivals and formal gatherings'
    ],
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 24
  },
  {
    id: 'ch-03',
    name: 'Nilgiri Indigo Chanderi Suit',
    category: 'churidars',
    price: 3200,
    originalPrice: 4200,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Hand-block printed using authentic natural vegetable indigo dyes',
      'High-grade Chanderi weave with lightweight feel',
      'Contrast piping details',
      'Breathable cotton lining'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: 'ku-01',
    name: 'Vembanad Ivory Silk Kurta',
    category: 'kurtas',
    price: 1899,
    originalPrice: 2699,
    fabric: 'Premium Tussar Silk Blend',
    description: 'Bask in the serene quietude of Vembanad Lake. This straight-cut classic kurta features an elegant, subtle ivory shade that speaks of quiet luxury. Crafted with a premium silk blend, it offers a soft luster under natural lighting, perfect for campus lectures or weekend high-teas.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Dry clean recommended. Gentle hand wash in lukewarm water with wool/silk wash liquid if necessary.',
    deliveryInfo: 'Ships within 24 hours. Delivery within Kerala in 1-2 days.',
    features: [
      'Exquisite Mandarin collar with delicate slit',
      'Elegant three-quarter sleeves with folded cuff detailing',
      'Deep side slits for effortless movement',
      'Concealed practical side pocket for phone/essentials'
    ],
    isNewArrival: true,
    isFeatured: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 45
  },
  {
    id: 'ku-02',
    name: 'Malabar Rose Linen Kurta',
    category: 'kurtas',
    price: 1699,
    originalPrice: 2299,
    fabric: '100% Belgian Flax Linen',
    description: 'A breath of fresh air. Made from highly breathable 100% Belgian flax linen, this earthy rose-hued kurta gets softer with every single wash. Designed for the ultimate comfort during peak Kerala humidity, with a relaxed, slightly structured silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391265517-35bbadd01209?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Machine wash on cold, gentle cycle. Hang dry in shade. Warm iron while slightly damp for that crisp linen luxury feel.',
    deliveryInfo: 'Ships in 1-2 business days. Delivered in sustainable eco-packaging.',
    features: [
      'Crafted from certified organic flax linen',
      'Highly moisture-wicking and hyper-allergenic',
      'Subtle functional wooden buttons on the front placket',
      'Breathable, relaxed-fit silhouette'
    ],
    rating: 4.6,
    reviewsCount: 15
  },
  {
    id: 'ku-03',
    name: 'Saffron Oasis Hand-woven Kurta',
    category: 'kurtas',
    price: 1990,
    originalPrice: 2790,
    fabric: 'Fine Khadi Cotton & Linen',
    description: 'Woven with dedication. This rich saffron-hued kurta features fine hand-spun cotton yarns blended with linen. The slightly irregular, organic texture represents the beauty of traditional slow fashion.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Gentle hand wash. Do not bleach. Reverse iron.',
    deliveryInfo: 'Standard Kerala delivery in 3 days. Standard rest of India in 5 days.',
    features: [
      'Authentic handloom khadi weave',
      'Stunning vibrant sunset-saffron hue',
      'Breathable and comfortable all year round',
      'Double stitched seams for long-term durability'
    ],
    rating: 4.8,
    reviewsCount: 28
  },
  {
    id: 'tp-01',
    name: 'Aura Linen Cropped Top',
    category: 'tops',
    price: 1199,
    originalPrice: 1799,
    fabric: 'Organic Slub Linen Cotton',
    description: 'Modern minimalism for the young collegian. An ultra-breathable, slightly cropped top featuring a relaxed fit, drop shoulders, and elegant round neck. It pairs seamlessly with high-waisted trousers, skirts, or traditional dhotis for an Indo-Western statement.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Gentle hand wash or machine wash on cold. Lay flat to dry.',
    deliveryInfo: 'Ships within 24 hours. Next-day delivery available for Kochi.',
    features: [
      'Eco-friendly low-impact organic dyes',
      'Relaxed drop-shoulder silhouette',
      'Beautiful minimalist double-stitch line detailing',
      'Side slit vents for a premium drape'
    ],
    isNewArrival: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 51
  },
  {
    id: 'tp-02',
    name: 'Monochrome Linen Resort Tunic',
    category: 'tops',
    price: 1499,
    originalPrice: 1999,
    fabric: 'Premium French Linen',
    description: 'The epitome of high-fashion minimalism. Featuring a rich beige-sand tone, this longline tunic top exudes elegance. Designed with structural side slits and a soft collar, it balances effortless street style with boutique luxury.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Dry clean recommended, or machine wash on delicate cycle. Warm iron.',
    deliveryInfo: 'Standard free shipping across India. Ships in 2 days.',
    features: [
      'Sophisticated high-low asymmetric hemline',
      'Premium breathable French linen fabric',
      'Mother of pearl button highlights',
      'Can be worn as a dress or styled over trousers'
    ],
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 37
  },
  {
    id: 'tp-03',
    name: 'Elysian Meadow Smocked Top',
    category: 'tops',
    price: 1299,
    originalPrice: 1899,
    fabric: 'Soft Cotton Cambric',
    description: 'Charming and soft. A delightful, lightweight cotton cambric top featuring an elegant smocked bodice and delicate puff sleeves. Colored in a subtle pastel mint, it adds a touch of gentle femininity to your casual daily style.',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Hand wash in cold water with similar colors. Do not wring. Line dry.',
    deliveryInfo: 'Ships within 48 hours. Express shipping available on checkout request via WhatsApp.',
    features: [
      'Delicately smocked stretchable bodice',
      'Romantic retro-styled puff sleeves with elastic cuffs',
      '100% fine breathable cotton cambric',
      'Perfect for hot, humid weather'
    ],
    rating: 4.5,
    reviewsCount: 12
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
