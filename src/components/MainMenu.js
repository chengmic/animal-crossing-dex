import { Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import Card from '@mui/material/Card';

import VillagerIcon from '../assets/images/villager_icon.png';
import FishIcon from '../assets/images/fish_icon.png';
import BugIcon from '../assets/images/bug_icon.png';
import SeaCreatureIcon from '../assets/images/sea_creature_icon.png';
import FossilIcon from '../assets/images/fossil_icon.png';
import ArtworkIcon from '../assets/images/artwork_icon.png';



function MainMenu() {
  return ( 
  <Grid2 container style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
    <HeroSection /> 
        <Grid2 container style={{alignItems:'baseline'}}>
            {/* Villagers */}
            <Card>
                <Grid2 container>
                    <Link to="/villagers"
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'villager' }}
                    >
                            <img src={VillagerIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Villagers</p>
                    </Link>
                </Grid2>
            </Card>

            {/* Fish */}
            <Card>
                <Grid2>
                    <Link
                        to="/fish" 
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'fish' }}
                        >
                            <img src={FishIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Fish</p>
                    </Link>
                </Grid2>
            </Card>

            {/* Bugs */}
            <Card>
                <Grid2>
                    <Link
                        to="/bugs" 
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'bug' }}
                    >
                            <img src={BugIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Bugs</p>
                    </Link>
                </Grid2>
            </Card>

            {/*Sea Creatures*/}
            <Card>
                <Grid2>
                    <Link
                        to="/seacreatures" 
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'seaCreature' }}
                    >
                            <img src={SeaCreatureIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Sea Creatures</p>
                    </Link>
                </Grid2>
            </Card>

            {/*Fossils*/}
            <Card>
                <Grid2>
                    <Link
                        to="/fossils" 
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'fossil' }}
                    >
                            <img src={FossilIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Fossils</p>
                    </Link>
                </Grid2>
            </Card>

            {/*Artwork*/}
            <Card>
                <Grid2>
                    <Link
                        to="/artworks" 
                        style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                        state={{ objectType: 'artwork' }}
                    >
                            <img src={ArtworkIcon} alt="sample" style={{maxWidth: "100%"}}></img>
                            <p style={{wordBreak: 'break-all'}}>Artworks</p>
                    </Link>
                </Grid2>
            </Card>
        </Grid2>
    </Grid2>
    );
}

export default MainMenu;
