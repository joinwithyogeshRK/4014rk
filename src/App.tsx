import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameFeatures from './pages/GameFeatures';
import Characters from './pages/Characters';
import Media from './pages/Media';
import Preorder from './pages/Preorder';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<GameFeatures />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/media" element={<Media />} />
        <Route path="/preorder" element={<Preorder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
