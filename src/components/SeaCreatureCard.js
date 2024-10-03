import { Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function SeaCreatureCard() {
    const location = useLocation();
    const seaCreature = location.state;

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
        <h1>{seaCreature.name}</h1>
        </Grid2>

        {/*Image*/}
        <Grid2 size={2}>
        <img src= {seaCreature.render_url} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>
    </Grid2>
    );
}

export default SeaCreatureCard;