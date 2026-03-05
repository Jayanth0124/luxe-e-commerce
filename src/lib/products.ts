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
    price: 30,
    // Add your multiple image paths here. I've duplicated the primary one as an example.
    images: [
      'images/religious/balaji2.png', 
      'images/religious/balaji.png', // Replace with your 2nd image
  
    ],
    category: 'Religious',
    description: 'Premium office file with beautiful Tirupati Balaji design. Perfect for office and personal use.'
  },
  {
    id: 'rel-2',
    title: 'Lakshmi Saraswati Ganesha File',
    price: 30,
    images: ['images/religious/lakshmi.png'],
    category: 'Religious',
    description: 'Auspicious office file with Lakshmi, Saraswati and Ganesha. Brings prosperity.'
  },
  {
    id: 'rel-3',
    title: 'Ganesha Pink Designer File',
    price: 30,
    images: ['images/religious/ganesh.png', 'images/religious/ganeshp1.png'],
    category: 'Religious',
    description: 'Beautiful pink office file with Lord Ganesha design. Auspicious and elegant.'
  },
  {
    id: 'rel-4',
    title: 'Ram Darbar Religious File',
    price: 30,
    images: ['images/religious/ram.png', 'images/religious/ram1.png'],
    category: 'Religious',
    description: 'Beautiful Ram Darbar office file with Lord Ram, Sita, Lakshman and Hanuman.'
  },
  {
    id: 'rel-5',
    title: 'Balaji Green Box File',
    price: 85,
    // Add your multiple image paths here. I've duplicated the primary one as an example.
    images: [
      'images/religious/balajigreen.png',
      'images/religious/balaji1.png'
        // Replace with your 3rd image
    ],
    category: 'Religious',
    description: 'Premium Box file with beautiful Tirupati Balaji design.'
  },

  {
    id: 'rel-6',
    title: 'Lakshmi Box File',
    price: 85,
    images: ['images/religious/lakshmibox.png'],
    category: 'Religious',
    description: 'Auspicious office file with Lakshmi Devi. Brings prosperity.'
  },

  {
    id: 'rel-7',
    title: 'Sai Baba Box File',
    price: 80,
    images: ['images/religious/saibaba.png','images/religious/baba.png'],
    category: 'Religious',
    description: 'Auspicious office file with Sai Baba. Brings prosperity.'
  },
  {
    id: 'rel-8',
    title: 'Lord Ganesha Box File',
    price: 83,
    images: ['images/religious/ganeshbox.png', 'images/religious/ganesh1.png','images/religious/g2.png'],
    category: 'Religious',
    description: 'Auspicious office file with Lord Ganesha. Auspicious and elegant.'
  },

  {
    id: 'des-1',
    title: 'Floral Designer File',
    price: 28,
    images: ['images/designer/floral.png', 'images/designer/f1.png'],
    category: 'Designer',
    description: 'Elegant floral design office file with colorful flowers. Adds beauty to your workspace.'
  },
  {
    id: 'des-2',
    title: 'Peacock Designer File',
    price: 30,
    images: ['images/designer/peacock.png', 'images/designer/peacock.png'],
    category: 'Designer',
    description: 'Beautiful peacock design office file. Vibrant colors and artistic design.'
  },
  {
    id: 'des-3',
    title: 'Deluxe Lace File - Brown',
    price: 30,
    images: ['images/designer/deluxe.png'],
    category: 'Designer',
    description: 'Sree ManiKanta deluxe lace file in classic brown. Simple and professional.'
  },
  {
    id: 'des-4',
    title: 'Special Plastic Coated File - Pink',
    price: 30,
    images: ['images/designer/pink.png','images/designer/p1.png'],
    category: 'Designer',
    description: 'Beautiful peacock design office file. Vibrant colors and artistic design.'
  },
  {
    id: 'des-5',
    title: 'Special Plastic Coated File - Yellow',
    price: 28,
    images: ['images/designer/yellow.png','images/designer/y1.png'],
    category: 'Designer',
    description: 'Durable yellow plastic coated office file. Long-lasting and water-resistant.'
  },
  {
    id: 'des-6',
    title: 'Special Plastic Coated File - Orange',
    price: 28,
    images: ['images/designer/orange.png','images/designer/o1.png'],
    category: 'Designer',
    description: 'Durable Orange plastic coated office file. Long-lasting and water-resistant.'
  },
  
  {
    id: 'des-7',
    title: 'Butterfly Floral Designer File',
    price: 30,
    images: ['images/designer/b1.png', 'images/designer/butterfly.png'],
    category: 'Designer',
    description: 'Elegant blue butterfly and floral design file. Beautiful artistic patterns on both covers.'
  },
  {
    id: 'des-8',
    title: 'Super Special Yellow File',
    price: 30,
    images: ['images/designer/y2.png','images/designer/y3.png'],
    category: 'Designer',
    description: 'Super Special yellow coated office file.'
  },
  {
    id: 'des-9',
    title: 'Deluxe file- Pink and Blue',
    price: 28,
    images: ['images/designer/pb1.png','images/designer/pb2.png'],
    category: 'Designer',
    description: 'Special Deluxe Files in Pink and Blue'
  },
  // {
  //   id: 'std-1',
  //   title: 'Special Plastic Coated File - Yellow',
  //   price: 70,
  //   images: ['images/standard/yellow.png', 'images/standard/yellow.png'],
  //   category: 'U/O',
  //   description: 'Durable yellow plastic coated office file. Long-lasting and water-resistant.'
  // },
  {
    id: 'std-2',
    title: 'Ordinary File - Yellow Band',
    price: 20,
    images: ['images/standard/yband.png', 'images/standard/yband1.png'],
    category: 'U/O',
    description: 'Traditional ordinary file with yellow band. Classic design for everyday use.'
  },
  {
    id: 'std-3',
    title: 'Ordinary File - Brown Band',
    price: 20,
    images: ['images/standard/br_band.png', 'images/standard/br.png'],
    category: 'U/O',
    description: 'Traditional ordinary file with brown band. Durable and reliable choice.'
  },
  // {
  //   id: 'std-4',
  //   title: 'Deluxe Lace File - Brown',
  //   price: 75,
  //   images: ['images/standard/deluxe.png', 'images/standard/deluxe.png'],
  //   category: 'U/O',
  //   description: 'Sree ManiKanta deluxe lace file in classic brown. Simple and professional.'
  // },
  {
    id: 'std-5',
    title: 'Ordinary Mandala Pattern File',
    price: 20,
    images: ['images/standard/mandala.png', 'images/standard/mandala.png'],
    category: 'U/O',
    description: 'Colorful ordinary file with traditional mandala pattern. Tied ribbon closure.'
  },
  // {
  //   id: 'std-6',
  //   title: 'Special Plastic Coated File - Pink',
  //   price: 70,
  //   images: ['images/standard/pink.png', 'images/standard/pink.png'],
  //   category: 'U/O',
  //   description: 'Durable pink plastic coated office file. Long-lasting, water-resistant with elegant look.'
  // },
  {
    id: 'std-7',
    title: 'Exclusive Four Flap',
    price: 65,
    images: ['images/standard/flap.png', 'images/standard/flap1.png','images/standard/flap2.png','images/standard/flap3.png','images/standard/flap4.png'],
    category: 'U/O',
    description: 'Durable pink plastic coated office file. Long-lasting, water-resistant with elegant look.'
  },
  
  {
    id: 'box-1',
    title: 'ManiKanta Green Leaves File',
    price: 79,
    images: ['images/box/green.png','images/box/g1.png'],
    category: 'Box File',
    description: 'Sree ManiKanta designer file with beautiful green leaves pattern. Nature inspired.'
  },
  {
    id: 'box-2',
    title: 'ManiKanta Purple Floral File',
    price: 78,
    images: ['images/box/purple.png', 'images/box/purple1.png'],
    category: 'Box File',
    description: 'Sree ManiKanta designer file with elegant purple floral design. Artistic pattern.'
  },
  {
    id: 'box-3',
    title: 'ManiKanta Purple Neon File',
    price: 82,
    images: ['images/box/neon.png', 'images/box/neon1.png','images/box/neon2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with vibrant purple neon floral design. Modern style.'
  },
  {
    id: 'box-4',
    title: 'ManiKanta Green Abstract File',
    price: 102,
    images: ['images/box/green_floral.png', 'images/box/gf1.png','images/box/gf2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with elegant green abstract wave pattern. Modern and artistic.'
  },
  // {
  //   id: 'box-5',
  //   title: 'ManiKanta Green Abstract File',
  //   price: 90,
  //   images: ['images/box/green_floral.png', 'images/box/gf1.png','images/box/gf2.png'],
  //   category: 'Box File',
  //   description: ' Sree ManiKanta designer file with elegant green abstract wave pattern. Modern and artistic.'
  // },
  {
    id: 'box-8',
    title: 'Premium Blue Box File ',
    price: 75,
    images: ['images/box/b1.png', 'images/box/b2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Blue Box File'
  },
  {
    id: 'box-6',
    title: 'ManiKanta Blue Nature File',
    price: 75,
    images: ['images/box/flower1.png', 'images/box/flower2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with elegant Blue Nature pattern.'
  },
  {
    id: 'box-7',
    title: 'ManiKanta Orange Chakra File',
    price: 75,
    images: ['images/box/chakra1.png', 'images/box/chakra2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Orange Chakra Design'
  },
  
  
  {
    id: 'box-9',
    title: 'ManiKanta Pink Aesthetic Design ',
    price: 71,
    images: ['images/box/pink.png', 'images/box/pink1.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Pink Aesthetic Design'
  },
  {
    id: 'box-10',
    title: 'ManiKanta Maroon Aesthetic Design ',
    price: 93,
    images: ['images/box/marron.png', 'images/box/marron1.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Maroon Aesthetic Design'
  },
  {
    id: 'box-11',
    title: 'ManiKanta Brown Aesthetic Design ',
    price: 109,
    images: ['images/box/brown.png', 'images/box/brown1.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with brown Aesthetic Design'
  },
  {
    id: 'box-12',
    title: 'ManiKanta Gold Aesthetic Design ',
    price: 78,
    images: ['images/box/gold.png', 'images/box/gold1.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Gold Aesthetic Design'
  },
  {
    id: 'box-13',
    title: 'ManiKanta Baby Pink Aesthetic Design ',
    price: 75,
    images: ['images/box/bp1.png', 'images/box/bp2.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Baby Pink Aesthetic Design'
  },
  {
    id: 'box-14',
    title: 'ManiKanta Yellow Aesthetic Design ',
    price: 75,
    images: ['images/box/yellow.png', 'images/box/yellow1.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Yellow Aesthetic Design'
  },
  {
    id: 'box-15',
    title: 'ManiKanta Nature Design file ',
    price: 75,
    images: ['images/box/greenb1.png', 'images/box/greenb.png'],
    category: 'Box File',
    description: ' Sree ManiKanta designer file with Green Nature Design'
  },
  
  {
    id: 'prm-1',
    title: 'Customized Brown Box File',
    price: 72,
    images: ['images/premium/brown.png', 'images/premium/brown1.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs'
  },
  {
    id: 'prm-2',
    title: 'Super Spl Customized Files',
    price: 25,
    images: ['images/premium/yellow.png', 'images/premium/blue1.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs'
  },
  {
    id: 'prm-3',
    title: 'Blue Customized Files',
    price: 30,
    images: ['images/premium/blue.png','images/premium/b1.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs'
  },
  {
    id: 'prm-4',
    title: 'Grey Leafed File',
    price: 75,
    images: ['images/premium/grey.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs.'
  },
   {
    id: 'prm-5',
    title: 'Customized Office Files',
    price: 25,
    images: ['images/premium/coloured.png', 'images/premium/c1.png', 'images/premium/c2.png', 'images/premium/c3.png', 'images/premium/c4.png'],
    category: 'Customized',
    description: 'Premium indexed deluxe file with Lord Ganesha and temple design. Galaxy themed with A to Z tabs.'
  },
  {
    id: 'prm-6',
    title: 'Brown Jute Pattern',
    price: 60,
    images: ['images/premium/purebro.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs'
  },
  {
    id: 'prm-7',
    title: 'Office Mate- Orange and Blue',
    price: 30,
    images: ['images/premium/ob1.png','images/premium/ob2.png','images/premium/ob3.png'],
    category: 'Customized',
    description: 'Fully Customized Files based on Customer Needs'
  },
];

// 3. Export Categories
export const categories = ['All', 'Religious', 'Designer', 'U/O', 'Box File', 'Customized'];