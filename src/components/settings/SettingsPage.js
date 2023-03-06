import {useAuthContext} from "../../context/AuthContext";
import {Grid} from "@mui/material";
import Link from "next/link";
import AuthForm from "./components/AuthForm";


const SettingsPage = () => {
    const {user} = useAuthContext();


    return user == null ? <AuthForm/> : (
        <>
            <Grid container spacing={0} sx={{
                marginTop: '30%'
            }}>
                <Grid item xs={6}>
                    <Link style={{display:`flex`,flexDirection: 'column',alignItems: 'center'}} href={`settings/spotify`}>
                        <img style={{width: '20%'}} src={`icons/spotify-setting-icon.png`} alt={`spotify-setting-icon`} />
                        Spotify Settings
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link style={{display:`flex`,flexDirection: 'column',alignItems: 'center'}} href={`settings/guide`}>
                        <img style={{width: '20%'}} src={`icons/guide-setting-icon.png`} alt={`spotify-setting-icon`} />
                        Guide Settings
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default SettingsPage;