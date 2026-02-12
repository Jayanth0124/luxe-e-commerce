import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 'rel-1',
    title: 'Divine Serenity File',
    price: 450,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    category: 'Religious',
    description: 'A premium file with intricate religious motifs and gold foil finish.'
  },
  {
    id: 'des-1',
    title: 'Avant-Garde Designer Folder',
    price: 650,
    image: 'https://images.unsplash.com/photo-1586075010620-2134440590a9?q=80&w=800&auto=format&fit=crop',
    category: 'Designer',
    description: 'Sleek, modern design for the creative professional.'
  },
  {
    id: 'std-1',
    title: 'Classic Office Standard',
    price: 150,
    image: 'https://images.unsplash.com/photo-1595079676339-1534802ad6cf?q=80&w=800&auto=format&fit=crop',
    category: 'Standard',
    description: 'Durable and reliable for everyday organizational needs.'
  },
  {
    id: 'box-1',
    title: 'Executive Box File',
    price: 850,
    image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=800&auto=format&fit=crop',
    category: 'Box File',
    description: 'Heavy-duty storage solution with a premium leatherette finish.'
  },
  {
    id: 'prm-1',
    title: 'Luxury Velvet Collection',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    category: 'Premium',
    description: 'The pinnacle of luxury with velvet interior and brushed metal accents.'
  },
  {
    id: 'rel-2',
    title: 'Sacred Symbols Portfolio',
    price: 550,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    category: 'Religious',
    description: 'Elegantly embossed with sacred geometric patterns.'
  },
  {
    id: 'des-2',
    title: 'Abstract Harmony File',
    price: 700,
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=800&auto=format&fit=crop',
    category: 'Designer',
    description: 'A fusion of art and utility for distinguished workspace.'
  }
];

export const categories = ['All', 'Religious', 'Designer', 'Standard', 'Box File', 'Premium'];
