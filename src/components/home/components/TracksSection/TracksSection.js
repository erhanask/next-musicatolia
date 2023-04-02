import {Box, Typography} from "@mui/material";
import CollectionCards from "./components/CollectionCards";
import React from "react";

const TracksSection = React.memo(() => {



        return (
        <Box sx={{
            backgroundColor: 'white',
            height: '100vh',
            borderRight: '1px solid rgba(0, 0, 0, 0.1);',
            padding: {xs: '10px 12px' ,md: '18px 24px'},
            marginBottom: {xs: '30px',md:0}
        }}>
            <Typography
                variant={'h4'}
                sx={{
                    fontSize: {xs:'18px',md:'32px'},
                    fontWeight: '700',
                    lineHeight: {xs: '16px',md:'35px'},
                    color: '#333333',
                    marginBottom: {xs: '16px',md:'34px'}
                }}>
                Discover Featured Playlists/Tracks
            </Typography>
            <Box sx={{
                height: {xs: '100%',md:'calc( 100vh - 175px)'},
                overflowY: 'scroll',
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
                    <CollectionCards type={'flyings'} />
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
                    <CollectionCards type={'runnings'} />
                </Box>
            </Box>
        </Box>
    );

});

export default TracksSection;