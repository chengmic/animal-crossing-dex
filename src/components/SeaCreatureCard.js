import { Grid2 } from '@mui/material';

function SeaCreatureCard({seaCreature}) {
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Name*/}
            <Grid2>
                <h1>{seaCreature.name}</h1>
            </Grid2>

            {/*Image*/}
            <Grid2 size={2}>
                <img src= {seaCreature.render_url} alt="portrait" style={{maxWidth: "100%"}}></img>
            </Grid2>

            <Grid2>
                <p>Rarity: {seaCreature.rarity}</p>
            </Grid2>

            <Grid2>
                <p>Shadow Size: {seaCreature.shadow_size}</p>
            </Grid2>

            <Grid2>
                <p>Movement: {seaCreature.shadow_movement}</p>
            </Grid2>

            <Grid2>
                <p>Sell Price: {seaCreature.sell_nook} Bells</p>
            </Grid2>

            <Grid2>
                <p>Catchphrase: {seaCreature.catchphrases}</p>
            </Grid2>
        
        </Grid2>
    );
}

export default SeaCreatureCard;
