import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Monitor, Gamepad } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Simulate video loading
  useEffect(() => {
    const timer = setTimeout(() => {
      const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
      if (videoElement) {
        videoElement.play().catch(() => {
          // Auto-play was prevented
          console.log('Auto-play was prevented by the browser');
        });
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // In a real implementation, this would trigger a modal with the full trailer
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video 
          id="hero-video"
          className="w-full h-full object-cover opacity-70"
          muted 
          loop
          playsInline
          poster="https://placehold.co/1920x1080/black/FF0000?text=GTA+6+TRAILER"
        >
          <source src="/trailer.mp4" type="video/mp4" />
          {/* Fallback content */}
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold neon-text mb-4 animate-neon-pulse">GTA 6</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">The next evolution of the Grand Theft Auto series. A new era of open-world gaming begins.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button onClick={handlePlayVideo} className="btn-primary text-lg px-8 py-6">
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
          <Link to="/preorder">
            <Button className="btn-accent text-lg px-8 py-6">
              Pre-order Now
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg">Coming Fall 2024</span>
          </div>
          <div className="flex items-center">
            <Monitor className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg">PlayStation 5</span>
          </div>
          <div className="flex items-center">
            <Gamepad className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg">Xbox Series X|S</span>
          </div>
          <div className="flex items-center">
            <Monitor className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg">PC</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll to Explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
