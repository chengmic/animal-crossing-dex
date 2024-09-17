import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function VillagerTile({villagerData}) {

    const navigate =useNavigate();

    const handleVillagerClick = () =>{
        navigate(`/villagercard/${villagerData.name}`, {state: villagerData});
    }

    return (
    /*Villager Tiles*/
    <Grid2 container
        size={1}
        style= {{flexDirection: 'column', alignItems: 'center'}}
        onClick={handleVillagerClick}
    >
        {/*Villager Portrait*/}
        <Grid2>
            <img
                src= {villagerData.image_url}
                alt="portrait"
                style={{maxWidth: "100%"}}
            ></img>
        </Grid2>
        
        {/*Villager Name*/}
        <Grid2>
            {villagerData.name}
        </Grid2>
    </Grid2>
    );
}

export default VillagerTile;