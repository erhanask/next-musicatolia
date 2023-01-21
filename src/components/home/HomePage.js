import TracksSection from "./components/TracksSection";
import EmbedSection from "./components/EmbedSection";
import {Grid} from "@mui/material";
import axios from "axios";

const getAuth = async () => {
    const client_id = process.env.spotifyClientId;
    const client_secret = process.env.spotifyClientSecret;
    const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    console.log(auth_token, client_id, client_secret);
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
        //console.log(response.data.access_token);
    } catch (error) {
        //on fail, log the error in console
        console.log(error);
    }
}
const getAlbum = async () => {
    console.log(await getAuth());
}

getAlbum().then(res => console.log(res));
const HomePage = () => {


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