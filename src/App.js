import './App.css';
import HeroSection from './components/HeroSection';
import MainMenu from './components/MainMenu';
import Villagers from './components/Villagers';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/villagers" element={<Villagers />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
