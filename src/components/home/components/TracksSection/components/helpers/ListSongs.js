import {Grid} from "@mui/material";
import SongsCard from "../AlbumCard";

export const listSongs = (songs) => {
    const listItems = [];
    songs.forEach((url, i) => {
        listItems.push(
            <Grid key={i} item md={6} xs={12}>
                <SongsCard url={url}/>
            </Grid>
        );
    })
    return listItems;
}

