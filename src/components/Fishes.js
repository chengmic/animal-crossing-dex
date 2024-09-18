import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';
import FishTile from './FishTile';
import { useNavigate } from 'react-router-dom';

function Fishes() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
        const fetchFishes = async () => {
            // fetch data
            const response = await fetch('https://api.nookipedia.com/nh/fish', {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Accept-Version': '1.0.0'
                }
            });
            
            // store data
            const data = (await response.json());
            setFishes(data);
        }

        fetchFishes();
    }, []);

    return (
    <Grid2>
        {/*Back button*/}
        <Grid2><button onClick={goBack}>Go Back</button></Grid2>
        
        {/*Pass data to fish tile*/}
        <Grid2 container>
            {fishes.map((fish) => (
                <FishTile
                fishData={fish}
                />
                ))}
        </Grid2>
    </Grid2>
    );
}

export default Fishes;