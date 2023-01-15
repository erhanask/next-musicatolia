import {Box, Typography} from "@mui/material";


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
                {/*TODO: I will list my favourite tracks in there.*/}
            </Box>
        </Box>
    );

}

export default TracksSection;