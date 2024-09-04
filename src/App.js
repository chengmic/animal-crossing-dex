import './App.css';
import HeroSection from './components/HeroSection';
import MainMenu from './components/MainMenu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeroSection />
      <MainMenu />
    </BrowserRouter>
  );
}

export default App;
