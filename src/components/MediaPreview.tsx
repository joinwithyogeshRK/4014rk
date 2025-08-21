import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const MediaPreview = () => {
  const screenshots = [
    { id: 1, src: '/screenshots/screenshot1.jpg', alt: 'City skyline at night' },
    { id: 2, src: '/screenshots/screenshot2.jpg', alt: 'High-speed car chase' },
    { id: 3, src: '/screenshots/screenshot3.jpg', alt: 'Character in combat' },
    { id: 4, src: '/screenshots/screenshot4.jpg', alt: 'Luxury yacht on the ocean' }
  ];

  return (
    <section className="py-20 urban-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">MEDIA GALLERY</h2>
          <p className="text-xl max-w-3xl mx-auto">Get a glimpse of the stunning visuals and immersive world of GTA 6.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Featured Video */}
          <div className="relative group overflow-hidden rounded-sm">
            <img 
              src="/videos/trailer1-thumb.jpg" 
              alt="Official Reveal Trailer" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/800x450/black/FF0000?text=GTA+6+Trailer';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button className="rounded-full w-16 h-16 flex items-center justify-center bg-primary hover:bg-primary-600">
                <Play className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <h3 className="text-xl font-bold">Official Reveal Trailer</h3>
            </div>
          </div>
          
          {/* Screenshots Grid */}
          <div className="grid grid-cols-2 gap-4">
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="overflow-hidden rounded-sm">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/400x225/black/FF0000?text=Screenshot+${screenshot.id}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/media">
            <Button className="btn-secondary text-lg px-8 py-6">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
