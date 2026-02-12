// 1. Define the interface HERE to break the circular dependency
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// 2. Your Product Data
export const products: Product[] = [
  {
    id: 'rel-1',
    title: 'Tirupati Balaji Office File',
    price: 85,
    image: 'images/religious/balaji.png',
    category: 'Religious',
    description: 'Premium office file with beautiful Tirupati Balaji design. Perfect for office and personal use.'
  },
  {
    id: 'rel-2',
    title: 'Lakshmi Saraswati Ganesha File',
    price: 85,
    image: 'images/religious/lakshmi.png',
    category: 'Religious',
    description: 'Auspicious office file with Lakshmi, Saraswati and Ganesha. Brings prosperity.'
  },
  {
    id: 'rel-3',
    title: 'Ganesha Pink Designer File',
    price: 85,
    image: 'images/religious/ganesh.png',
    category: 'Religious',
    description: 'Beautiful pink office file with Lord Ganesha design. Auspicious and elegant.'
  },
  {
    id: 'rel-4',
    title: 'Ram Darbar Religious File',
    price: 450,
    image: 'images/religious/ram.png',
    category: 'Religious',
    description: 'Beautiful Ram Darbar office file with Lord Ram, Sita, Lakshman and Hanuman.'
  },

  {
    id: 'des-1',
    title: 'Floral Designer File',
    price: 75,
    image: 'images/designer/floral.png',
    category: 'Designer',
    description: 'Elegant floral design office file with colorful flowers. Adds beauty to your workspace.'
  },
  {
    id: 'des-2',
    title: 'Peacock Designer File',
    price: 80,
    image: 'images/designer/peacock.png',
    category: 'Designer',
    description: 'Beautiful peacock design office file. Vibrant colors and artistic design.'
  },
  {
    id: 'des-3',
    title: 'ManiKanta Green Leaves File',
    price: 90,
    image: 'images/designer/green.png',
    category: 'Designer',
    description: 'Sree ManiKanta designer file with beautiful green leaves pattern. Nature inspired.'
  },
  {
    id: 'des-4',
    title: 'ManiKanta Purple Floral File',
    price: 75,
    image: 'images/designer/purple.png',
    category: 'Designer',
    description: 'Sree ManiKanta designer file with elegant purple floral design. Artistic pattern.'
  },
  {
    id: 'des-5',
    title: 'ManiKanta Purple Neon File',
    price: 95,
    image: 'images/designer/neon.png',
    category: 'Designer',
    description: 'Sree ManiKanta designer file with vibrant purple neon floral design. Modern style.'
  },
  {
    id: 'des-6',
    title: 'ManiKanta Green Abstract File',
    price: 90,
    image: 'images/designer/green_floral.png',
    category: 'Designer',
    description: 'Sree ManiKanta designer file with elegant green abstract wave pattern. Modern and artistic.'
  },
  {
    id: 'des-7',
    title: 'Butterfly Floral Designer File',
    price: 90,
    image: 'images/designer/butterfly.png',
    category: 'Designer',
    description: 'Elegant blue butterfly and floral design file. Beautiful artistic patterns on both covers.'
  },
  {
    id: 'std-1',
    title: 'Special Plastic Coated File - Yellow',
    price: 70,
    image: 'images/standard/yellow.png',
    category: 'Standard',
    description: 'Durable yellow plastic coated office file. Long-lasting and water-resistant.'
  },
  {
    id: 'std-2',
    title: 'Ordinary File - Yellow Band',
    price: 65,
    image: 'images/standard/yband.png',
    category: 'Standard',
    description: 'Traditional ordinary file with yellow band. Classic design for everyday use.'
  },
  {
    id: 'std-3',
    title: 'Ordinary File - Brown Band',
    price: 65,
    image: 'images/standard/br_band.png',
    category: 'Standard',
    description: 'Traditional ordinary file with brown band. Durable and reliable choice.'
  },
  {
    id: 'std-4',
    title: 'Deluxe Lace File - Brown',
    price: 75,
    image: 'images/standard/deluxe.png',
    category: 'Standard',
    description: 'Sree ManiKanta deluxe lace file in classic brown. Simple and professional.'
  },
  {
    id: 'std-5',
    title: 'Ordinary Mandala Pattern File',
    price: 75,
    image: 'images/standard/mandala.png',
    category: 'Standard',
    description: 'Colorful ordinary file with traditional mandala pattern. Tied ribbon closure.'
  },
  {
    id: 'std-6',
    title: 'Special Plastic Coated File - Pink',
    price: 70,
    image: 'images/standard/pink.png',
    category: 'Standard',
    description: 'Durable pink plastic coated office file. Long-lasting, water-resistant with elegant look.'
  },
  
  {
    id: 'box-1',
    title: 'Blue Diamond Pattern File',
    price: 90,
    image: 'images/box/blue.png',
    category: 'Box File',
    description: 'Classic blue diamond pattern box file. Spacious and stylish storage solution.'
  },
  {
    id: 'box-2',
    title: 'Metro Office Pink Box File',
    price: 90,
    image: 'images/box/pink.png',
    category: 'Box File',
    description: 'Stylish pink metro office box file. Spacious storage with elegant wave pattern.'
  },
  {
    id: 'box-3',
    title: 'Brown Jute Pattern Box File',
    price: 90,
    image: 'images/box/brown.png',
    category: 'Box File',
    description: 'Classic brown jute pattern box file. Eco-friendly look with sturdy construction.'
  },
  {
    id: 'prm-1',
    title: 'Super Special Orange File',
    price: 95,
    image: 'images/premium/orange.png',
    category: 'Premium',
    description: 'Premium orange super special office file. Sturdy and professional looking.'
  },
  {
    id: 'prm-2',
    title: 'Rainbow Deluxe Thick File',
    price: 95,
    image: 'images/premium/blue.png',
    category: 'Premium',
    description: 'Heavy duty deluxe thick office file with cobra spring clip. Maximum capacity.'
  },
  {
    id: 'prm-3',
    title: 'Indexed Deluxe Butterfly File',
    price: 95,
    image: 'images/premium/butterfly.png',
    category: 'Premium',
    description: 'Sree ManiKanta indexed deluxe file with butterfly design. A to Z indexed tabs.'
  },
   {
    id: 'prm-4',
    title: 'Ganesha Indexed Deluxe File',
    price: 95,
    image: 'images/premium/ganesha.png',
    category: 'Premium',
    description: 'Premium indexed deluxe file with Lord Ganesha and temple design. Galaxy themed with A to Z tabs.'
  },
  

];

// 3. Export Categories
export const categories = ['All', 'Religious', 'Designer', 'Standard', 'Box File', 'Premium'];