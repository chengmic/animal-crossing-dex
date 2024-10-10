import { Grid2 } from '@mui/material';

function FossilCard({fossil}) {
    return (
        <Grid2 container flexDirection={'column'}>
            {/*Name*/}
            <Grid2>
                <h1>{fossil.name}</h1>
            </Grid2>

            {/*Image*/}
            <Grid2 size={2}>
                <img src= {fossil.image_url} alt="portrait" style={{maxWidth: "100%"}}></img>
            </Grid2>

            <Grid2>
                <p>
                    Fossil Group:{" "}
                    {fossil.fossil_group ? fossil.fossil_group : "None"}
                </p>
            </Grid2>

            <Grid2>
                <p>Sell Price: {fossil.sell} Bells</p>
            </Grid2>
        </Grid2>
    );
}

export default FossilCard;
