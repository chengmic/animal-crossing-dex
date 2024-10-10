import { Grid2 } from '@mui/material';


function ArtworkCard({artwork}) {
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Name*/}
            <Grid2>
                <h1>{artwork.name}</h1>
            </Grid2>

            {/*Image*/}
            <Grid2 size={2}>
                <img src= {artwork.image_url} alt="portrait" style={{maxWidth: "100%"}}></img>
            </Grid2>

            <Grid2>
                <p>Art Name: {artwork.art_name}</p>
            </Grid2>

            <Grid2>
                <p>Author: {artwork.author}</p>
            </Grid2>

            <Grid2>
                <p>Year: {artwork.year}</p>
            </Grid2>

            <Grid2>
                <p>Type: {artwork.art_type}</p>
            </Grid2>

            <Grid2>
                <p>Style: {artwork.art_style}</p>
            </Grid2>

            <Grid2>
                <p>Availability: {artwork.availability}</p>
            </Grid2>
            
            <Grid2>
                <p>Buy Price: {artwork.buy} Bells</p>
            </Grid2>

            <Grid2>
                <p>Sell Price: {artwork.sell} Bells</p>
            </Grid2>
        </Grid2>
    );
}

export default ArtworkCard;
