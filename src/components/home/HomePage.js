import TracksSection from "./components/TracksSection";
import EmbedSection from "./components/EmbedSection";
import {Grid} from "@mui/material";
import axios from "axios";
import {useEffect} from "react";

const client_id = process.env.spotifyClientId;
const client_secret = process.env.spotifyClientSecret;
const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const getAuth = async () => {
    try {
        //make post request to SPOTIFY API for access token, sending relavent info
        const token_url = 'https://accounts.spotify.com/api/token';

        const response = await axios.post(token_url, 'grant_type=client_credentials', {
            headers: {
                'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        //return access token
        return response.data.access_token;

    } catch (error) {
        //on fail, log the error in console
        console.log(error);
    }
}
const getAlbum = async () => {
    const access_token = await getAuth();

    try {
        const response = await axios.get('https://api.spotify.com/v1/albums/3pJ9WVk6gzk3mgNjecQf35', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const HomePage = () => {

    const albums = getAlbum();

    useEffect(() => {
        console.log(albums);
    }, [albums]);
    //TODO: added useEffect to get album data from spotify api
    return (
        <Grid container spacing={0} sx={{height: '100vh'}}>
            <Grid item xs={6}>
                <TracksSection/>
            </Grid>
            <Grid item xs={6}>
                <EmbedSection/>
            </Grid>
        </Grid>
    );
}

export default HomePage;