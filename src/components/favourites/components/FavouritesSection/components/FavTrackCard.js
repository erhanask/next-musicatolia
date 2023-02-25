import Link from "next/link";
import {Box, Card, CardActionArea, CardContent, CircularProgress, Typography, Link as MuiLink} from "@mui/material";
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
                <MuiLink sx={{
                    width: {xs: '100%', md: '320px'},
                    height: 'calc(100vh / 10)',
                    margin: '10px',
                    position: 'relative'
                }} component={Link}
                         href={track?.external_urls?.spotify}>
                    <Box component={'div'} sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundImage: `url(${track?.album?.images[1]?.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: '.85'
                    }}></Box>
                    <Card sx={{width: '100%', height: '100%', padding: '5px'}}>
                        <CardActionArea sx={{
                            background: 'rgba(0,0,0,.5)',
                            borderRadius: '5px !important',
                            textAlign: 'center'
                        }}>
                            <CardContent sx={{padding: '5px 0 0', marginBottom: '0'}}>
                                <Typography gutterBottom sx={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    lineHeight: '110.5%',
                                    color: '#FFF'
                                }} component="b">
                                    {track?.name}
                                </Typography>
                                <Typography gutterBottom sx={{
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    lineHeight: '110.5%',
                                    color: '#FFF'
                                }} component="p">
                                    {track.artists === undefined ? '-' : track?.artists[0]?.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </MuiLink>
            );
        })
    }


    console.log(tracks);

    return tracks !== null ? listItems : (
        <CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>);
}


export default FavTrackCard;