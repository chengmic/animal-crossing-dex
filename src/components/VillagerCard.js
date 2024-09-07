import { Grid2 } from '@mui/material';
import portrait from '../assets/images/bob.png';

function VillagerCard() {
    return (
    /* Villager Card */
    <Grid2 container flexDirection={'column'}>
        {/*Character Name*/}
        <Grid2>
        <h1>Bob</h1>
        </Grid2>

        {/*Character Portrait*/}
        <Grid2 size={2}>
        <img src= {portrait} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>

        {/*Quick Info*/}
        <Grid2 container spacing={4} style={{display:'flex', flexDirection:'horizontal' }}>
            {/*Species*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Species</p>
            <p>Cat</p>
            </Grid2>

            {/*Type*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Type</p>
            <p>Lazy</p>
            </Grid2>

            {/*Gender*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Gender</p>
            <p>Male</p>
            </Grid2>

        </Grid2>

        {/*Birthday*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Birthday</p>
        <p>January 1st</p>
        </Grid2>

        {/*Catchphrase*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Catchphrase</p>
        <p>"pthhpth"</p>
        </Grid2>

        {/*Quote*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Quote</p>
        <p>"You only live once...or nine times."</p>
        </Grid2>
    </Grid2>
    );
}

export default VillagerCard;