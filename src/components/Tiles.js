import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Tiles({objectData, type}) {
    if (objectData.nh_details !== undefined){
    }
    
    const navigate = useNavigate();

    const handleTileClick = () =>{
         navigate(`./${objectData.name}`, {state: objectData});
    }

    let imageSource;
    if ((type === 'villager') && (objectData.nh_details !== null)) {
        imageSource = objectData.nh_details.icon_url
    }
    else {
        imageSource = objectData.image_url
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
                src= {imageSource}
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