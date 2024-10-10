import { Grid2 } from '@mui/material';


function FishCard({fish}) {
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Fish Name*/}
            <Grid2>
                <h1>{fish.name}</h1>
            </Grid2>

            {/*Fish Image*/}
            <Grid2 size={2}>
                <img src= {fish.render_url} alt="portrait" style={{maxWidth: "100%"}}></img>
            </Grid2>

            <Grid2>
                <p>Rarity: {fish.rarity}</p>
            </Grid2>

            <Grid2>
                <p>Location: {fish.location}</p>
            </Grid2>

            <Grid2>
                <p>Shadow Size: {fish.shadow_size}</p>
            </Grid2>

            <Grid2>
                <p>Sell Price: {fish.sell_nook} Bells</p>
            </Grid2>

            <Grid2>
                <p>Catchphrase: {fish.catchphrases}</p>
            </Grid2>

            


        </Grid2>
    );
}

export default FishCard;