import {Box, Grid, Typography} from "@mui/material";
import SongsCard from "./components/AlbumCard";

//TODO : Firebase login olunacak.
const TracksSection = () => {

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
                Discover Featured Playlists/Tracks
            </Typography>
            <Box sx={{
                height: 'calc( 100vh - 175px)',
                overflowY: 'scroll'
            }}>
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
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/3pJ9WVk6gzk3mgNjecQf35'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/playlists/4OIRpNAO3GtUiyIhEA7sAz'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/4IUeKh2mYOX2njthGA8STM'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/7nZjTEugHd3pBazK9mok3p'} />
                        </Grid>
                    </Grid>
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
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/3pJ9WVk6gzk3mgNjecQf35'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/playlists/4OIRpNAO3GtUiyIhEA7sAz'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/4IUeKh2mYOX2njthGA8STM'} />
                        </Grid>
                        <Grid item xs={6}>
                            <SongsCard url={'https://api.spotify.com/v1/albums/7nZjTEugHd3pBazK9mok3p'} />
                        </Grid>
                    </Grid>
                    {/*TODO: I will list my lovely tracks in there.*/}
                </Box>
            </Box>
        </Box>
    );

}

export default TracksSection;