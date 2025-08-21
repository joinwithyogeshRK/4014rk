import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Map, Car, Gun, Coins } from 'lucide-react';

const FeaturesPreview = () => {
  const features = [
    {
      id: 1,
      title: 'EXPANSIVE OPEN WORLD',
      description: 'Explore the largest and most detailed world ever created in the GTA series.',
      icon: <Map className="h-10 w-10 text-primary" />
    },
    {
      id: 2,
      title: 'ADVANCED VEHICLE MECHANICS',
      description: 'Experience realistic vehicle handling with hundreds of meticulously detailed vehicles.',
      icon: <Car className="h-10 w-10 text-primary" />
    },
    {
      id: 3,
      title: 'IMMERSIVE COMBAT',
      description: 'Engage in refined combat mechanics with improved gunplay and melee systems.',
      icon: <Gun className="h-10 w-10 text-primary" />
    },
    {
      id: 4,
      title: 'DYNAMIC ECONOMY',
      description: 'Participate in a living economy where your actions affect the game world.',
      icon: <Coins className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section className="py-20 graffiti-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">GAME FEATURES</h2>
          <p className="text-xl max-w-3xl mx-auto">GTA 6 redefines open-world gaming with groundbreaking features and unparalleled freedom.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-surface border-border hover:neon-border transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/features">
            <Button className="btn-secondary text-lg px-8 py-6">
              Explore All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
