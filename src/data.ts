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
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'ch-00',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 1099,
    originalPrice: 1599,
    fabric: 'Rayon top & Cotton Shall',
    description: 'designed for comfort and timeless beauty. The premium rayon top offers a soft, breathable feel with a graceful drape, making it perfect for all-day wear. Paired with a lightweight cotton shawl, this outfit combines sophistication with effortless comfort.',
    sizes: ['L', 'XL', 'XXL' , '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_black_churidhar_pjmehc',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_black_churidhar_pjmehc'
    ],
    washCare: 'Dry clean recommended to preserve the delicate silver embroidery and sheer fabric drape. Alternatively, gentle hand wash in cold water.',
    deliveryInfo: 'Ships within 24-48 hours from Thalassery, Kannur, Kerala. Express delivery across Kerala in 1-2 business days. All-India delivery in 4-6 business days.',
    features: [
        'Premium Soft Rayon Top',
        'Lightweight & Breathable Cotton Shawl',
        'Comfortable Fit for Everyday Wear',
        'Elegant Pakistani-Inspired Design',
        'Suitable for Casual, Office & Festive Occasions',
        'Soft, Skin-Friendly Fabric',
        'Easy to Wash & Maintain'
    ],
    isNewArrival: true,
    isFeatured: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 42
  },
 
  {
      id: 'ch-02',
    name: 'Churidhar',
    category: 'churidars',
    price: 2999,
    originalPrice: 3899,
    fabric: 'Rayon Churidhar & shifon shall',
    description: 'Designed for the festive collegiate look, weightless organza and embellished with delicate hand-embroidered floral motifs along the neckline. Paired with comfortable patiyala pants.',
    sizes: [ 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/2099_2XL_FOUR_COLOUR_jr0xz0',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0688_dt32bj',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0692_awivmr',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0690_c3drti'

    ],
    washCare: 'Dry clean only. Iron on ultra-low heat setting with a protective cloth layer.',
    deliveryInfo: 'Ships within 2 days. Express delivery option available for Kochi and Trivandrum.',
    features: [
      'Delicate hand-done botanical beadwork',
      'Exquisite scalloped edges on the dupatta',
      'Perfect for campus festivals and formal gatherings'
    ],
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 24
  },
  {
    id: 'ch-03',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 3200,
    originalPrice: 4200,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.',
    sizes: ['L', 'XL', 'XXL' , '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1099_L-XXXL_2_xqo76m',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Soft Rayon Top',
        'Lightweight & Breathable Cotton Shawl',
        'Comfortable Fit for Everyday Wear',
        'Elegant Pakistani-Inspired Design',
        'Suitable for Casual, Office & Festive Occasions',
        'Soft, Skin-Friendly Fabric',
        'Easy to Wash & Maintain'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
   {
    id: 'ch-04',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 3200,
    originalPrice: 4200,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.',
    sizes: ['L', 'XL', 'XXL' , '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0572_gqxtjn',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Soft Rayon Top',
        'Lightweight & Breathable Cotton Shawl',
        'Comfortable Fit for Everyday Wear',
        'Elegant Pakistani-Inspired Design',
        'Suitable for Casual, Office & Festive Occasions',
        'Soft, Skin-Friendly Fabric',
        'Easy to Wash & Maintain'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
   {
    id: 'ch-05',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 3200,
    originalPrice: 4200,
    fabric: 'Muslin churidhar & Rayon pant',
    description: 'Grace meets comfort in this elegant Muslin Churidhar set paired with a soft Rayon Pant. Crafted from lightweight, breathable fabrics, its perfect for everyday wear, office, college, and casual outings. A stylish blend of comfort and timeless elegance.',
    sizes: ['M','L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1399_M_-_XXL_yc8hql',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1399_M_-_XXL_yc8hql'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Soft Muslin Fabric',
      'Comfortable Rayon Pant',
      'Lightweight & Breathable',
      'Perfect for Daily & Casual Wear',
    ],
    rating: 4.7,
    reviewsCount: 19
  },
   {
    id: 'ch-06',
    name: 'Shifon Churidhar',
    category: 'churidars',
    price: 1999,
    originalPrice: 3499,
    fabric: 'Shifon',
    description: 'Made from soft, lightweight fabric, it offers a graceful drape and all-day comfort, making it perfect for casual outings, festive occasions, and everyday wear.',
    sizes: [ '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0447_uuyqg0',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0447_uuyqg0'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Soft Chiffon Fabric',
      'Lightweight & Breathable',
      'Elegant & Comfortable Fit',
      'Perfect for Casual & Festive Wear'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
   {
    id: 'ch-07',
    name: 'Chanderi silk churidhar',
    category: 'churidars',
    price: 0,
    originalPrice: 3499,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Crafted from premium Chanderi silk, it offers a luxurious feel, graceful shine, and exceptional comfort—perfect for festive celebrations, special occasions, and elegant everyday wear.',
    sizes: [ '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/sqo8qmuqhunohgbzgyey',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/sqo8qmuqhunohgbzgyey'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Chanderi Silk Fabric',
      'Soft & Comfortable Feel',
      'Elegant Traditional Design',
      'Perfect for Festive & Special Occasions'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: 'ch-08',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 999,
    originalPrice: 1499,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.',
    sizes: ['L', 'XL', 'XXL', '3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/999_L-XXXL_tpqtx9',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/999_L-XXXL_tpqtx9'
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
    id: 'ch-09',
    name: 'Pakistani Churidhar',
    category: 'churidars',
    price: 999,
    originalPrice: 1499,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'Imbued with the mysterious depths of the Nilgiri hills. Deep, authentic indigo dyes are hand-blocked across luxurious Chanderi silk. Rich, subtle sheen that elevates your casual or formal wardrobe instantly.',
    sizes: ['M','L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/999_M_-_2XL_uldods',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
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
    id: 'ch-10',
    name: 'Churidar',
    category: 'churidars',
    price: 1199,
    originalPrice: 1699,
    fabric: 'Roman silk',
    description: 'Made from premium-quality Roman silk, it features a smooth texture, rich finish, and comfortable fit, making it an ideal choice for festive occasions, parties, and elegant everyday wear.',
    sizes: ['M','L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1199_M_-_XXL_vfwww6',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1199_M_-_XXL_vfwww6'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Roman Silk Fabric',
      'Smooth & Luxurious Finish',
      'Comfortable & Elegant Fit',
      'Perfect for Festive & Party Wear'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: 'ch-11',
    name: 'Churidhar',
    category: 'churidars',
    price: 1499,
    originalPrice: 2299,
    fabric: 'Roman silk',
    description: 'Designed with premium Roman silk, it offers a smooth texture, graceful drape, and lasting comfort. Perfect for festive occasions, family gatherings, office wear, and special events.',
    sizes: [ '3XL','4XL','5XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1499_3XL_-_5XL_h1jyo7',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1499_3XL_-_5XL_h1jyo7'
    ],
    washCare: 'Wash separately in cold water. Natural dyes may bleed slightly during the first wash. Dry in shade.',
    deliveryInfo: 'Standard delivery time 3-5 days. Free shipping across Kerala.',
    features: [
      'Premium Roman Silk Fabric',
      'Soft & Smooth Texture',
      'Elegant & Comfortable Fit',
      'Ideal for Festive & Everyday Wear'
    ],
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: 'ku-01',
    name: 'Long Kurta',
    category: 'kurtas',
    price: 299,
    originalPrice: 799,
    fabric: 'Premium Tussar Silk Blend',
    description: 'Bask in the serene quietude of Vembanad Lake. This straight-cut classic kurta features an elegant, subtle ivory shade that speaks of quiet luxury. Crafted with a premium silk blend, it offers a soft luster under natural lighting, perfect for campus lectures or weekend high-teas.',
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/300_mc7ipo',
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80'
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
    price: 499,
    originalPrice: 799,
    fabric: '100% Belgian Flax Linen',
    description: 'A breath of fresh air. Made from highly breathable 100% Belgian flax linen, this earthy rose-hued kurta gets softer with every single wash. Designed for the ultimate comfort during peak Kerala humidity, with a relaxed, slightly structured silhouette.',
    sizes: ['S', 'M', 'L', 'XL','XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/500_S_-_2XL_q4nkwa',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
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
    price: 549,
    originalPrice: 749,
    fabric: 'Fine Khadi Cotton & Linen',
    description: 'Woven with dedication. This rich saffron-hued kurta features fine hand-spun cotton yarns blended with linen. The slightly irregular, organic texture represents the beauty of traditional slow fashion.',
    sizes: ['S','M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/550_S_-_2XL_evpifk',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
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
    id: 'ku-04',
    name: 'Saffron Oasis Hand-woven Kurta',
    category: 'kurtas',
    price: 649,
    originalPrice: 749,
    fabric: 'Fine Khadi Cotton & Linen',
    description: 'Woven with dedication. This rich saffron-hued kurta features fine hand-spun cotton yarns blended with linen. The slightly irregular, organic texture represents the beauty of traditional slow fashion.',
    sizes: [ 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/650_XXL_vleeo2',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
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
    id: 'co-01',
    name: 'Elysian Premium Linen Co-ord Set',
    category: 'co-ord-sets',
    price: 399,
    originalPrice: 3499,
    fabric: 'Premium French Linen',
    description: 'The epitome of contemporary fashion. Featuring a perfectly matched linen shirt and trousers set. Colored in a rich, minimalist beige-sand tone, it offers effortless elegance and premium comfort for both casual outings and workspace chic.',
    sizes: [ 'M', 'L', 'XL','XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/400_M-2XL_p7sbdv',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/400_M-2XL_p7sbdv'
    ],
    washCare: 'Dry clean recommended, or machine wash on delicate cycle. Warm iron.',
    deliveryInfo: 'Standard free shipping across India. Ships in 2 days.',
    features: [
      'Sophisticated double-breasted matching silhouette',
      'Premium breathable French linen fabric',
      'Straight-fit trousers with comfy semi-elasticated waist',
      'Highly versatile matching elements'
    ],
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 37
  },
  {
    id: 'co-02',
    name: 'Malabar Emerald Silk Co-ord Set',
    category: 'co-ord-sets',
    price: 499,
    originalPrice: 3899,
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    description: 'A luxurious emerald green matching ensemble crafted from pure Chanderi silk. Features a tailored mandarin-collar tunic paired with wide-leg silk palazzo trousers for an effortlessly regal silhouette.',
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_yzmlqj',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_yzmlqj'
    ],
    washCare: 'Dry clean strictly recommended to preserve the silk luster and weave.',
    deliveryInfo: 'Ships within 24-48 hours. Express delivery available across Kerala.',
    features: [
      'Tailored mandarin collar with subtle piping',
      'Fluid wide-leg palazzo trousers with pockets',
      'Breathable Chanderi silk with soft cotton lining',
      'Ideal for festive gatherings and luxury lounging'
    ],
    isNewArrival: true,
    rating: 4.9,
    reviewsCount: 24
  },
  {
    id: 'co-03',
    name: 'Saffron Sunset Pleated Co-ord Set',
    category: 'co-ord-sets',
    price: 499,
    originalPrice: 3199,
    fabric: 'Wrinkle-free Japanese Pleated Crepe',
    description: 'Vibrant yet refined, this saffron sunset ensemble offers fluid motion with fine micro-pleating. Includes a relaxed drop-shoulder button-down shirt and matching elasticated high-waist trousers.',
    sizes: [ 'M', 'L', 'XL','XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_nibgjj',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_nibgjj'
    ],
    washCare: 'Gentle machine wash or hand wash in cold water. Do not iron directly on pleats.',
    deliveryInfo: 'Standard shipping in 3-5 business days across India.',
    features: [
      'Signature permanent micro-pleated texture',
      'Wrinkle-resistant fabric ideal for travel',
      'Comfortable high-rise elasticated waistband',
      'Relaxed drop-shoulder contemporary cut'
    ],
    isBestSeller: true,
    rating: 4.7,
    reviewsCount: 42
  },
  {
    id: 'co-04',
    name: 'Vembanad Ivory Handloom Co-ord Set',
    category: 'co-ord-sets',
    price: 499,
    originalPrice: 3699,
    fabric: '100% Handloom Organic Cotton',
    description: 'Inspired by the tranquil waters of Vembanad Lake, this pristine ivory co-ord set features subtle gold zari piping along the cuffs and collar, paired with tapered ankle-length trousers.',
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_rrikfc',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/499_M-XXL_rrikfc'
    ],
    washCare: 'Hand wash separately in cold water with mild detergent. Line dry in shade.',
    deliveryInfo: 'Ships within 24 hours from Kochi. Free delivery across Kerala.',
    features: [
      'Authentic Kerala handloom organic cotton weave',
      'Delicate metallic gold zari accent trim',
      'Tapered ankle-length trousers with side slits',
      'Ultra-soft breathable feel for tropical climates'
    ],
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: 'co-05',
    name: 'Nilgiri Indigo Block-Print Co-ord Set',
    category: 'co-ord-sets',
    price: 549,
    originalPrice: 2899,
    fabric: 'Pure Jaipur Cotton Cambric',
    description: 'Hand-block printed with natural vegetable indigo dyes. Features a contemporary asymmetrical high-low tunic paired with comfortable matching straight culottes.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M_-_XXL_pzfqvo',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M_-_XXL_pzfqvo'
    ],
    washCare: 'Wash separately before first wear as natural indigo dyes may bleed slightly. Dry in shade.',
    deliveryInfo: 'Standard free shipping across India in 3-5 business days.',
    features: [
      'Traditional hand-carved wooden block prints',
      'Authentic natural vegetable indigo dyeing',
      'Modern asymmetrical high-low hemline',
      'Relaxed straight-leg culottes with elastic waist'
    ],
    rating: 4.6,
    reviewsCount: 18
  },
  {
    id: 'co-06',
    name: 'Royal Rosewood Satin-Silk Co-ord Set',
    category: 'co-ord-sets',
    price: 549,
    originalPrice: 4499,
    fabric: 'Premium Modal Satin Silk',
    description: 'Ultra-smooth and deeply luminous, this rosewood satin co-ord set is designed for evening elegance and festive celebrations. Comes with a chic tie-waist wrap top and flowing palazzo pants.',
    sizes: ['M', 'L', 'XL','XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M-XXL_vqpv1m',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/549_M-XXL_vqpv1m'
    ],
    washCare: 'Dry clean recommended or gentle hand wash in cold water with silk shampoo.',
    deliveryInfo: 'Express shipping available. Ships within 24 hours.',
    features: [
      'Lustrous modal satin silk with fluid drape',
      'Adjustable wrap-around kimono style waist tie',
      'Wide-leg flowing palazzo trousers',
      'Rich jewel-toned rosewood colorway'
    ],
    isNewArrival: true,
    rating: 4.8,
    reviewsCount: 29
  },
  {
    id: 'co-07',
    name: 'Kochi Pastel Mint Linen Co-ord Set',
    category: 'co-ord-sets',
    price: 649,
    originalPrice: 3299,
    fabric: 'Pure Belgian Flax Linen',
    description: 'Refreshing pastel mint linen tailored into a modern resort-wear silhouette. Features a button-down short-sleeve collared shirt and relaxed drawstring wide-leg trousers.',
    sizes: [ 'M', 'L', 'XL', 'XXL','3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/649_M-XXXL_xsmkh2',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/649_M-XXXL_xsmkh2'
    ],
    washCare: 'Machine wash gentle on cold. Hang dry in shade. Warm iron while slightly damp.',
    deliveryInfo: 'Ships within 1-2 business days. Free delivery across Kerala.',
    features: [
      '100% natural Belgian flax linen construction',
      'Resort-collar short sleeve button-up shirt',
      'Drawstring waist with deep functional pockets',
      'Soft pastel mint shade perfect for summer'
    ],
    rating: 4.7,
    reviewsCount: 22
  },
  {
    id: 'co-08',
    name: 'Thalassery Antique Gold Brocade Co-ord Set',
    category: 'co-ord-sets',
    price: 899,
    originalPrice: 4999,
    fabric: 'Chanderi Silk with Zari Brocade',
    description: 'An opulent heritage-meets-modern co-ord set featuring delicate antique gold metallic threadwork across a rich taupe canvas. Paired with tailored cigarette trousers.',
    sizes: ['M', 'L', 'XL', 'XXL','3XL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/900_M_-_3XL_cdtelu',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/900_M_-_3XL_cdtelu'
    ],
    washCare: 'Dry clean strictly recommended to protect the metallic zari threadwork.',
    deliveryInfo: 'Ships within 24 hours. Express courier delivery across India.',
    features: [
      'Intricate antique gold metallic zari weaving',
      'Tailored structured kurta silhouette with slit cuffs',
      'Matching cigarette pants with semi-elasticated waist',
      'Luxurious statement attire for special occasions'
    ],
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 35
  },
  {
    id: 'mat-01',
    name: 'Elysian Meadow Unstitched Material Set',
    category: 'materials',
    price: 749,
    originalPrice: 2299,
    fabric: 'Premium Soft Cotton Cambric',
    description: 'Charming, custom-tailorable, and soft. A delightful, lightweight cotton cambric dress material set featuring pre-designed beautiful embroidery layouts. Colored in a subtle pastel mint, it allows you to custom stitch the perfect fit and custom silhouette.',
    sizes: ['Unstitched (2.5m Top / 2m Bottom)', 'Custom Tailoring Available'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/750_MT_vzkl0v',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/750_MT_vzkl0v'
    ],
    washCare: 'Hand wash in cold water with similar colors. Do not wring. Line dry.',
    deliveryInfo: 'Ships within 48 hours. Express shipping available on checkout request via WhatsApp.',
    features: [
      'Delicately embroidered bodice layout',
      'Includes matching pure cotton dupatta',
      '100% fine breathable cotton cambric',
      'Perfect for hot, humid weather'
    ],
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 19
  },
  {
    id: 'mat-02',
    name: 'Malabar Kasavu Pure Handloom Material Set',
    category: 'materials',
    price: 799,
    originalPrice: 2599,
    fabric: 'Pure Kerala Handloom Cotton with Gold Zari',
    description: 'Embody traditional grace with our authentic Malabar Kasavu unstitched dress material. Hand-woven by master artisans in Kerala, featuring rich antique gold zari borders across an off-white breathable cotton canvas.',
    sizes: ['Unstitched (2.5m Top / 2m Bottom)', 'Custom Tailoring Available'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_MT_vuu2cz',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_MT_vuu2cz'
    ],
    washCare: 'Gentle hand wash in cold water with mild starch or dry clean recommended to preserve gold zari weave.',
    deliveryInfo: 'Ships within 24-48 hours from Thalassery, Kannur, Kerala. Free express delivery across Kerala.',
    features: [
      'Authentic Kerala handloom weaves',
      'Intricate antique gold zari border detailing',
      'Includes matching Kasavu dupatta with tassels',
      'Lightweight, breathable, and culturally rich'
    ],
    isNewArrival: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: 'mat-03',
    name: 'Royal Chanderi Silk Zari Embroidered Material',
    category: 'materials',
    price: 1499,
    originalPrice: 3499,
    fabric: 'Pure Chanderi Silk with Organza Dupatta',
    description: 'An opulent statement unstitched material set for weddings and celebrations. Crafted from sheer Chanderi silk with delicate floral silver and gold zari motifs, paired with a matching bottom fabric and a scalloped organza dupatta.',
    sizes: ['Unstitched (2.5m Top / 2.5m Bottom)', 'Custom Tailoring Available'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_o8ieim',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_o8ieim'
    ],
    washCare: 'Dry clean strictly recommended to preserve the metallic embroidery and delicate Chanderi silk weave.',
    deliveryInfo: 'Ships within 24 hours. Express delivery across Kerala and India.',
    features: [
      'Sheer Chanderi silk with rich zari embroidery',
      'Scalloped embroidered organza dupatta',
      'Soft cotton lining material included',
      'Ideal for festive occasions and custom boutique tailoring'
    ],
    isFeatured: true,
    rating: 4.7,
    reviewsCount: 24
  },
  {
    id: 'mat-04',
    name: 'Artisan Indigo Hand-Blocked Cambric Material',
    category: 'materials',
    price: 1499,
    originalPrice: 1999,
    fabric: '100% Organic Cotton Cambric',
    description: 'Infused with deep natural indigo dyes and traditional wooden block prints. This lightweight unstitched suit material set offers supreme summer comfort, featuring distinct floral block motifs and a matching printed chiffon dupatta.',
    sizes: ['Unstitched (2.5m Top / 2m Bottom)', 'Custom Tailoring Available'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_z63vn6',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1500_MT_z63vn6'
    ],
    washCare: 'Wash separately in cold water before first wear as natural indigo dyes may bleed slightly. Dry in shade.',
    deliveryInfo: 'Standard free shipping across India in 3-5 business days.',
    features: [
      'Authentic hand-blocked floral motifs',
      'Deep natural indigo vegetable dyes',
      'Super-soft cotton cambric running fabric',
      'Includes feather-light printed chiffon dupatta'
    ],
    rating: 4.6,
    reviewsCount: 15
  },
  {
    id: 'mat-05',
    name: 'Artisan Indigo Hand-Blocked Cambric Material',
    category: 'materials',
    price: 1799,
    originalPrice: 1999,
    fabric: '100% Organic Cotton Cambric',
    description: 'Infused with deep natural indigo dyes and traditional wooden block prints. This lightweight unstitched suit material set offers supreme summer comfort, featuring distinct floral block motifs and a matching printed chiffon dupatta.',
    sizes: ['Unstitched (2.5m Top / 2m Bottom)', 'Custom Tailoring Available'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1800_MT_qrfcw4',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/1800_MT_qrfcw4'
    ],
    washCare: 'Wash separately in cold water before first wear as natural indigo dyes may bleed slightly. Dry in shade.',
    deliveryInfo: 'Standard free shipping across India in 3-5 business days.',
    features: [
      'Authentic hand-blocked floral motifs',
      'Deep natural indigo vegetable dyes',
      'Super-soft cotton cambric running fabric',
      'Includes feather-light printed chiffon dupatta'
    ],
    rating: 4.6,
    reviewsCount: 15
  },
  {
    id: 'pa-01',
    name: 'Malabar Linen Straight Pants',
    category: 'pants',
    price: 849,
    originalPrice: 1899,
    fabric: '100% Belgian Flax Linen',
    description: 'Effortlessly tailored high-waist straight pants made from breathable 100% Belgian flax linen. Designed for everyday elegance, featuring functional side pockets, an elasticated back waist for all-day comfort, and a clean structured front.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/850_28_30_32_x3eayr',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/850_28_30_32_x3eayr'
    ],
    washCare: 'Gentle machine wash on cold or hand wash. Hang dry in shade. Warm iron while slightly damp.',
    deliveryInfo: 'Ships within 24-48 hours. Express delivery across Kerala in 1-2 business days.',
    features: [
      '100% natural Belgian flax linen construction',
      'Comfortable high-rise fit with elasticated back waist',
      'Deep functional side pockets',
      'Breathable lightweight feel for tropical climates'
    ],
    isNewArrival: true,
    rating: 4.8,
    reviewsCount: 19
  },
  {
    id: 'pa-02',
    name: 'Vembanad Silk Blend Palazzo Pants',
    category: 'pants',
    price: 799,
    originalPrice: 2199,
    fabric: 'Chanderi Silk & Cotton Blend',
    description: 'Flowing wide-leg palazzo pants crafted from a luxurious Chanderi silk and cotton blend. Features subtle gold zari piping along the hem, offering an opulent drape that pairs perfectly with ethnic kurtas and modern tunics alike.',
    sizes: ['28','30','32','36'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_28_30_32_36_ekfsux',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/799_28_30_32_36_ekfsux'
    ],
    washCare: 'Dry clean recommended or gentle hand wash in cold water.',
    deliveryInfo: 'Ships within 24 hours. Free delivery across Kerala.',
    features: [
      'Luxurious wide-leg palazzo silhouette',
      'Delicate gold zari accent trim along the hem',
      'Soft cotton lining for superior comfort',
      'Versatile styling for festive and formal wear'
    ],
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 27
  },
  {
    id: 'pa-03',
    name: 'Vembanad Silk Blend Palazzo Pants',
    category: 'pants',
    price: 799,
    originalPrice: 2199,
    fabric: 'Chanderi Silk & Cotton Blend',
    description: 'Flowing wide-leg palazzo pants crafted from a luxurious Chanderi silk and cotton blend. Features subtle gold zari piping along the hem, offering an opulent drape that pairs perfectly with ethnic kurtas and modern tunics alike.',
    sizes: ['28','30','32','36'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0686_o7dibg',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/IMG_0686_o7dibg'
    ],
    washCare: 'Dry clean recommended or gentle hand wash in cold water.',
    deliveryInfo: 'Ships within 24 hours. Free delivery across Kerala.',
    features: [
      'Luxurious wide-leg palazzo silhouette',
      'Delicate gold zari accent trim along the hem',
      'Soft cotton lining for superior comfort',
      'Versatile styling for festive and formal wear'
    ],
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 27
  },
  {
    id: 'nw-01',
    name: 'Malabar Cotton Loungewear Set',
    category: 'night-wear',
    price: 449,
    originalPrice: 1499,
    fabric: '100% Pure Soft Cotton',
    description: 'Ultra-soft, breathable cotton nightwear set designed for serene tropical comfort. Features a relaxed button-up top with delicate piping and comfortable drawstring pajama trousers.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/450_emka8u',
      'https://res.cloudinary.com/blujydjk/image/upload/f_auto,q_auto/450_emka8u'
    ],
    washCare: 'Machine wash gentle on cold with mild detergent. Hang dry in shade.',
    deliveryInfo: 'Ships within 24 hours. Free delivery across Kerala.',
    features: [
      '100% pure breathable cotton weave',
      'Relaxed fit with adjustable drawstring waist',
      'Soft contrast piping along collar and cuffs',
      'Ideal for restful sleep and cozy lounging'
    ],
    isNewArrival: true,
    rating: 4.8,
    reviewsCount: 16
  },
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
