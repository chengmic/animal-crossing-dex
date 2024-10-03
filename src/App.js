import './App.css';

import MainMenu from './components/MainMenu';
import VillagerCard from './components/VillagerCard';
import ThumbnailsPage from './components/ThumbnailsPage';
import FishCard from './components/FishCard';
import BugCard from './components/BugCard';
import SeaCreatureCard from './components/SeaCreatureCard';
import FossilCard from './components/FossilCard';
import ArtworkCard from './components/ArtworkCard';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/:objecttype" element={<ThumbnailsPage />} />
        <Route path="/villagers/:name" element={<VillagerCard />} />
        <Route path="/fish/:name" element={<FishCard />} />
        <Route path="/bugs/:name" element={<BugCard />} />
        <Route path="/seacreatures/:name" element={<SeaCreatureCard />} />
        <Route path="/fossils/:name" element={<FossilCard />} />
        <Route path="/artworks/:name" element={<ArtworkCard />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
