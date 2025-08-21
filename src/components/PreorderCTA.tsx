import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const PreorderCTA = () => {
  const editions = [
    {
      id: 'standard',
      name: 'STANDARD EDITION',
      price: '$69.99',
      features: ['Base Game', 'Bonus Digital Soundtrack', 'Character Outfit Pack']
    },
    {
      id: 'deluxe',
      name: 'DELUXE EDITION',
      price: '$89.99',
      features: ['Base Game', 'Bonus Digital Soundtrack', 'Character Outfit Pack', 'Digital Art Book', 'Exclusive Vehicle Pack', '3-Day Early Access']
    },
    {
      id: 'ultimate',
      name: 'ULTIMATE EDITION',
      price: '$119.99',
      features: ['Base Game', 'Bonus Digital Soundtrack', 'Character Outfit Pack', 'Digital Art Book', 'Exclusive Vehicle Pack', '7-Day Early Access', 'Season Pass', 'Exclusive Weapons Pack']
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">PRE-ORDER NOW</h2>
          <p className="text-xl max-w-3xl mx-auto">Secure your copy of GTA 6 and be among the first to experience the next generation of open-world gaming.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {editions.map((edition) => (
            <div 
              key={edition.id} 
              className="group preorder-option hover:neon-border transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:neon-text">{edition.name}</h3>
                {edition.id === 'ultimate' && (
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-5 w-5 fill-accent" />
                    <span className="text-sm font-bold">BEST VALUE</span>
                  </div>
                )}
              </div>
              <p className="text-3xl font-bold mb-6">{edition.price}</p>
              <ul className="space-y-2 mb-6">
                {edition.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/preorder">
            <Button className="btn-primary text-lg px-8 py-6">
              Pre-order Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreorderCTA;
