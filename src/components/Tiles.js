import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Tiles({objectData}) {

    const navigate =useNavigate();

    const handleVillagerClick = () =>{
        navigate(`/villagercard/${objectData.name}`, {state: objectData});
    }

    return (
    /*Tiles*/
    <Grid2 container
        size={1}
        style= {{flexDirection: 'column', alignItems: 'center'}}
        onClick={handleVillagerClick}
    >
        {/*Portrait*/}
        <Grid2>
            <img
                src= {objectData.image_url}
                alt="portrait"
                style={{maxWidth: "100%"}}
            ></img>
        </Grid2>
        
        {/*Name*/}
        <Grid2>
            {objectData.name}
        </Grid2>
    </Grid2>
    );
}

export default Tiles;