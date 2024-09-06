import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Villagers() {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }
    return (
    <Grid2>
        <button onClick={goBack}>Go Back</button>
        <h1>This is the Villagers page.</h1>
    </Grid2>
    );
}

export default Villagers;