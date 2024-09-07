import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VillagerCard from './VillagerCard';

function Villagers() {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }
    return (
    <Grid2>
        <button onClick={goBack}>Go Back</button>
        <VillagerCard />
    
    </Grid2>
    );
}

export default Villagers;