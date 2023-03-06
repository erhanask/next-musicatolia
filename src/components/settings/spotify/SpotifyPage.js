import {useAuthContext} from "../../../context/AuthContext";
import {useRouter} from "next/navigation";
import {Box, Grid, Input, InputLabel, TextField, Typography} from "@mui/material";
import Link from "next/link";


const SpotifyPage = () => {

    const {user,setUser} = useAuthContext();
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            'email': e.target[0].value,
            'password': e.target[1].value
        }


        if (data.email === process.env.adminEmail && data.password === process.env.adminPassword) {
            localStorage.setItem('auth_key', btoa(data.email+data.password));
            setUser(data);
        }

        console.log(process.env.adminEmail);

        console.log(btoa(data.email+'hashed'+data.password+data.email));
    }


    return user == null ? (
        <>
            <form style={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                alignIItems: 'center',
                height: '100%',
                flexDirection: 'column',
                marginInline: 'auto'
            }} onSubmit={handleSubmit}>
                <Typography
                    variant={`p`}
                >
                    Enter Spotify ID's
                </Typography>
                <Input
                    name={`email`}
                    type={`text`}
                    placeholder={`Email`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`password`}
                    type={`password`}
                    placeholder={`Password`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <input style={{
                    width: '25%',
                    border: '1px solid #aeaeae',
                    lineHeight: '25px',
                    backgroundColor: '#27ae60',
                    color: 'white',
                    marginTop: '10px'
                }} type={`submit`} value={`Login`}/>
            </form>
        </>
    ) : (
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

export default SpotifyPage;