import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CharactersPreview = () => {
  const characters = [
    {
      id: 1,
      name: 'LUCIA MARTINEZ',
      role: 'Former Military / Criminal Mastermind',
      image: '/characters/lucia.jpg'
    },
    {
      id: 2,
      name: 'JASON CRAWFORD',
      role: 'Street Hustler / Tech Expert',
      image: '/characters/jason.jpg'
    },
    {
      id: 3,
      name: 'MARCUS VEGA',
      role: 'Former Cartel Enforcer',
      image: '/characters/marcus.jpg'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">MEET THE CHARACTERS</h2>
          <p className="text-xl max-w-3xl mx-auto">Discover the complex and morally ambiguous characters that populate the criminal underworld of GTA 6.</p>
        </div>
        
        <div className="character-slider mb-12">
          {characters.map((character) => (
            <Card key={character.id} className="character-card bg-card border-border hover:neon-border transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/black/FF0000?text=GTA+6+Character+${character.id}`;
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">{character.name}</h3>
                <p className="text-primary">{character.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/characters">
            <Button className="btn-secondary text-lg px-8 py-6">
              Meet All Characters
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CharactersPreview;
