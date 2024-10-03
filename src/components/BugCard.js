import { Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function BugCard() {
    const location = useLocation();
    const bug = location.state;

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
            <p>Sell Price: {bug.sell_nook} bells</p>
        </Grid2>

        <Grid2>
            <p>Catchphrase: {bug.catchphrases}</p>
        </Grid2>


    </Grid2>
    );
}

export default BugCard;