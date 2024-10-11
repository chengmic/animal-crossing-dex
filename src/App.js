import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import ThumbnailsPage from './components/ThumbnailsPage';
import { Container } from '@mui/material';


function App() {
  return (
    <div className='mainWallpaper'>
      <Container className='background' style={{minHeight: '100vh'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/:objecttype" element={<ThumbnailsPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
