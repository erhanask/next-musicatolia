import axios from "axios";

export const fetchHandler = async (url) => {

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

    const access_token = await getAuth();

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })

        return response.data;
    } catch (error) {
        console.log(error);
    }
}