import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VillagerTile from './VillagerTile';
import { Link } from 'react-router-dom';

function Villagers() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
    <Grid2>
        <button onClick={goBack}>Go Back</button>
        <Link to="/VillagerCard">
            <VillagerTile />
        </Link>
    
    </Grid2>
    );
}

export default Villagers;