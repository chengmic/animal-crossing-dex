import { Grid2 } from '@mui/material';
import SampleImage from '../assets/images/sample.jpg';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

function MainMenu() {
  return ( 
  <Grid2 container size ={12}>
    <HeroSection /> 
        <Grid2 container size ={12} spacing={8}>
            {/* Villagers */}
            <Grid2 size={2} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Link to="/villagers"
                    style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                    state={{ objectType: 'villager' }}
                    >
                        <img src={SampleImage} alt="sample" style={{maxWidth: "100%"}}></img>
                        <p style={{wordBreak: 'break-all'}}>Villagers</p>
                </Link>
            </Grid2>

            {/* Fish */}
            <Grid2 size={2} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link
                    to="/fish" 
                    style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                    state={{ objectType: 'fish' }}
                    >
                        <img src={SampleImage} alt="sample" style={{maxWidth: "100%"}}></img>
                        <p style={{wordBreak: 'break-all'}}>Fish</p>
                </Link>
            </Grid2>
            {/* Bugs */}
            <Grid2 size={2} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link
                    to="/bugs" 
                    style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                    state={{ objectType: 'bug' }}
                    >
                        <img src={SampleImage} alt="sample" style={{maxWidth: "100%"}}></img>
                        <p style={{wordBreak: 'break-all'}}>Bugs</p>
                </Link>
            </Grid2>
        </Grid2>
    </Grid2>
    );
}

export default MainMenu;
