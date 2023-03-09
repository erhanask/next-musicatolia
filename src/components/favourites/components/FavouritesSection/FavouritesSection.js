import {CircularProgress, Grid} from "@mui/material";
import FavTrackCard from "./components";
import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../helpers";


const FavouritesSection = () => {

    const [playlists, setPlaylists] = useState(null);
    const listItems = [];
    const getPlaylists = async () => {
        return await fetchHandler("https://api.spotify.com/v1/users/x11yvx5zawwdoa7x0k7yl6oqj/playlists");
    }


    useEffect(() => {
        getPlaylists().then(({items}) => setPlaylists(items));
    }, [])


    // Pushing list items into listItems array.
    if (playlists !== null) {
        playlists.forEach((tracks, i) => {
            listItems.push(
                <FavTrackCard playlist={tracks}/>
            );
        })
    }

    // If playlists not null foreach works.
    return playlists !== null ?
        (
            <Grid container spacing={0} sx={{height: '100vh', flexDirection: {xs: 'row',md:'column'}, overflow: 'auto'}}>
                {listItems}
            </Grid>
        )
        :
        (<CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>);
}


export default FavouritesSection;