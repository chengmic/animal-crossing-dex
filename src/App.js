import './App.css';

import MainMenu from './components/MainMenu';
import VillagerCard from './components/VillagerCard';
import ThumbnailsPage from './components/ThumbnailsPage';
import FishCard from './components/FishCard';
import BugCard from './components/BugCard';

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
      </Routes>

    </BrowserRouter>

  );
}

export default App;
