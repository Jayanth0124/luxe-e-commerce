// 1. Update the interface to use 'images' array
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[]; // <-- Changed from image to images array
}

// 2. Your Product Data
export const products: Product[] = [
  {
    id: 'rel-1',
    title: 'Tirupati Balaji Office File',
    price: 85,
    // Add your multiple image paths here. I've duplicated the primary one as an example.
    images: [
      'images/religious/balaji.png', 
      'images/religious/balaji.png', // Replace with your 2nd image
      'images/religious/balaji.png'  // Replace with your 3rd image
    ],
    category: 'Religious',
    description: 'Premium office file with beautiful Tirupati Balaji design. Perfect for office and personal use.'
  },
  {
    id: 'rel-2',
    title: 'Lakshmi Saraswati Ganesha File',
    price: 85,
    images: ['images/religious/lakshmi.png', 'images/religious/lakshmi.png'],
    category: 'Religious',
    description: 'Auspicious office file with Lakshmi, Saraswati and Ganesha. Brings prosperity.'
  },
  {
    id: 'rel-3',
    title: 'Ganesha Pink Designer File',
    price: 85,
    images: ['images/religious/ganesh.png', 'images/religious/ganesh.png'],
    category: 'Religious',
    description: 'Beautiful pink office file with Lord Ganesha design. Auspicious and elegant.'
  },
  {
    id: 'rel-4',
    title: 'Ram Darbar Religious File',
    price: 450,
    images: ['images/religious/ram.png', 'images/religious/ram.png'],
    category: 'Religious',
    description: 'Beautiful Ram Darbar office file with Lord Ram, Sita, Lakshman and Hanuman.'
  },

  {
    id: 'des-1',
    title: 'Floral Designer File',
    price: 75,
    images: ['images/designer/floral.png', 'images/designer/floral.png'],
    category: 'Designer',
    description: 'Elegant floral design office file with colorful flowers. Adds beauty to your workspace.'
  },
  {
    id: 'des-2',
    title: 'Peacock Designer File',
    price: 80,
    images: ['images/designer/peacock.png', 'images/designer/peacock.png'],
    category: 'Designer',
    description: 'Beautiful peacock design office file. Vibrant colors and artistic design.'
  },
  {
    id: 'des-3',
    title: 'ManiKanta Green Leaves File',
    price: 90,
    images: ['images/designer/green.png', 'images/designer/green.png'],
    category: 'Designer',
    description: 'Sree ManiKanta designer file with beautiful green leaves pattern. Nature inspired.'
  },
  {
    id: 'des-4',
    title: 'ManiKanta Purple Floral File',
    price: 75,
    images: ['images/designer/purple.png', 'images/designer/purple.png'],
    category: 'Designer',
    description: 'Sree ManiKanta designer file with elegant purple floral design. Artistic pattern.'
  },
  {
    id: 'des-5',
    title: 'ManiKanta Purple Neon File',
    price: 95,
    images: ['images/designer/neon.png', 'images/designer/neon.png'],
    category: 'Designer',
    description: 'Sree ManiKanta designer file with vibrant purple neon floral design. Modern style.'
  },
  {
    id: 'des-6',
    title: 'ManiKanta Green Abstract File',
    price: 90,
    images: ['images/designer/green_floral.png', 'images/designer/green_floral.png'],
    category: 'Designer',
    description: 'Sree ManiKanta designer file with elegant green abstract wave pattern. Modern and artistic.'
  },
  {
    id: 'des-7',
    title: 'Butterfly Floral Designer File',
    price: 90,
    images: ['images/designer/butterfly.png', 'images/designer/butterfly.png'],
    category: 'Designer',
    description: 'Elegant blue butterfly and floral design file. Beautiful artistic patterns on both covers.'
  },
  {
    id: 'std-1',
    title: 'Special Plastic Coated File - Yellow',
    price: 70,
    images: ['images/standard/yellow.png', 'images/standard/yellow.png'],
    category: 'Standard',
    description: 'Durable yellow plastic coated office file. Long-lasting and water-resistant.'
  },
  {
    id: 'std-2',
    title: 'Ordinary File - Yellow Band',
    price: 65,
    images: ['images/standard/yband.png', 'images/standard/yband.png'],
    category: 'Standard',
    description: 'Traditional ordinary file with yellow band. Classic design for everyday use.'
  },
  {
    id: 'std-3',
    title: 'Ordinary File - Brown Band',
    price: 65,
    images: ['images/standard/br_band.png', 'images/standard/br_band.png'],
    category: 'Standard',
    description: 'Traditional ordinary file with brown band. Durable and reliable choice.'
  },
  {
    id: 'std-4',
    title: 'Deluxe Lace File - Brown',
    price: 75,
    images: ['images/standard/deluxe.png', 'images/standard/deluxe.png'],
    category: 'Standard',
    description: 'Sree ManiKanta deluxe lace file in classic brown. Simple and professional.'
  },
  {
    id: 'std-5',
    title: 'Ordinary Mandala Pattern File',
    price: 75,
    images: ['images/standard/mandala.png', 'images/standard/mandala.png'],
    category: 'Standard',
    description: 'Colorful ordinary file with traditional mandala pattern. Tied ribbon closure.'
  },
  {
    id: 'std-6',
    title: 'Special Plastic Coated File - Pink',
    price: 70,
    images: ['images/standard/pink.png', 'images/standard/pink.png'],
    category: 'Standard',
    description: 'Durable pink plastic coated office file. Long-lasting, water-resistant with elegant look.'
  },
  
  {
    id: 'box-1',
    title: 'Blue Diamond Pattern File',
    price: 90,
    images: ['images/box/blue.png', 'images/box/blue.png'],
    category: 'Box File',
    description: 'Classic blue diamond pattern box file. Spacious and stylish storage solution.'
  },
  {
    id: 'box-2',
    title: 'Metro Office Pink Box File',
    price: 90,
    images: ['images/box/pink.png', 'images/box/pink.png'],
    category: 'Box File',
    description: 'Stylish pink metro office box file. Spacious storage with elegant wave pattern.'
  },
  {
    id: 'box-3',
    title: 'Brown Jute Pattern Box File',
    price: 90,
    images: ['images/box/brown.png', 'images/box/brown.png'],
    category: 'Box File',
    description: 'Classic brown jute pattern box file. Eco-friendly look with sturdy construction.'
  },
  {
    id: 'prm-1',
    title: 'Super Special Orange File',
    price: 95,
    images: ['images/premium/orange.png', 'images/premium/orange.png'],
    category: 'Customized',
    description: 'Premium orange super special office file. Sturdy and professional looking.'
  },
  {
    id: 'prm-2',
    title: 'Rainbow Deluxe Thick File',
    price: 95,
    images: ['images/premium/blue.png', 'images/premium/blue.png'],
    category: 'Customized',
    description: 'Heavy duty deluxe thick office file with cobra spring clip. Maximum capacity.'
  },
  {
    id: 'prm-3',
    title: 'Indexed Deluxe Butterfly File',
    price: 95,
    images: ['images/premium/butterfly.png', 'images/premium/butterfly.png'],
    category: 'Customized',
    description: 'Sree ManiKanta indexed deluxe file with butterfly design. A to Z indexed tabs.'
  },
   {
    id: 'prm-4',
    title: 'Ganesha Indexed Deluxe File',
    price: 95,
    images: ['images/premium/ganesha.png', 'images/premium/ganesha.png'],
    category: 'Customized',
    description: 'Premium indexed deluxe file with Lord Ganesha and temple design. Galaxy themed with A to Z tabs.'
  },
];

// 3. Export Categories
export const categories = ['All', 'Religious', 'Designer', 'Standard', 'Box File', 'Customized'];