import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';
import VillagerTile from './VillagerTile';

function Villagers() {
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        const fetchVillagers = async () => {
            // fetch data
            const response = await fetch('https://api.nookipedia.com/villagers', {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Accept-Version': '1.0.0'
                }
            });
            
            // store data
            const data = (await response.json());
            setVillagers(data);
            console.log(data)
        }

        fetchVillagers();
    }, []);

    return (
    <Grid2 container>
        {villagers.map((item) => item.name)}
    </Grid2>
    );
}

export default Villagers;