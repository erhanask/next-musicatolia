import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../../config";

const SpotifyEmbed = React.memo(() => {

    const [embed,setEmbed] = useState();

    useEffect(() => {
        const getEmbedUrl = async () => {
            const querySnapshot = await getDocs(collection(db, "spotify"));
            setEmbed(querySnapshot?.docs[0]?.data()?.api_urls?.embed_url);
        };

        getEmbedUrl();

    }, [])

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
            <iframe style={{borderRadius: '12px',height:'85vh',width:'100%'}} frameBorder="0"
                    src={embed}
                    width="100%" height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    );

});

export default SpotifyEmbed;