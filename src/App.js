import './App.css';

import MainMenu from './components/MainMenu';
import VillagerCard from './components/VillagerCard';
import Villagers from './components/Villagers';
import Fishes from './components/Fishes';
import FishCard from './components/FishCard';
import Bugs from './components/Bugs';
import BugCard from './components/BugCard';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/villagers" element={<Villagers />} />
        <Route path="/villagercard/:name" element={<VillagerCard />} />
        <Route path="/fish" element={<Fishes />} />
        <Route path="/fish/fishcard/:name" element={<FishCard />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/bugcard/:name" element={<BugCard />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
