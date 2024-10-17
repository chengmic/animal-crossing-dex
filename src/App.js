import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import ThumbnailsPage from './components/ThumbnailsPage';
import { Container } from '@mui/material';

import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className='mainWallpaper'>
      <Container className='background' style={{minHeight: '100vh'}}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/:objecttype" element={<ThumbnailsPage />} />
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
