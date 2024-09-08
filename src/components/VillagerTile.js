import { Grid2 } from '@mui/material';
import portrait from '../assets/images/bob.png';

function VillagerTile() {
    return (
    <Grid2 container size={0.5} style= {{flexDirection: 'column', alignItems: 'center'}}>
        {/*Character Portrait*/}
        <Grid2>
            <img src= {portrait} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>
        
        {/*Character Name*/}
        <Grid2>
            <p>Bob</p>
        </Grid2>
    </Grid2>
    );
}

export default VillagerTile;