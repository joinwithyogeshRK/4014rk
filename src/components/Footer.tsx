import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Youtube, Twitch, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold neon-text mb-4">GTA 6</h2>
            <p className="mb-4 text-muted-foreground">
              The next generation of open-world gaming. Coming soon to PlayStation 5, Xbox Series X|S, and PC.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitch">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/characters" className="hover:text-primary transition-colors">Characters</Link></li>
              <li><Link to="/media" className="hover:text-primary transition-colors">Media</Link></li>
              <li><Link to="/preorder" className="hover:text-primary transition-colors">Pre-order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">EULA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
            <p className="mb-4 text-muted-foreground">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-surface text-surface-foreground border-border"
                required
              />
              <Button type="submit" className="btn-primary">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img 
              src="/esrb-mature.png" 
              alt="ESRB Mature 17+" 
              className="h-16 mr-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/80x120/black/FF0000?text=MATURE+17%2B';
              }}
            />
            <div className="text-sm text-muted-foreground">
              <p>Blood and Gore, Intense Violence, Mature Humor,</p>
              <p>Nudity, Strong Language, Strong Sexual Content, Use of Drugs and Alcohol</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2023 Rockstar Games, Inc. All trademarks belong to their respective owners.</p>
            <p>This is a fan-made concept website and is not affiliated with Rockstar Games.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
