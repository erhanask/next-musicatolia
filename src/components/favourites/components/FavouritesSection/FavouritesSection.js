import {CircularProgress, Grid} from "@mui/material";
import FavTrackCard from "./components";
import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../helpers";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../config";


const FavouritesSection = () => {

    const [playlists, setPlaylists] = useState(null);
    const listItems = [];

    const getPlaylists = async (user_url) => {
        return await fetchHandler(user_url).then(({items}) => setPlaylists(items));
    }


    useEffect(() => {
        const getProfile = async () => {
            const querySnapshot = await getDocs(collection(db, "spotify"));
            getPlaylists(querySnapshot?.docs[0]?.data()?.api_urls?.fav_user_url);
        };

        getProfile();

    }, [])


    // Pushing list items into listItems array.
    if (playlists !== null) {
        playlists.forEach((tracks, i) => {
            listItems.push(
                <FavTrackCard key={i} playlist={tracks}/>
            );
        })
    }

    // If playlists not null foreach works.
    return playlists !== null ?
        (
            <Grid container spacing={0}
                  sx={{height: '100vh', flexDirection: {xs: 'row', md: 'column'}, overflow: 'auto'}}>
                {listItems}
            </Grid>
        )
        :
        (<CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>);
}


export default FavouritesSection;