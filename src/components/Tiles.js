import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Tiles({objectData, objectType}) {

    const navigate =useNavigate();

    const handleTileClick = () =>{
        if (objectType === 'villager') {
            navigate(`./${objectData.name}`, {state: objectData});
        }

        if (objectType === 'fish') {
            navigate(`./${objectData.name}`, {state: objectData});
        }

        if (objectType === 'bug') {
            navigate(`./${objectData.name}`, {state: objectData});
        }

        if (objectType === 'seacreature') {
            navigate(`./${objectData.name}`, {state: objectData});
        }

        if (objectType === 'fossil') {
            navigate(`./${objectData.name}`, {state: objectData});
        }

        if (objectType === 'art') {
            navigate(`./${objectData.name}`, {state: objectData});
        }
    }

    return (
    /*Tiles*/
    <Grid2 container
        size={1}
        style= {{flexDirection: 'column', alignItems: 'center'}}
        onClick={handleTileClick}
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