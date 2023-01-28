import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../../helpers";
import {Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import Link from "next/link";

const SongsCard = ({url}) => {

    const [songs, setSongs] = useState(null);
    const getSongs = async () => {
        return await fetchHandler(url);
    }

    useEffect(() => {
        getSongs().then(res => setSongs(res));
    }, [])


    return songs !== null ? (
        <Link style={{paddingRight: '10px', display: 'block', marginBottom: '10px'}}
              href={songs?.external_urls?.spotify}>
            <Card sx={{padding: '5px'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={songs?.images[0]?.height}
                        image={songs?.images[0]?.url}
                        sx={{
                            width: '100%',
                            height: '120px',
                            objectFit: 'cover'
                        }}
                        alt="green iguana"
                    />
                    <CardContent sx={{padding: '5px 0 0', marginBottom: '0'}}>
                        <Typography gutterBottom sx={{
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '110.5%',
                            color: '#333333'
                        }} component="b">
                            {songs?.name}
                        </Typography>
                        <Typography gutterBottom sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '110.5%',
                            color: '#4F4F4F'
                        }} component="p">
                            {songs.artists === undefined ? '-': songs?.artists[0]?.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    ) : (<CircularProgress color={"inherit"} sx={{ display: 'flex', marginInline: 'auto', marginBlock: '10px' }} />);
}

export default SongsCard;