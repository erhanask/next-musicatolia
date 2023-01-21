import {Box, Typography} from "@mui/material";

const SpotifyEmbed = () => {

    return (
        <>
            <Typography
                variant={'h4'}
                sx={{
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '35px',
                    color: '#333333',
                    marginBottom: '34px',
                    textAlign: 'center'
                }}>
                Listen Bests Of This Genre
            </Typography>
            <iframe style={{borderRadius: '12px',height:'85vh',width:'100%'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" frameBorder="0"
                    src="https://open.spotify.com/embed/playlist/4OIRpNAO3GtUiyIhEA7sAz?utm_source=generator&theme=0"
                    width="100%" height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    );

}

export default SpotifyEmbed;