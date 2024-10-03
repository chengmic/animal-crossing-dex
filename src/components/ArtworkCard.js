import { Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function ArtworkCard() {
    const location = useLocation();
    const artwork = location.state;

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
        <h1>{artwork.name}</h1>
        </Grid2>

        {/*Image*/}
        <Grid2 size={2}>
        <img src= {artwork.image_url} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>
    </Grid2>
    );
}

export default ArtworkCard;