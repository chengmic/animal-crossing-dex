import { Grid2 } from '@mui/material';

function BugCard({bug}) {
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Name*/}
            <Grid2>
                <h1>{bug.name}</h1>
            </Grid2>

            {/*Image*/}
            <Grid2 size={2}>
                <img src= {bug.render_url} alt="portrait" style={{maxWidth: "100%"}}></img>
            </Grid2>

            <Grid2>
                <p>Location: {bug.location}</p>
            </Grid2>

            <Grid2>
                <p>Weather: {bug.weather}</p>
            </Grid2>

            <Grid2>
                <p>Sell Price: {bug.sell_nook} Bells</p>
            </Grid2>

            <Grid2>
                <p>Catchphrase: {bug.catchphrases}</p>
            </Grid2>
        </Grid2>
    );
}

export default BugCard;
