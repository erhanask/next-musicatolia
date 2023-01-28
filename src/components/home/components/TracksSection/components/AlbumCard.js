import {useEffect, useState} from "react";
import {fetchHandler} from "../../../../../helpers";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const AlbumCard = () => {

    const [album, setAlbum] = useState(null);
    const getAlbum = async () => {
        return await fetchHandler('https://api.spotify.com/v1/albums/3pJ9WVk6gzk3mgNjecQf35');
    }

    useEffect(() => {
        getAlbum().then(res => setAlbum(res));
    }, [])


    return album !== null ? (
        <Box sx={{ paddingRight: '10px'}}>
            <Card sx={{ padding: '5px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={album?.images[1]?.height}
                    image={album?.images[1]?.url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
    ): null;
}

export default AlbumCard;