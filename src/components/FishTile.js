import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function FishTile({fishData}) {

    const navigate =useNavigate();

    const handleFishClick = () =>{
        navigate(`./fishcard/${fishData.name}`, {state: fishData});
    }

    return (
    /*Fish Tiles*/
    <Grid2 container
        size={1}
        style= {{flexDirection: 'column', alignItems: 'center'}}
        onClick={handleFishClick}
    >
        {/*Fish Portrait*/}
        <Grid2>
            <img
                src= {fishData.image_url}
                alt="portrait"
                style={{maxWidth: "100%"}}
            ></img>
        </Grid2>
        
        {/*Fish Name*/}
        <Grid2>
            {fishData.name}
        </Grid2>
    </Grid2>
    );
}

export default FishTile;