import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';
import Tiles from './Tiles';
import { useNavigate } from 'react-router-dom';

function Bugs() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const fetchBugs = async () => {
            // fetch data
            const response = await fetch('https://api.nookipedia.com/nh/bugs', {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Accept-Version': '1.0.0'
                }
            });
            
            // store data
            const data = (await response.json());
            setBugs(data);
        }

        fetchBugs();
    }, []);

    return (
    <Grid2>
        {/*Back button*/}
        <Grid2><button onClick={goBack}>Go Back</button></Grid2>
        
        {/*Pass data to tiles*/}
        <Grid2 container>
            {bugs.map((bug) => (
                <Tiles
                objectData={bug}
                objectType='bug'
                />
                ))}
        </Grid2>
    </Grid2>
    );
}

export default Bugs;