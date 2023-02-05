import Link from "next/link";
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../../helpers";


const FavTrackCard = ({playlist}) => {

    const [tracks, setTracks] = useState(null);
    const listItems = [];
    const getTracks = async () => {
        return await fetchHandler(playlist.tracks.href + '?limit=20');
    }


    useEffect(() => {
        getTracks().then(res => setTracks(res.items));
    }, [])

    console.log(tracks);

    // Pushing list items into listItems array.
    if (tracks !== null) {
        tracks.forEach(({track}, i) => {
            listItems.push(
                <Grid key={i} item xs={12}>
                    <Link href={""}>
                        <Card>
                            <CardActionArea>
                                <CardContent sx={{padding: '5px 0 0', marginBottom: '0'}}>
                                    <Typography gutterBottom sx={{
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '110.5%',
                                        color: '#333333'
                                    }} component="b">
                                        {track?.name}
                                    </Typography>
                                    <Typography gutterBottom sx={{
                                        fontWeight: '400',
                                        fontSize: '12px',
                                        lineHeight: '110.5%',
                                        color: '#4F4F4F'
                                    }} component="p">
                                        {track.artists === undefined ? '-' : track?.artists[0]?.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            );
        })
    }


    console.log(tracks);

    return tracks !== null ? listItems : (<CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>);
}


export default FavTrackCard;