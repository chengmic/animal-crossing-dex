import { Grid2 } from '@mui/material';

function VillagerTile({name, portrait}) {
    return (
    <Grid2 container size={1} style= {{flexDirection: 'column', alignItems: 'center'}}>
        {/*Character Portrait*/}
        <Grid2>
            <img src= {portrait} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>
        
        {/*Character Name*/}
        <Grid2>
            {name}
        </Grid2>
    </Grid2>
    );
}

export default VillagerTile;