import { Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function FishCard() {
    const location = useLocation();
    const fish = location.state;

    const navigate = useNavigate();
    const goBack = () => navigate(-1);


    /* Fish Card */
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Back Button*/}
            <Grid2>
                <button onClick={goBack}>Go Back</button>
            </Grid2>
            
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
                <p>Sell Price: {fish.sell_nook} bells</p>
            </Grid2>

            <Grid2>
                <p>Catchphrase: {fish.catchphrases}</p>
            </Grid2>

            


        </Grid2>
    );
}

export default FishCard;