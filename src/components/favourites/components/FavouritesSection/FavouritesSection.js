import {CircularProgress, Grid} from "@mui/material";
import FavTrackCard from "./components";
import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../helpers";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../config";


const FavouritesSection = () => {

    const [playlists, setPlaylists] = useState(null);
    const listItems = [];

    // TODO : this function will be edited according to fav_user_url from firestore db.
    // useEffect(() => {
    //     const getGuides = async () => {
    //         const querySnapshot = await getDocs(collection(db, "guides"));
    //         querySnapshot.forEach((doc) => {
    //             let guideList = [...guides];
    //             guideList = [...guideList, { id: doc.id, data: doc.data() }];
    //             setGuides(guideList);
    //         });
    //     };
    //
    //     getGuides();
    //
    // },[]);

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