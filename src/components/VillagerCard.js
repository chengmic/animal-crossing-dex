import { Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function VillagerCard() {
    const location = useLocation();
    const villager = location.state;

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
    /* Villager Card */
    <Grid2 container flexDirection={'column'}>
        {/*Back Button*/}
        <Grid2>
        <button onClick={goBack}>Go Back</button>
        </Grid2>
        
        {/*Character Name*/}
        <Grid2>
        <h1>{villager.name}</h1>
        </Grid2>

        {/*Character Portrait*/}
        <Grid2 size={2}>
        <img src= {villager.image_url} alt="portrait" style={{maxWidth: "100%"}}></img>
        </Grid2>

        {/*Quick Info*/}
        <Grid2 container spacing={4} style={{display:'flex', flexDirection:'horizontal' }}>
            {/*Species*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Species</p>
            <p>{villager.species}</p>
            </Grid2>

            {/*Type*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Personality</p>
            <p>{villager.personality}</p>
            </Grid2>

            {/*Gender*/}
            <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
            <p>Gender</p>
            <p>{villager.gender}</p>
            </Grid2>

        </Grid2>

        {/*Birthday*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Birthday</p>
        <p>{villager.birthday_month} {villager.birthday_day}</p>
        </Grid2>

        {/*Catchphrase*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Catchphrase</p>
        <p>"{villager.phrase}"</p>
        </Grid2>

        {/*Quote*/}
        <Grid2 container spacing={1} style={{display:'flex', flexDirection:'horizontal' }}>
        <p>Quote</p>
        <p>"{villager.quote}"</p>
        </Grid2>
    </Grid2>
    );
}

export default VillagerCard;