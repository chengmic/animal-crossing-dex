import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';
import Tiles from './Tiles';
import { useLocation, useNavigate } from 'react-router-dom';

function ThumbnailsPage({}) {
    const navigate = useNavigate()
    const location = useLocation()
    const goBack = () => navigate(-1)
    const objectType = location.state.objectType
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const fetchObjects = async () => {
            
            const url = getApiUrl(objectType);
            const response = await fetch(url, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Accept-Version': '1.0.0'
                }
                });

                // store data
                const data = (await response.json());
                setObjects(data);
        }

        fetchObjects();
    }, [objectType]);


    // helper function to get api url
    const getApiUrl = (type) => {
        if (type === 'villager') {
            return 'https://api.nookipedia.com/villagers?nhdetails=true'
        }

        else if (type === 'fish') {
            return 'https://api.nookipedia.com/nh/fish';
        }

        else if (type === 'bug') {
            return 'https://api.nookipedia.com/nh/bugs';
        }

        else if (type === 'seaCreature') {
            return 'https://api.nookipedia.com/nh/sea';
        }
        else if (type === 'fossil') {
            return 'https://api.nookipedia.com/nh/fossils/individuals';
        }
        else if (type === 'artwork') {
            return 'https://api.nookipedia.com/nh/art';
        }
    }

    
    return (
    <Grid2>
        {/*Back button*/}
        <Grid2><button onClick={goBack}>Go Back</button></Grid2>
        
        {/*Pass data to tile*/}
        <Grid2 container>
            {objects.map((object) => {

                if (object.nh_details !== null){
                    return <Tiles
                    objectData={object}
                    type={objectType}
                />
                }
                
            })}
        </Grid2>
    </Grid2>
    );
}

export default ThumbnailsPage;