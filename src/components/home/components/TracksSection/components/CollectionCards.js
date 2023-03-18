import {CircularProgress, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../../config";
import {listSongs} from "./helpers/ListSongs";


const CollectionCards = ({type}) => {

    const [songs, setSongs] = useState(null);

    useEffect(() => {
        const getSongs = async () => {
            const querySnapshot = await getDocs(collection(db, "spotify"));
            const queryData = querySnapshot?.docs[0]?.data()?.api_urls;
            if (type === 'flyings') {
                setSongs(queryData?.flyings_urls);
            } else {
                setSongs(queryData?.runnings_urls);
            }

        };

        getSongs();

    }, []);



    // Pushing list items into listItems array.
    if (songs !== null) {
        return (<Grid container sx={{marginTop: {xs: '5px', md: '20px'}}}>{listSongs(songs)}</Grid>)
    } else {
        return (<CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>)
    }

}


export default CollectionCards;