import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

import VillagerCard from './VillagerCard';
import FishCard from './FishCard'
import BugCard from './BugCard'
import SeaCreatureCard from './SeaCreatureCard'
import FossilCard from './FossilCard'
import ArtworkCard from './ArtworkCard'


function Tiles({objectData, type}) {
    const [open, setOpen] = useState(false);

    const handleTileClick = () =>{
         setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    let imageSource;
    if ((type === 'villager') && (objectData.nh_details !== null)) {
        imageSource = objectData.nh_details.icon_url
    }
    else {
        imageSource = objectData.image_url
    }

    let objectCard;
    if (type === 'villager') {
        objectCard = <VillagerCard villager = {objectData}/>
    }
    if (type === 'fish') {
        objectCard = <FishCard fish = {objectData}/>
    }
    if (type === 'bug') {
        objectCard = <BugCard bug = {objectData}/>
    }
    if (type === 'seaCreature') {
        objectCard = <SeaCreatureCard seaCreature = {objectData}/>
    }
    if (type === 'fossil') {
        objectCard = <FossilCard fossil = {objectData}/>
    }
    if (type === 'artwork') {
        objectCard = <ArtworkCard artwork = {objectData}/>
    }

    return (
    <Grid2>
    
    {/*Tile*/}
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

        {/*Modal*/}
        <Modal
            open = {open}
            onClose={handleClose}>

            <Grid2>
                {objectCard}
            </Grid2>

        </Modal>
    
    </Grid2>
    );
}

export default Tiles;