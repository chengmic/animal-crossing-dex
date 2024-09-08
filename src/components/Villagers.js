import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VillagerTile from './VillagerTile';

function Villagers() {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }
    return (
    <Grid2>
        <button onClick={goBack}>Go Back</button>
        <VillagerTile />
    
    </Grid2>
    );
}

export default Villagers;