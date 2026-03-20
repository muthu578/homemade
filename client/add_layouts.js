const fs = require('fs');
const path = require('path');

const pages = [
  { dir: 'bakery', title: 'Sacred Bakery | Pranvika Creations', desc: 'Indulge in our exquisite artisan cakes, pastries, and snacks crafted with pure love.' },
  { dir: 'boutique', title: 'The Atelier Boutique | Pranvika Creations', desc: 'Discover handpicked ethnic wear, celestial gowns, and designer silhouettes.' },
  { dir: 'homemade', title: 'Homemade Rituals | Pranvika Creations', desc: 'Traditional homemade delicacies and artifacts crafted for your sacred moments.' },
  { dir: 'contact', title: 'Contact Us | Pranvika Creations', desc: 'Reach out to Pranvika Creations. Whisper your vision for custom orders.' },
  { dir: 'profile', title: 'My Profile | Pranvika Creations', desc: 'Manage your profile and artisan tier membership details.' },
  { dir: 'account', title: 'My Account | Pranvika Creations', desc: 'View your recent orders, wishlist, and account settings.' },
  { dir: 'orders', title: 'Order History | Pranvika Creations', desc: 'Track your recent and past celestial deliveries.' }
];

pages.forEach(p => {
  const dirPath = path.join(__dirname, 'src', 'app', p.dir);
  if (fs.existsSync(dirPath)) {
    const layoutPath = path.join(dirPath, 'layout.tsx');
    const content = import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
;
    fs.writeFileSync(layoutPath, content);
    console.log('Created layout for', p.dir);
  }
});
