import { Grid2 } from '@mui/material';
import {useNavigate } from 'react-router-dom';

function FossilCard({fossil}) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
    /*Card*/
    <Grid2 container flexDirection={'column'}>
        {/*Back Button*/}
        <Grid2>
            <button onClick={goBack}>Go Back</button>
        </Grid2>
        
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