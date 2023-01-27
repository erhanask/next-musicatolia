import {Box, Grid, Typography} from "@mui/material";
import {fetchHandler} from "../../../../helpers";
import {useEffect, useState} from "react";


const TracksSection = () => {

    const [albums, setAlbums] = useState();
    const getAlbums = async () => {
        const response = await fetchHandler('https://api.spotify.com/v1/albums/3pJ9WVk6gzk3mgNjecQf35');
        setAlbums(response);
    }

    useEffect(() => {
        getAlbums();
    }, [])

    console.log(albums);
    return (
        <Box sx={{
            backgroundColor: 'white',
            height: '100vh',
            borderRight: '1px solid rgba(0, 0, 0, 0.1);',
            padding: '18px 24px'
        }}>
            <Typography
                variant={'h4'}
                sx={{
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '35px',
                    color: '#333333',
                    marginBottom: '34px'
                }}>
                Discover My Favourite Playlists/Tracks
            </Typography>
            <Box>
                <Typography
                    variant={'p'}
                    sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#333333',
                        marginBottom: '20px'
                    }}>
                    Those Are Flying
                </Typography>
                <Grid container sx={{marginTop:'20px'}}>
                    <Grid item xs={6}>card 1</Grid>
                    {/*TODO: Grids will contain a component with a url prop and it will return card.*/}
                    <Grid item xs={6}>card 1</Grid>
                    <Grid item xs={6}>card 1</Grid>
                    <Grid item xs={6}>card 1</Grid>
                </Grid>
                {/*TODO: I will list my favourite tracks in there.*/}
            </Box>
            <Box sx={{marginTop:'30px'}}>
                <Typography
                    variant={'p'}
                    sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        color: '#333333',
                        marginBottom: '20px'
                    }}>
                    Those Are Running
                </Typography>
                <Grid container sx={{marginTop:'20px'}}>
                    <Grid item xs={6}>card 1</Grid>
                    <Grid item xs={6}>card 1</Grid>
                    <Grid item xs={6}>card 1</Grid>
                    <Grid item xs={6}>card 1</Grid>
                </Grid>
                {/*TODO: I will list my lovely tracks in there.*/}
            </Box>
        </Box>
    );

}

export default TracksSection;